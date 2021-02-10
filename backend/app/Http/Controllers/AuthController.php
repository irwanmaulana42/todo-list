<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'username' => 'required|unique:users',
            'password' => 'required',
        ]);

        try {
            User::create([
                'name' => $request->post('name'),
                'username' => $request->post('username'),
                'password' => Hash::make($request->post('password'))
            ]);
            return response()->json(['code' => 200, 'message' => 'CREATED']);
        } catch (\Exception $e) {
            Log::error($e);
            return response()->json(['code' => 409, 'message' => 'User Registration Failed']);
        }
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $credentials = $request->only(['username', 'password']);

        if (! $token = Auth::attempt($credentials)) {
            return response()->json(['code' => 404,'message' => 'Not Found'], 200);
        }

        return $this->respondWithToken($token);
    }

    public function verify(){
        return response()->json([
            'code' => 200,
            'message' => 'Authorized'
        ]);
    }
}
