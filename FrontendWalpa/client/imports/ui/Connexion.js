import React, { Component } from 'react';


// App component - represents the whole app
export default class Connexion extends Component {
    render() {
        return (
                <div id="home">
                    <div className="container">
                        <div className="row align-items-start justify-content-between">
                            <div className="col-5 connexion">
                                <h2>Connexion</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Adresse Mail</label>
                                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="blablabla@blabla.fr"/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="formGroupExampleInput2">Mot de passe</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="00000000"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-5">
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    );
    }
}
