<?php

namespace App\Controllers;

use App\Models\Categories;

class CategoriesController extends Controller
{
  public function index($request, $response)
  {
    try {
      $payload = Categories::all();
      return $response->withStatus(200)->withJson($payload);
    }
    catch(Exception $ex) {
      return $response->withJson(array('error' => $ex->getMessage()), 422);
    }    
  }
}