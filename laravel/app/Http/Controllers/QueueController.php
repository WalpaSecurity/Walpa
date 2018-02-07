
<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessReport;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class QueueController extends Controller
{
    /**
     * Store
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        // Create...

        ProcessReport::dispatch();
    }
}
