<?php

namespace App\Controllers;

use App\Models\Courses;

class CoursesController extends Controller
{
  public function index($request, $response)
  {
    try {
      $payload = Courses::all();
      return $response->withStatus(200)->withJson($payload);
    }
    catch(Exception $ex) {
      return $response->withJson(array('error' => $ex->getMessage()), 422);
    }    
  }

  public function coursesById($request, $response)
  {
    try {
      $id = $request->getAttribute('id');
      $payload = Courses::find($id);

      if($payload) {
        return $response->withStatus(200)->withJson($payload);
      }
      else {
        return $response->withJson(array('status' => 'Course Not Found'),422);
      }
    }
    catch(Exception $ex) {
      return $response->withJson(array('error' => $ex->getMessage()), 422);
    }   
  }

  public function coursesByCategories($request, $response)
  {
    try {
      $id = $request->getAttribute('id');
      $payload = Courses::where('category_id', $id)->get();

      if($payload) {
        return $response->withStatus(200)->withJson($payload);
      }
      else {
        return $response->withJson(array('status' => 'Course Not Found'),422);
      }
    }
    catch(Exception $ex) {
      return $response->withJson(array('error' => $ex->getMessage()), 422);
    }   
  }
}
