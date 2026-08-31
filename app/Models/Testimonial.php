<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'testimonial_text',
        'author',
        'image',
        'company_url',
        'author_role',
        'linkedin',
        'featured',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'featured' => 'boolean',
        ];
    }
}
