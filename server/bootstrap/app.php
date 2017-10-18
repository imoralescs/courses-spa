<?php
  // Basic Slim Route
  $app = new \Slim\App([
  	'settings' => [
  		'displayErrorDetails' => true,
      // Used Eloquent
      'db' => [
        'driver' => 'mysql',
        'host' => 'mysql',
        'database' => 'name_db',
        'username' => 'user',
        'password' => 'password',
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
      ]
  	],
  ]);

  // Slim Container - Is a Dependency Container, used for dependency injection.
  $container = $app->getContainer();

  // We are going to name this variable $capsule, this is the way laravel component.
  $capsule = new \Illuminate\Database\Capsule\Manager;
  $capsule->addConnection($container['settings']['db']);
  $capsule->setAsGlobal();
  $capsule->bootEloquent();

  // Installing Database to used PDO
  $container['db_pdo'] = function(){
    return new PDO('mysql:host=mysql;dbname=name_db','user','password');
  };

  // Installing Database to used Eloquent
  $container['db_elo'] = function($container) use ($capsule){
    return $capsule;
  };

  // CORS
  $app->options('/{routes:.+}', function ($request, $response) {
    return $response;
  });

  $app->add(function ($request, $response, $next) {
    $response = $next($request, $response);
    return $response
      ->withHeader('Access-Control-Allow-Origin', '*')
      ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
      ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  });

  // Installing JWT Authentication
  $container['jwt'] = function($container){
    $jwt = new \Firebase\JWT\JWT();
    return $jwt;
  };

  // Protect JWT Authentication
  $app->add(new \Slim\Middleware\JwtAuthentication([
    'path' => ["/api"],
    'secure' => false,
    "secret" => "supersecretkeyyoushouldnotcommit",
    "error" => function($request, $response, $arguments){
      $data["status"] = "error";
      $data["message"] = $arguments["message"];
      return $response->withHeader('Access-Control-Allow-Origin', '*')
      ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
      ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      ->withHeader("Content-Type", "application/json")
      ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
  ]));

  // Retrieve JWT Token by Basic Authentication
  $app->add(new \Slim\Middleware\HttpBasicAuthentication([
    'path' => '/token',
    'secure' => false, // Used true on production
    'authenticator' => new \App\Middleware\JWTAuthenticationMiddleware()
  ]));

  require_once(__DIR__ .'/../routes/api.php');
