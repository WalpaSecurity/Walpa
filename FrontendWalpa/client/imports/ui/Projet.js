import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';

const token = localStorage.getItem('token');
// App component - represents the whole app
export default class Projet extends Component {
    handleSubmitRepo(event){
        console.log(token);
        event.preventDefault();
        const repo = ReactDOM.findDOMNode(this.refs.depot).value.trim();
        console.log(repo);
        HTTP.call('POST', 'http://192.168.1.16:5000/api/activity', {
            headers:{
                "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                'Content-Type' : "application/json",
                'Authorization' : "Bearer " + token,
                'Accept' : "application/json"

            },
              data: {
                  url: repo
              }
          },
          (error, result) => {
            if (!error) {
                console.log(result);
            const res = JSON.parse(result.content);
            console.log(res);

            toast();
            $('#snackbar').html("Analyse terminée ! Vérifier vos mails");
          } else {
            // Si on a une erreur
            toast();
            $('#snackbar').html("Erreur");
          }
    });
    }

    render() {
        return (
          <section id="projet" className="text-center text-lg-left">
            <div className="container">
              <h1 className="text-center">Analyser mon projet</h1>
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 text-center text-lg-left">
                  <h2>Pourquoi analyser votre projet ?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <form onSubmit={this.handleSubmitRepo.bind(this)} className="formLinkProject text-center">
                    <ol className="list-unstyled text-white ">
                      <li>1. Entrez le lien de votre projet Github</li>
                      <li>2. Connectez-vous à votre compte</li>
                      <li>3. {"Consultez l'analyse de votre projet dans votre tableau de bord"}</li>
                    </ol>
                    <label className="text-white">Entrer le lien de votre projet GitHub</label>
                    <input type="text" className="form-control" ref="depot" id="basic-url" aria-describedby="basic-addon3" />
                    <input className="btn btn-primary" type="submit" value="Analyser mon projet"/>
                  </form>
                </div>
              </div>
            </div>
          </section>
    );
    }
}
