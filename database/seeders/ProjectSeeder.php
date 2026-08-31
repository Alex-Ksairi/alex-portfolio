<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $alex = Project::create([
            'title' => 'Alexander Ksairi | Portfolio',
            'slug' => 'alexander-ksairi-portfolio',
            'description' => 'Currently working on my second portfolio built using PHP/ Laravel and React. Stay tuned!',
            'image' => '/images/projects/alex-portfolio.avif',
            'url' => 'https://alexander-ksairi-portfolio.test',
            'featured' => true,
            'complete' => false,
            'sort_order' => 1,
        ]);

        $alex->skills()->attach(
            Skill::whereIn('sort_order', [6, 7, 1, 2, 4, 5, 8, 9, 16, 20, 25, 26, 28, 37])->pluck('id')
        );

        $feldherr = Project::create([
            'title' => 'Feldherr',
            'slug' => 'feldherr',
            'description' => 'Automation product content using laravel and GraphQL',
            'image' => '/images/projects/feldherr.avif',
            'url' => 'https://www.feldherr.com/de',
            'featured' => true,
            'complete' => true,
            'sort_order' => 2,
        ]);

        $feldherr->skills()->attach(
            Skill::whereIn('sort_order', [6, 7, 9, 38, 37, 30, 32, 25, 17])->pluck('id')
        );

        $vjf = Project::create([
            'title' => 'Vereinigung Junger Freiwillige e.V.',
            'slug' => 'vjf',
            'description' => 'Currently working on a migration from WordPress to Webflow. Sty tuned!',
            'image' => '/images/projects/vjf.webp',
            'url' => 'https://vjf.de',
            'featured' => true,
            'complete' => false,
            'sort_order' => 3,
        ]);

        $vjf->skills()->attach(
            Skill::whereIn('sort_order', [10, 12, 1, 2, 37])->pluck('id')
        );

        $imt = Project::create([
            'title' => 'International Money Transfer',
            'slug' => 'international-money-transfer',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/imt.webp',
            'url' => 'https://www.internationalmoneytransfer.com',
            'featured' => true,
            'complete' => true,
            'sort_order' => 4,
        ]);

        $imt->skills()->attach(
            Skill::whereIn('sort_order', [10, 2, 4, 13, 31, 34])->pluck('id')
        );

        $famuPool = Project::create([
            'title' => 'FamuPool',
            'slug' => 'famupool',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/famu-pool.webp',
            'url' => 'https://famupool.de/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 5,
        ]);

        $famuPool->skills()->attach(
            Skill::whereIn('sort_order', [11, 13, 31, 34])->pluck('id')
        );

        $synaos = Project::create([
            'title' => 'SYNAOS',
            'slug' => 'synaos',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/synaos.webp',
            'url' => 'https://www.synaos.com/en',
            'featured' => true,
            'complete' => true,
            'sort_order' => 6,
        ]);

        $synaos->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 31, 34])->pluck('id')
        );

        $nuva = Project::create([
            'title' => 'NUVA',
            'slug' => 'nuva',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/nuva.webp',
            'url' => 'https://www.nuva.de/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 7,
        ]);

        $nuva->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 31, 34])->pluck('id')
        );

        $micropsi = Project::create([
            'title' => 'Micropsi',
            'slug' => 'micropsi',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/micropsi.webp',
            'url' => 'https://www.micropsi-industries.com/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 8,
        ]);

        $micropsi->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 31, 34])->pluck('id')
        );

        $skyzr = Project::create([
            'title' => 'SKYZR',
            'slug' => 'skyzr',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/skyzr.webp',
            'url' => 'https://www.skyzr.com/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 9,
        ]);

        $skyzr->skills()->attach(
            Skill::whereIn('sort_order', [10, 11, 1, 2, 4, 13, 31, 34])->pluck('id')
        );

        $checkdeinehaut = Project::create([
            'title' => 'checkdeinehaut',
            'slug' => 'checkdeinehaut',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/checkdeinehaut.webp',
            'url' => 'https://checkdeinehaut.de/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 10,
        ]);

        $checkdeinehaut->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 13, 31, 34])->pluck('id')
        );

        $miamedes = Project::create([
            'title' => 'Miamedes',
            'slug' => 'miamedes',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/miamedes.webp',
            'url' => 'https://www.miamedes.de/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 11,
        ]);

        $miamedes->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 31, 34])->pluck('id')
        );

        $elam = Project::create([
            'title' => 'ELAM Solutions',
            'slug' => 'elam-solutions',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/elam-solutions.webp',
            'url' => 'https://www.elam-solutions.com/',
            'featured' => true,
            'complete' => true,
            'sort_order' => 12,
        ]);

        $elam->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 15, 31, 34])->pluck('id')
        );

        $peratos = Project::create([
            'title' => 'paretos',
            'slug' => 'paretos',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/paretos.webp',
            'url' => 'https://www.paretos.com/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 13,
        ]);

        $peratos->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 31, 34])->pluck('id')
        );

        $filterkonfigurator = Project::create([
            'title' => 'Filterkonfigurator',
            'slug' => 'filterkonfigurator',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/filterkonfigurator.webp',
            'url' => 'https://www.filterkonfigurator.de/?tab=home&lang=de_de',
            'featured' => true,
            'complete' => true,
            'sort_order' => 14,
        ]);

        $filterkonfigurator->skills()->attach(
            Skill::whereIn('sort_order', [11, 1, 2, 13, 31, 34])->pluck('id')
        );

        $narz = Project::create([
            'title' => 'NARZ',
            'slug' => 'narz',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/narz.webp',
            'url' => 'https://www.narz-avn.de/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 15,
        ]);

        $narz->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 13, 31, 34])->pluck('id')
        );

        $rebuy = Project::create([
            'title' => 'rebuy',
            'slug' => 'rebuy',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/rebuy.webp',
            'url' => 'https://company.rebuy.com/en/home',
            'featured' => false,
            'complete' => true,
            'sort_order' => 16,
        ]);

        $rebuy->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 31, 34])->pluck('id')
        );

        $avi = Project::create([
            'title' => 'Avi Medical',
            'slug' => 'avi-medical',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/avi-medical.webp',
            'url' => 'https://en.avimedical.com/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 17,
        ]);

        $avi->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 31, 34])->pluck('id')
        );

        $klarkode = Project::create([
            'title' => 'Klarkode (02100 Digital)',
            'slug' => 'klarkode',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros!',
            'image' => '/images/projects/klarkode.webp',
            'url' => 'https://www.klarkode.com/',
            'featured' => false,
            'complete' => true,
            'sort_order' => 18,
        ]);

        $klarkode->skills()->attach(
            Skill::whereIn('sort_order', [10, 1, 2, 4, 13, 15, 31, 34])->pluck('id')
        );
    }
}