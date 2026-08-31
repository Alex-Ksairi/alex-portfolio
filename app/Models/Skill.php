<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class Skill extends Model
{
    protected $fillable = [
        'name',
        'category',
        'sort_order',
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}