<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\SkillSeeder;
use Database\Seeders\ProjectSeeder;
use Database\Seeders\EducationSeeder;
use Database\Seeders\TestimonialSeeder;
use Database\Seeders\FaqSeeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            SkillSeeder::class,
            ProjectSeeder::class,
            EducationSeeder::class,
            TestimonialSeeder::class,
            FaqSeeder::class,
        ]);
    }
}