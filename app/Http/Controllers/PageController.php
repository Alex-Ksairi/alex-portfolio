<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Education;
use App\Models\Testimonial;
use App\Models\Faq;

class PageController extends Controller
{
    public function home()
    {
        $projects = Project::with('skills')
            ->where('featured', true)
            ->orderBy('sort_order')
            ->get();
        
        $educations = Education::orderBy('sort_order')->get();
        $testimonials = Testimonial::orderBy('sort_order')->get();
        $faqs = Faq::orderBy('sort_order')->get();

        return Inertia::render('Home', [
            'projects' => $projects,
            'educations' => $educations,
            'testimonials' => $testimonials,
            'faqs' => $faqs,
        ]);
    }

    public function projects()
    {
        $projects = Project::with('skills')
            ->orderBy('sort_order')
            ->get();

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }
}