@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Historique de vos analyses Git : </div>

                @if ($history)
                  @foreach ($history as $data)
                   <p>Consulter l'historique n° <a href="/storage/{{ $data }}">OCOCOICOCI </a></p><br><br>
                  @endforeach
                @else
                  <p> NOPE </p>
                @endif
            </div>

        </div>
    </div>
</div>
@endsection
