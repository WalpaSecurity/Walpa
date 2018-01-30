  import React, { Component } from 'react';


// App component - represents the whole app
export default class Dons extends Component {
    render() {
        return (
          <section id="dons" className="text-center text-lg-left">
            <div className="container">
              <div className="row justify-content-center justify-content-lg-between">
                <div className="col-lg-5">
                  <h1>Soutenez-nous et faites-nous un don !</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
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
                      <p className="text-center">Selectionnez votre moyen de paiement</p>
                      <div className="row no-gutters align-items-end">
                        <div className="col-3 text-center">
                          <div className="moyen-paiement">
                            <img src="images/masterCards.png" width="60px" alt="" className="img-fluid" />
                            <br/>
                            <input type="radio" name="paiement_option" id="masterCards" value="masterCards" />
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="moyen-paiement">
                            <img src="images/visa.png" width="60px" alt="" className="img-fluid" />
                            <br/>
                            <input type="radio" name="paiement_option" id="masterCards" value="visa" />
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="moyen-paiement">
                            <img src="images/cb.png" width="60px" alt="" className="img-fluid" />
                            <br/>
                            <input type="radio" name="paiement_option" id="masterCards" value="cb" />
                          </div>
                        </div>
                        <div className="col-3 text-center">
                          <div className="moyen-paiement">
                            <img src="images/paypal.png" width="60px" alt="" className="img-fluid" />
                            <br/>
                            <input type="radio" name="paiement_option" id="paypal" value="paypal" />
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div className="form-group">
                        <label htmlFor="email">Numéro de votre carte bancaire</label>
                        <input type="email" className="form-control" id="email" name="email" size="16" placeholder="X X X X    X X X X    X X X X    X X X X" />
                      </div>
                      <div className="form-row justify-content-between">
                        <div className="form-group col-md-5">
                          <label htmlFor="prenom">{"Date d'expiration"}</label>
                          <div className="row no-gutters">
                            <div className="col">
                              <input type="text" className="form-control" placeholder="MM" />
                            </div>
                            <div className="col">
                              <input type="text" className="form-control" placeholder="AAAA" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-5">
                          <label htmlFor="prenom">CVC <span title="Entrez les 3 numéros au dos de la carte">(?)</span></label>
                          <input type="text" className="form-control" id="prenom" placeholder="Cryptogramme" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

    );
  }
}
