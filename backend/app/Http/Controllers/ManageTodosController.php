<?php

namespace App\Http\Controllers;

use App\Todos;
use Illuminate\Http\Request;
use App\Traits\ApiResponse;
use Illuminate\Support\Facades\Log;

class ManageTodosController extends Controller
{
    use ApiResponse;
    public function index()
    {
        $todos = Todos::all();
        return $this->apiResponse($todos);
    }

    public function store(Request $request)
    {
        $this->validated($request);

        try {
            $todos = Todos::create([
                'user_id' => $request->post('user_id'),
                'task' => $request->post('task'),
            ]);

            if($label_id = $request->post('label_id')){
                $this->updateLabel($label_id, $todos->id);
            }

            return $this->apiResponse('CREATED');
        } catch (\Exception $e) {
            Log::error($e);
            return $this->apiResponse($e->getMessage(), 500);
        }
    }

    protected function updateLabel($label_id, $id)
    {
        return Todos::where('id', $id)->update([
            'label_id' => $label_id
        ]);
    }

    public function edit(Request $request, $id)
    {
        if(!Todos::where('id', $id)->first()){
            return $this->apiResponse('Not Found', 404);
        }
        $this->validated($request);
        try {
            Todos::where('id', $id)->update([
                'user_id' => $request->post('user_id'),
                'task' => $request->post('task'),
                'completed' => $request->post('completed'),
            ]);

            if($label_id = $request->post('label_id')){
                $this->updateLabel($label_id, $id);
            }

            return $this->apiResponse('UPDATED');
        } catch (\Exception $e) {
            Log::error($e);
            return $this->apiResponse($e->getMessage(), 500);
        }
    }

    public function destroy($id)
    {
        if(!Todos::where('id', $id)->first()){
            return $this->apiResponse('Not Found', 404);
        }

        try {
            Todos::where('id', $id)->delete();
            return $this->apiResponse('DELETED');
        } catch (\Exception $e) {
            Log::error($e);
            return $this->apiResponse($e->getMessage(), 500);
        }

    }

    protected function validated(Request $request)
    {
        return $this->validate($request, [
            'user_id' => 'required',
            'task' => 'required'
        ]);
    }
}
