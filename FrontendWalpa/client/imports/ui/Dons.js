  import React, { Component } from 'react';


// App component - represents the whole app
export default class Dons extends Component {
    render() {
        return (
          <section id="dons" className="text-center text-lg-left">
            <div className="container">
              <div className="text-center">
                <h1>Soutenez-nous et faites-nous un don !</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <div className="row">
                  <div className="col-12 col-lg-6 modePaiement1">
                    <h3>Paiement via Paypal ou CB</h3>
                    <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input type="hidden" name="hosted_button_id" value="8UMHDPG4R9UGS" />
                      <input type="image" src="https://www.sandbox.paypal.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne" />
                      <img alt="" border="0" src="https://www.sandbox.paypal.com/fr_FR/i/scr/pixel.gif" width="1" height="1" />
                    </form>

                  </div>
                  <div className="col-12 col-lg-6 modePaiement1">
                    <h3>Paiement via BitCoin</h3>
                  </div>
                </div>

              </div>
            </div>
          </section>

    );
  }
}
