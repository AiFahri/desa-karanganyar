<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class TestS3Connection extends Command
{
    protected $signature = 'test:s3';
    protected $description = 'Test S3 connection to IDCloudHost';

    public function handle()
    {
        try {
            $this->info('Testing S3 connection to IDCloudHost...');
            
            // Test connection dengan disk s3_idcloudhost
            $disk = Storage::disk('s3_idcloudhost');
            
            // Show config
            $this->info('Config check:');
            $this->info('Endpoint: ' . config('filesystems.disks.s3_idcloudhost.endpoint'));
            $this->info('Bucket: ' . config('filesystems.disks.s3_idcloudhost.bucket'));
            $this->info('Region: ' . config('filesystems.disks.s3_idcloudhost.region'));
            $this->info('Key: ' . substr(config('filesystems.disks.s3_idcloudhost.key'), 0, 8) . '...');
            $this->info('Use Path Style: ' . (config('filesystems.disks.s3_idcloudhost.use_path_style_endpoint') ? 'true' : 'false'));
            $this->info('SSL Verify: disabled');
            
            // Test dengan AWS SDK langsung dulu
            $this->info('Testing with direct AWS SDK...');
            $s3Client = new \Aws\S3\S3Client([
                'version' => 'latest',
                'region' => config('filesystems.disks.s3_idcloudhost.region'),
                'endpoint' => config('filesystems.disks.s3_idcloudhost.endpoint'),
                'use_path_style_endpoint' => config('filesystems.disks.s3_idcloudhost.use_path_style_endpoint'),
                'credentials' => [
                    'key' => config('filesystems.disks.s3_idcloudhost.key'),
                    'secret' => config('filesystems.disks.s3_idcloudhost.secret'),
                ],
                'http' => [
                    'verify' => false,
                ]
            ]);
            
            $bucket = config('filesystems.disks.s3_idcloudhost.bucket');
            $testKey = 'test/direct-sdk-' . time() . '.txt';
            $testContent = 'Direct SDK test - ' . now();
            
            $this->info("Testing direct SDK upload to: {$testKey}");
            
            $sdkResult = $s3Client->putObject([
                'Bucket' => $bucket,
                'Key' => $testKey,
                'Body' => $testContent,
                'ACL' => 'public-read'
            ]);
            
            $this->info('✅ Direct SDK upload successful!');
            $this->info('SDK Result: ' . json_encode($sdkResult->toArray()));
            
            // Clean up SDK test
            $s3Client->deleteObject([
                'Bucket' => $bucket,
                'Key' => $testKey
            ]);
            
            // Now test Laravel Storage
            $this->info('Testing Laravel Storage...');
            $testContent = 'Test file from Laravel - ' . now();
            $testPath = 'test/test-' . time() . '.txt';
            
            $this->info("Uploading test file to: {$testPath}");
            Log::info('Attempting S3 upload', ['path' => $testPath, 'content_length' => strlen($testContent)]);
            
            // Enable throwing exceptions temporarily
            config(['filesystems.disks.s3_idcloudhost.throw' => true]);
            
            $result = $disk->put($testPath, $testContent);
            
            Log::info('S3 upload result', ['result' => $result, 'path' => $testPath]);
            
            if ($result) {
                $this->info('✅ Laravel Storage upload successful!');
                
                // Test exists
                $exists = $disk->exists($testPath);
                $this->info('File exists: ' . ($exists ? 'Yes' : 'No'));
                
                // Test get URL
                try {
                    $url = $disk->url($testPath);
                    $this->info("File URL: {$url}");
                } catch (\Exception $e) {
                    $this->error("URL generation failed: " . $e->getMessage());
                }
                
                // Test delete
                $deleted = $disk->delete($testPath);
                $this->info('✅ Test file deleted: ' . ($deleted ? 'Yes' : 'No'));
                
                $this->info('🎉 S3 connection working perfectly!');
            } else {
                $this->error('❌ Laravel Storage upload failed - no result returned');
            }
            
        } catch (\Aws\Exception\AwsException $e) {
            $this->error('❌ AWS Exception: ' . $e->getMessage());
            $this->error('AWS Error Code: ' . $e->getAwsErrorCode());
            Log::error('AWS S3 Exception in test', [
                'message' => $e->getMessage(),
                'aws_error_code' => $e->getAwsErrorCode(),
                'trace' => $e->getTraceAsString()
            ]);
        } catch (\Exception $e) {
            $this->error('❌ S3 Connection failed: ' . $e->getMessage());
            $this->error('File: ' . $e->getFile() . ':' . $e->getLine());
            Log::error('S3 Connection Error', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);
        }
    }
}






