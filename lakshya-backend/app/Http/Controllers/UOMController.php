<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UnitOfMeasurement;
use Illuminate\Support\Facades\Date;
use App\Helpers\EncDecHelper;

class UOMController extends Controller
{
    //
    public function createUOM(Request $request)
    {
        $uom = new UnitOfMeasurement;
        $uom->unit_name = $request->unitName;
        //$uom->add_by = $userDetails->tbl_user_id;
        $uom->add_by = '2';
        $uom->add_date = Date::now()->toDateString();
        $uom->add_time = Date::now()->toTimeString();
        $uom->save();

        return response()->json(['message' => 'UOM created successfully'], 200);
    } 

    public function showUOM()
    {
        // Retrieve UOM records where the flag is set to 'show'
        $uoms = UnitOfMeasurement::where('flag','show')->get();
        
        // Iterate over each UOM record
        foreach($uoms as $uom)
        {
            // Encrypt the UOM ID using the EncDecHelper class
            $uom->encUomId = EncDecHelper::encDecId($uom->tbl_uom_id,'encrypt');

            // Unset the non-encrypted ID
            unset($uom->tbl_uom_id,$uom->add_by);
        }

        // Return a JSON response containing the encrypted UOM IDs
        return response()->json(['message' => $uoms]);
    }

    public function deleteUOM(Request $request, $id)
    {
        //decrypt the id 
        $decUomId = EncDecHelper::encDecId($id,'decrypt');

        // Find the UOM record by its ID
        $uom = UnitOfMeasurement::findOrFail($decUomId);

        //set the flag to delete
        $uom->flag ='deleted';
        //$uom->deleted_by = $userDetails('user');
        $uom->deleted_by = '2';
        $uom->deleted_date = Date::now()->toDateString();
        $uom->deleted_time = Date::now()->toTimeString();

        $uom->save();

        //return a json response
        return response()->json(['message'=>'UOM deleted successfully']);
    }
}
