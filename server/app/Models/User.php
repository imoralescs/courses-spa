<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
	// Eloquent implementation
	protected $table = 'users';

	// Fillable to introduce data to database with Eloquent
	protected $fillable = [];
}
