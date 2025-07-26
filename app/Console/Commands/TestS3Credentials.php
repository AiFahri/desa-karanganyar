<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Aws\S3\S3Client;
use Aws\Exception\AwsException;

class TestS3Credentials extends Command
{
    protected $signature = 'test:s3-credentials';
    protected $description = 'Test S3 credentials directly with AWS SDK';

    public function handle()
    {
        try {
            $this->info('Testing S3 credentials directly...');
            
            $config = [
                'version' => 'latest',
                'region' => config('filesystems.disks.s3.region'),
                'endpoint' => config('filesystems.disks.s3.endpoint'),
                'use_path_style_endpoint' => config('filesystems.disks.s3.use_path_style_endpoint'),
                'credentials' => [
                    'key' => config('filesystems.disks.s3.key'),
                    'secret' => config('filesystems.disks.s3.secret'),
                ],
                'http' => [
                    'verify' => false, // Disable SSL verification
                ]
            ];
            
            $this->info('S3 Config:');
            $this->info('Region: ' . $config['region']);
            $this->info('Endpoint: ' . $config['endpoint']);
            $this->info('Key: ' . substr($config['credentials']['key'], 0, 8) . '...');
            $this->info('Use Path Style: ' . ($config['use_path_style_endpoint'] ? 'true' : 'false'));
            $this->info('SSL Verify: disabled');
            
            Log::info('S3 Direct Test Config', $config);
            
            $s3Client = new S3Client($config);
            
            // Test list buckets
            $this->info('Testing list buckets...');
            $result = $s3Client->listBuckets();
            $this->info('✅ List buckets successful');
            Log::info('List buckets result', ['buckets' => $result['Buckets']]);
            
            // Test put object
            $bucket = config('filesystems.disks.s3.bucket');
            $key = 'test/direct-test-' . time() . '.txt';
            $content = 'Direct S3 test - ' . now();
            
            $this->info("Testing put object to bucket: {$bucket}, key: {$key}");
            
            $result = $s3Client->putObject([
                'Bucket' => $bucket,
                'Key' => $key,
                'Body' => $content,
                'ACL' => 'public-read'
            ]);
            
            $this->info('✅ Put object successful');
            Log::info('Put object result', ['result' => $result->toArray()]);
            
            // Test get object URL
            $url = $s3Client->getObjectUrl($bucket, $key);
            $this->info("Object URL: {$url}");
            
            // Test delete object
            $s3Client->deleteObject([
                'Bucket' => $bucket,
                'Key' => $key
            ]);
            $this->info('✅ Delete object successful');
            
            $this->info('🎉 Direct S3 test completed successfully!');
            
        } catch (AwsException $e) {
            $this->error('❌ AWS Exception: ' . $e->getMessage());
            $this->error('AWS Error Code: ' . $e->getAwsErrorCode());
            $this->error('AWS Error Type: ' . $e->getAwsErrorType());
            
            Log::error('AWS S3 Exception', [
                'message' => $e->getMessage(),
                'aws_error_code' => $e->getAwsErrorCode(),
                'aws_error_type' => $e->getAwsErrorType(),
                'trace' => $e->getTraceAsString()
            ]);
            
        } catch (\Exception $e) {
            $this->error('❌ General Exception: ' . $e->getMessage());
            $this->error('File: ' . $e->getFile() . ':' . $e->getLine());
            
            Log::error('S3 Direct Test Exception', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}
