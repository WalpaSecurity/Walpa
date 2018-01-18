  import React, { Component } from 'react';


// App component - represents the whole app
export default class Dons extends Component {
    render() {
        return (
          <div id="dons">
            <div className="container">
              <div className="row justify-content-center justify-content-md-between">
                <div className="col-6">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-6">
                  <form className="text-white" action="" method="POST" id="formDons">
                    <div className="text-center bloc-montant">
                      <h2 className="font-weight-bold mt-0">Je fais un don</h2>
                      <div className="form-group">
                        <label htmlFor="montant">Montant de votre don</label>
                        <input type="text" className="form-control text-center" id="montant" name="montant" placeholder="Saisissez le montant de votre don" />
                      </div>
                    </div>
                    <div className="bloc-infos">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre email" />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" className="form-control">
                            <option value="" >Sexe</option>
                            <option value="M">M</option>
                            <option value="Mme">Mme</option>
                            <option value="Mlle">Mme</option>
                          </select>
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="nom">Nom</label>
                          <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom" />
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="prenom">Prénom</label>
                          <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prénom" />
                        </div>
                      </div>
                    </div>
                    <div className="bloc-paiement">
                      <div className="form-group">
                        <label htmlFor="email">Numero de carte</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Entrez votre email" />
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-2">
                          <label htmlFor="inputState">State</label>
                          <select id="inputState" className="form-control">
                          </select>
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="nom">Nom</label>
                          <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom" />
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="prenom">Prénom</label>
                          <input type="text" className="form-control" id="prenom" placeholder="Entrez votre prénom" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

    );
  }
}
