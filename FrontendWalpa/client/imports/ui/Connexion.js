import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';
import { Session } from 'meteor/session';

// App component - represents the whole app
export default class Connexion extends Component {
    handleSubmitConnexion(event) {
      event.preventDefault();

      const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
      const password = ReactDOM.findDOMNode(this.refs.password).value.trim();

      if(email != ""){
        if(password != ""){
          HTTP.call('POST', 'http://192.168.1.16:5000/api/login', {
            data: {
              email: email,
              password: password
            }
          },(error, result) => {
            if (!error) {
              const res = JSON.parse(result.content);
              console.log(res);
              console.log(res.token);
              const token = res.token;
              localStorage.setItem('token', token);
              localStorage.setItem('statutconnexion', '2');
              HTTP.call('POST', 'http://192.168.1.16:5000/api/get-details', {
                headers:{
                  "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                  'Content-Type' : "application/json",
                  'Authorization' : "Bearer " + token,
                  'Accept' : "application/json"
                },
                data: {
                  token: token
                }
              }, (error, resultuser) => {
                if (!error) {
                    console.log(resultuser);
                    const resuser = JSON.parse(resultuser.content);
                    console.log(resuser);
                    console.log(resuser.success.admin);
                    document.location.reload(true);

                    if(resuser.success.admin == 1){
                      localStorage.setItem('statutconnexion', '1');
                    } else {
                      localStorage.setItem('statutconnexion', '2');
                    }
                    localStorage.setItem('name', 'timmy');
                    //this.props.history.push('/home');
                }
              });
            } else {
              $('#erreurConnect').show();
            }
          });
        } else {

        }
      } else {

      }
    }

    handleSubmitInscription(event) {
      event.preventDefault();

      // Find the text field via the React ref
      const emailinscrit = ReactDOM.findDOMNode(this.refs.emailinscrit).value.trim();
      const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
      const passwordinscrit = ReactDOM.findDOMNode(this.refs.passwordinscrit).value.trim();
      const passwordinscrit2 = ReactDOM.findDOMNode(this.refs.passwordinscrit2).value.trim();
      //const password = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

      HTTP.call('POST', 'http://192.168.1.16:5000/api/register', {
        data: {
          email: emailinscrit,
          name: name,
          password: passwordinscrit,
          c_password: passwordinscrit2
        }
      }, (error, result) => {
        if (!error) {
          console.log(result);
            toast();
            $('#snackbar').html("Inscription faite !");
          $('#erreurRegister').removeClass('alert-danger');
          $('#erreurRegister').addClass('alert-success');
          $('#erreurRegister').html("Vous pouvez desormais vous connecter !");
          $('#erreurRegister').show();
        } else {
            toast();
            $('#snackbar').html("Remplissez tous les champs");
          $('#erreurRegister').html("Vous devez remplir tous les champs !");
          $('#erreurRegister').show();

          setTimeout(function () {
              $('#erreurRegister').hide();
          }, 3000);
        }
      });
    }

    handleConnectGit(){

      HTTP.call('GET', 'http://192.168.1.16:5000/auth/github/callback', {

      }, (error, result) => {
        console.log("toto1");
        if (!error) {
          const users = JSON.parse(result.content);
          console.log(result);
          console.log(users.data);
          console.log("good");
        } else {
          console.log("pas good");
        }
      });
    }

    render() {
        return (
                <section id="connexion-inscription" className="text-center text-lg-left">
                    <div className="container">
                        <div className="row align-items-start justify-content-center">
                            <div className="col-12 col-md-6 col-lg-4 connexion">
                                <h2>Connexion</h2>
                                <form onSubmit={this.handleSubmitConnexion.bind(this)} >
                                    <div className="form-group">
                                        <label htmlFor="emailConnect">Adresse Mail</label>
                                    <input type="email" className="form-control" id="emailConnect" ref="email" placeholder="Entrez votre e-mail"/>
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="mdp">Mot de passe</label>
                                        <input type="password" className="form-control" id="mdp" ref="password" placeholder="Entrez votre mot de passe"/>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="Se connecter"/>
                                </form>
                                <div className="alert alert-danger erreur" id="erreurConnect" role="alert">Vous devez remplir tous les champs !</div>
                                <hr />
                                <br/>
                                <a href="http://192.168.1.16:5000/auth/github" className="btn btn-secondary"><i className="fab fa-github"></i> Connexion / Inscription Via <b>GitHub</b></a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 inscription">
                                <h2>Inscription</h2>
                                <form onSubmit={this.handleSubmitInscription.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse mail</label>
                                        <input type="text" className="form-control" id="email" ref="emailinscrit" placeholder="Entrez votre adresse e-mail"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nom">Nom </label>
                                        <input type="text" className="form-control" id="nom" ref="name" placeholder="Entrez votre nom"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password1">Mot de passe</label>
                                        <input type="password" className="form-control" id="password1" ref="passwordinscrit" placeholder="Saisissez un mot de passe"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password2">Confirmation mot de passe</label>
                                        <input type="password" className="form-control" id="password2" ref="passwordinscrit2" placeholder="Confirmez votre mot de passe"/>
                                    </div>
                                    <input className="btn btn-primary" type="submit" value="S'inscrire"/>
                                </form>
                                <div className="alert alert-danger erreur" id="erreurRegister" role="alert">Vous devez remplir tous les champs !</div>
                            </div>
                        </div>
                    </div>
                </section>

    );
    }
}
