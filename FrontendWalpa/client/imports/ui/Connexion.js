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
          HTTP.call('POST', 'http://192.168.1.200:5000/api/login', {
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
              HTTP.call('POST', 'http://192.168.1.200:5000/api/get-details', {
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
                    localStorage.setItem('name', resuser.success.name);
                    //console.log('Nom :', localStorage.getItem('name'));
                    this.props.history.push('/home');
                }
              });
            } else {
              toast();
              $('#snackbar').css({'background-color':'#c32424'});
              $('#snackbar').html("Vos informations ne sont pas correctes !");
            }
          });
        } else {
          toast();
          $('#snackbar').css({'background-color':'#c32424'});
          $('#snackbar').html("Vous devez saisir le mot de passe !");
        }
      } else {
        toast();
        $('#snackbar').css({'background-color':'#c32424'});
        $('#snackbar').html("Vous devez saisir un email !");
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

      if(emailinscrit != ""){
        if(name != ""){
          if(passwordinscrit != ""){
            if(passwordinscrit2 != ""){
              if(passwordinscrit == passwordinscrit2){
                HTTP.call('POST', 'http://192.168.1.200:5000/api/register', {
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
                    $('#snackbar').css({'background-color':'#28a745'});
                    $('#snackbar').html("Votre inscription à bien été enregistrer.<br/>Vous pouvez désormais vous connecter via le formulaire de connexion !");
                    $("#formInscription input").val("");
                    $("#formInscription textarea").val("");
                  } else {
                    toast();
                    $('#snackbar').css({'background-color':'#c32424'});
                    $('#snackbar').html("Il y a une erreur lors de la saisi, veuillez recommencer !");
                  }
                });
              } else {
                toast();
                $('#snackbar').css({'background-color':'#c32424'});
                $('#snackbar').html("Vos mots de passe ne correspondent pas !");
              }
            } else {
              toast();
              $('#snackbar').css({'background-color':'#c32424'});
              $('#snackbar').html("Vous confirmer votre mot de passe !");
            }
          } else {
            toast();
            $('#snackbar').css({'background-color':'#c32424'});
            $('#snackbar').html("Vous devez saisir un mot de passe !");
          }
        } else {
          toast();
          $('#snackbar').css({'background-color':'#c32424'});
          $('#snackbar').html("Vous devez saisir un nom !");
        }
      } else {
        toast();
        $('#snackbar').css({'background-color':'#c32424'});
        $('#snackbar').html("Vous devez saisir un email !");
      }
    }

    handleConnectGit(){

      HTTP.call('GET', 'http://192.168.1.200:5000/auth/github/callback', {

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
                                  <button className="btn btn-primary" type="submit">{"Se connecter"}</button>
                                </form>
                                <hr />
                                <br/>
                                <a href="http://192.168.1.200:5000/auth/github" className="btn btn-secondary"><i className="fab fa-github"></i> Connexion / Inscription Via <b>GitHub</b></a>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 inscription">
                                <h2>Inscription</h2>
                                <form id="formInscription" onSubmit={this.handleSubmitInscription.bind(this)}>
                                    <div className="form-group">
                                        <label htmlFor="email">Adresse mail</label>
                                        <input type="email" className="form-control" id="email" ref="emailinscrit" placeholder="Entrez votre adresse e-mail"/>
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
                                    <button className="btn btn-primary" type="submit">{"S'inscrire"}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

    );
    }
}
