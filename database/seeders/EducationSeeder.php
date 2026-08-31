<?php

namespace Database\Seeders;

use App\Models\Education;
use Illuminate\Database\Seeder;

class EducationSeeder extends Seeder
{
    public function run(): void
    {
        Education::create([
            'title' => 'IT Specialist in Application Development',
            'institution' => 'GFN',
            'location' => 'Hamburg',
            'degree' => '(IHK) professional qualification',
            'start' => '2024-07-07',
            'end' => '2026-06-16',
            'complete' => true,
            'sort_order' => 1,
        ]);

        Education::create([
            'title' => 'Web Development Training',
            'institution' => 'Digital Career Institute (DCI)',
            'location' => 'Hamburg/ Berlin/ Remote',
            'degree' => 'Certificate',
            'start' => '2020-08-01',
            'end' => '2021-09-30',
            'complete' => true,
            'sort_order' => 2,
        ]);

        Education::create([
            'title' => 'Studies in Computer Science',
            'institution' => 'University Leipzig',
            'location' => 'Leipzig',
            'degree' => '4 Semesters / No degree',
            'start' => '2018-10-01',
            'end' => '2020-03-31',
            'complete' => false,
            'sort_order' => 3,
        ]);

        Education::create([
            'title' => 'Preparatory College & Abitur',
            'institution' => 'Studienkolleg Leipzig',
            'location' => 'Leipzig',
            'degree' => 'Graduated with a German Abitur',
            'start' => '2016-03-01',
            'end' => '2018-07-31',
            'complete' => true,
            'sort_order' => 4,
        ]);

        Education::create([
            'title' => 'Hotel Management (Diploma)',
            'institution' => 'Al Abjadaya Center for Science',
            'location' => 'Damascus / Syria',
            'degree' => 'Diploma',
            'start' => '2012-03-01',
            'end' => '2015-03-31',
            'complete' => true,
            'sort_order' => 5,
        ]);
    }
}
