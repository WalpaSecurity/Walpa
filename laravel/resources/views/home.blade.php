@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    @if (session('status'))

                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!

                </div>

                <div>
                  <a href="{{ url('/donation') }}">Faire des dons</a>

                </div>
                <div>
                    <a href="{{ url('/activity') }}">Ajouter un fichier GITHUB</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
