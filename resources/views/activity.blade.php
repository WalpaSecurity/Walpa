@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">ACTIVITY REPORT</div>

                @if ($report)
                   {{$report}}
                @else
                  <p> NOPE </p>
                @endif
            </div>





            <form action="{{ url('activity') }}" method="POST" class="form-horizontal">
              {{ csrf_field() }}

                <div class="form-group">
                    <label for="task" class="col-sm-3 control-label">URL Git : </label>

                    <div class="col-sm-6">
                      @if ($errors->activity && $errors->activity->first() == "The url field is required.")
                        <input type="text" name="url" style="border-bottom: red solid 2px;" placeholder="Le champs de doit pas être vide" id="url" class="form-control">
                      @else
                        <input type="text" name="url" id="url" class="form-control">
                      @endif


                    </div>
                </div>

                <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-6">
                        <button type="submit" class="btn btn-default">
                            <i class="fa fa-plus"></i> Analyser mon fichier
                        </button>
                    </div>
                </div>
            </form>



        </div>
    </div>
</div>
@endsection
