<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        // Ambil semua data existing
        $umkmData = DB::table('umkm')->get();
        
        foreach ($umkmData as $umkm) {
            if ($umkm->menu_umkm && is_string($umkm->menu_umkm)) {
                // Konversi string ke array
                $menuArray = array_filter(
                    array_map('trim', explode("\n", $umkm->menu_umkm)),
                    function($item) { return !empty($item); }
                );
                
                // Update ke format JSON
                DB::table('umkm')
                    ->where('id', $umkm->id)
                    ->update(['menu_umkm' => json_encode($menuArray)]);
            }
        }
        
        // Ubah column type ke JSON
        Schema::table('umkm', function (Blueprint $table) {
            $table->json('menu_umkm')->nullable()->change();
        });
    }

    public function down()
    {
        // Rollback - konversi kembali ke string
        $umkmData = DB::table('umkm')->get();
        
        foreach ($umkmData as $umkm) {
            if ($umkm->menu_umkm) {
                $menuArray = json_decode($umkm->menu_umkm, true);
                if (is_array($menuArray)) {
                    $menuString = implode("\n", $menuArray);
                    DB::table('umkm')
                        ->where('id', $umkm->id)
                        ->update(['menu_umkm' => $menuString]);
                }
            }
        }
        
        Schema::table('umkm', function (Blueprint $table) {
            $table->text('menu_umkm')->nullable()->change();
        });
    }
};