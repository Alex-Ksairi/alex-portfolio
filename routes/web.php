<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;


Route::get('/', [PageController::class, 'home']);

Route::get('/about', [PageController::class, 'about']);

Route::get('/projects', [PageController::class, 'projects']);

Route::get('/contact', [PageController::class, 'contact']);

Route::get('/skills', [PageController::class, 'skills']);

Route::get('/faq', [PageController::class, 'faq']);