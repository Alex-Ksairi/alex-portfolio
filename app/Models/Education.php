<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $fillable = [
        'title',
        'institution',
        'location',
        'degree',
        'start',
        'end',
        'complete',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'complete' => 'boolean',
        ];
    }
}
