

<p> Voici les donations : </p>

<p> {{$donationE}} € </p>
<p> {{$donationB}} BC </p>
<p> {{$donationEi}} ether </p>

<form action="{{ url('donation') }}" method="POST" class="form-horizontal">
  {{ csrf_field() }}

    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">Faire un don</label>

        <div class="col-sm-6">
            <input type="text" name="firstName" id="firstName" placeholder="Prénom" class="form-control">
        </div>
        <div class="col-sm-6">
            <input type="text" name="lastName" id="lastName" placeholder="Nom" class="form-control">
        </div>
        <div class="col-sm-6">
            <input type="text" name="email" id="email" placeholder="Email" class="form-control">
        </div>
        <div class="col-sm-6">
            <input type="text" name="amount" id="amount" placeholder="Montant" class="form-control">
        </div>

        <div class="col-sm-6">
            <input type="text" name="type" id="type" placeholder="Type" class="form-control">
        </div>
    </div>

    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-6">
            <button type="submit" class="btn btn-default">
                <i class="fa fa-plus"></i> Envoyer
            </button>
        </div>
    </div>
</form>
