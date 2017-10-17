<?php
	//-- Controllers
	use App\Controllers\CoursesController;
	use App\Controllers\CategoriesController;

	//-- Route
	$app->get('/', function($request, $response){
		$payload = "success";
		return $response->withStatus(200)->withJson($payload);
	});

	// Retrieve token
	$app->get('/token', function($request, $response){
		$apijwt = $this->jwt;

		$now = new DateTime();
		$future = new DateTime("now +12 hour");

		$payload = [
			"iat" => $now->getTimeStamp(),
			"exp" => $future->getTimeStamp(),
			"sub" => $SERVER["PHP_AUTH_USER"],
		];

		$secret = "supersecretkeyyoushouldnotcommit";
		$token = $apijwt->encode($payload, $secret, "HS512");
		$data["token"] = $token;

		return $response->withStatus(201)->withHeader("Content-Type", "application/json")->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
	});

	// Protected by token
	$app->group('/api', function(){
		$this->get('/', CoursesController::class . ':index');
		$this->get('/courses', CoursesController::class . ':index');
		$this->get('/courses/{id}', CoursesController::class . ':coursesById');
		$this->get('/courses/categories/{id}', CoursesController::class . ':coursesByCategories');
		$this->get('/categories', CategoriesController::class . ':index');
	});