import React, { Component } from 'react';


// App component - represents the whole app
export default class Connexion extends Component {
    render() {
        return (
                <section id="connexion-inscription">
                    <div className="container">
                        <div className="row align-items-start justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4 connexion">
                                <h2>Connexion</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse Mail</label>
                                    <input type="email" className="form-control" id="email" placeholder="Entrez votre e-mail"/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="mdp">Mot de passe</label>
                                        <input type="text" className="form-control" id="mdp" placeholder="Entrez votre mot de passe"/>
                                    </div>
                                    <button className="btn btn-primary">Se connecter</button>
                                </form>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 inscription">
                                <h2>Inscription</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Adresse mail</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="blablabla@blabla.fr"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Nom </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="What's yo name son ?"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Prénom </label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="What's yo surname cunt ?"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put here yo mothafucking password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Confirmation mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Put here yo mothafucking password again"/>
                                    </div>
                                    <button className="btn btn-primary">Se connecter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

    );
    }
}
