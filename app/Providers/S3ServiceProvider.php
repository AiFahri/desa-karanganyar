<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Storage;
use Illuminate\Filesystem\FilesystemAdapter;
use Aws\S3\S3Client;
use League\Flysystem\AwsS3V3\AwsS3V3Adapter;
use League\Flysystem\Filesystem;

class S3ServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Storage::extend('s3_idcloudhost', function ($app, $config) {
            $s3Config = [
                'credentials' => [
                    'key' => $config['key'],
                    'secret' => $config['secret'],
                ],
                'region' => $config['region'],
                'version' => 'latest',
                'endpoint' => $config['endpoint'],
                'use_path_style_endpoint' => $config['use_path_style_endpoint'] ?? false,
                'http' => [
                    'verify' => false,
                    'timeout' => 60,
                    'connect_timeout' => 60,
                ]
            ];

            $client = new S3Client($s3Config);
            $adapter = new AwsS3V3Adapter($client, $config['bucket']);
            $filesystem = new Filesystem($adapter);

            // Create custom FilesystemAdapter with URL support
            $filesystemAdapter = new class($filesystem, $adapter, $config) extends FilesystemAdapter {
                public function url($path)
                {
                    // Generate URL manually using config
                    $baseUrl = $this->config['url'] ?? $this->config['endpoint'];
                    $bucket = $this->config['bucket'];
                    
                    $baseUrl = rtrim($baseUrl, '/');
                    
                    if ($this->config['use_path_style_endpoint'] ?? false) {
                        return $baseUrl . '/' . $bucket . '/' . ltrim($path, '/');
                    }
                    
                    $parsedUrl = parse_url($baseUrl);
                    $scheme = $parsedUrl['scheme'] ?? 'https';
                    $host = $parsedUrl['host'] ?? '';
                    
                    return $scheme . '://' . $bucket . '.' . $host . '/' . ltrim($path, '/');
                }
            };

            return $filesystemAdapter;
        });
    }
}



