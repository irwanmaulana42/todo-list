<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['as' => 'api.', 'prefix' => 'api'], function() use ($router){
    $router->group(['prefix' => 'v1'], function() use ($router){
        $router->post('/register', 'AuthController@register');
        $router->post('/login', 'AuthController@login');

        $router->group(['middleware' => 'auth'], function() use ($router){
            $router->get('/verify', 'AuthController@verify');
            $router->group(['prefix' => 'label', 'as' => 'label.'], function() use ($router){
                $router->get('/', 'ManageLabelsController@index');
                $router->post('/store', 'ManageLabelsController@store');
                $router->put('/edit/{id}', 'ManageLabelsController@edit');
                $router->delete('/delete/{id}', 'ManageLabelsController@destroy');
            });

            $router->group(['prefix' => 'todos', 'as' => 'todos.'], function() use ($router){
                $router->get('/', 'ManageTodosController@index');
                $router->post('/store', 'ManageTodosController@store');
                $router->put('/edit/{id}', 'ManageTodosController@edit');
                $router->delete('/delete/{id}', 'ManageTodosController@destroy');
            });

            $router->group(['prefix' => 'users', 'as' => 'users.'], function() use ($router){
                $router->get('/', 'ManageUsersController@index');
                $router->post('/store', 'ManageUsersController@store');
                $router->post('/confirmation/{id}', 'ManageUsersController@confirmation');
                $router->put('/edit/{id}', 'ManageUsersController@edit');
                $router->delete('/delete/{id}', 'ManageUsersController@destroy');
            });
        });

    });

});
