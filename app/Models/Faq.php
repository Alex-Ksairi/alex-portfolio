<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $fillable = [
        'faq_question',
        'faq_answer',
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
