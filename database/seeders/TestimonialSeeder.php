<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        Testimonial::create([
            'testimonial_text' => 'Alex exemplifies volunteer commitment and professionalism. As the manager of our website vjf.de, he combines technical expertise, creativity, and heartfelt passion for our organization and its goals. His dedication goes far beyond the usual, making him an invaluable asset. Working with Alex means gaining not just an expert but a reliable and solutions-driven team player. Highly recommended!',
            'author' => 'Jonas Richter',
            'image' => '/images/jonas-richter.webp',
            'company_url' => 'https://vjf.de',
            'author_role' => 'Managing Manager',
            'linkedin' => 'https://www.linkedin.com/in/jonas-richter-berlin/',
            'featured' => true,
            'sort_order' => 1,
        ]);

        Testimonial::create([
            'testimonial_text' => 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            'author' => 'Max Mustermann',
            'image' => '/images/alex.png',
            'company_url' => 'https://google.com',
            'author_role' => 'CEO',
            'linkedin' => 'https://www.linkedin.com/in/alexander-ksairi-7563a1211/',
            'featured' => true,
            'sort_order' => 2,
        ]);
    }
}
