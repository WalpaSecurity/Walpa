  import React, { Component } from 'react';
  import Repo from './Repo.js';

  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');

  var TableauRepo = [];
// App component - represents the whole app
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: []
        };
    }

    handleListrepoFile(){
        HTTP.call('GET', 'http://192.168.1.16:5000/api/storage/{}', {
                headers:{
                    "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,

                }
            },
            (error, result) => {
                if (!error) {
                    console.log(result.content);

                }
            });

    }

   /* componentWillMount() {
        HTTP.call('GET', 'http://192.168.1.16:5000/api/account', {
                headers:{
                    "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,
                    'Accept' : "application/json"

                }
            },
            (error, result) => {
                if (!error) {
                    const res = JSON.parse(result.content);
                    //console.log(res.data);
                    TableauRepo =res.data;
                    this.renderRepo();

                    this.setState({test: res.data});
console.log("state" , this.state.test);
                    //TableauRepo.map(res.data);

                    //var toto = TableauRepo;
                    //console.log(TableauRepo);
                    // console.log(TableauRepo[0])


                }
            });
    }*/

    componentDidMount() {

        HTTP.call('GET', 'http://192.168.1.16:5000/api/account', {
                headers:{
                    "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,
                    'Accept' : "application/json"

                }
            },
            (error, result) => {
                if (!error) {
                    const res = JSON.parse(result.content);
                    //console.log(res.data);
                    TableauRepo =res.data;
                  //


                    this.setState({test: res.data});
                    this.renderRepo();
                    this.displayName();
                    //TableauRepo.map(res.data);

                    //var toto = TableauRepo;
                    //console.log(TableauRepo);
                    // console.log(TableauRepo[0])


                }
            });
    }

    displayName(){
        const Supaname = name;
        return (<p className="h4 my-4 text-uppercase"> {Supaname}</p>)
    }

    handleListrepo() {

        //event.preventDefault();
        //console.log(this.state.inputValue);

        HTTP.call('GET', 'http://192.168.1.16:5000/api/account', {
                headers:{
                    "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
                    'Content-Type' : "application/json",
                    'Authorization' : "Bearer " + token,
                    'Accept' : "application/json"

                }
            },
            (error, result) => {
            if (!error) {
            const res = JSON.parse(result.content);
            //console.log(res.data);
            TableauRepo =res.data;
            this.renderRepo();


            //TableauRepo.map(res.data);

            //var toto = TableauRepo;
            //console.log(TableauRepo);
            // console.log(TableauRepo[0])


        }
        });

        //this.setState({inputValue: "tt"});
        //this.renderRepo();

    }

    setRepodata(Tableau){

        for (var i = 0; i< Tableau.length; i++ )
        {
            this.setState({
                test : this.state.test.concat(
                {
                    "id": i,
                    "filename": Tableau[i].file_name,
                    "url": Tableau[i].url,
                    "statut": Tableau[i].statut
                },
            )
            });

            console.log(this.props.test.id);
            console.log(this.props.test.filename);
            console.log(this.props.test.url);
            console.log(this.props.test.statut);
            console.log('cetait les props');

            console.log(i);
            console.log(Tableau[i].file_name);
            console.log(Tableau[i].statut);
            console.log(Tableau[i].url);
        }
    }


    renderRepo = () =>{
        let display = [];

        for (var i = 0; i< this.state.test.length; i++ ){
            display.push(<tr><td>{i}</td><td><a href="#" onClick={this.handleListrepoFile.bind(this)}>{this.state.test[i].file_name}</a></td><td>{this.state.test[i].url}</td><td className="text-center"><a href=""><i className="far fa-trash-alt"></i></a></td></tr>);

        }
        return (
            <tbody>
                    {display}
            </tbody>
        )
    }


    render() {

        return (
          <section id="profile" onLoad={this.handleListrepo.bind(this)}>
            <div className="mes-projets container">
              <div className="row">
                <div className="col-lg-3 text-center">
                  <img className="img-fluid d-block mx-auto" width="200px" src="images/user.png" />
                    {this.displayName()}
                </div>
                <div className="col-lg-9">
                  <h1>Historiques des projets</h1>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom du projet</th>
                        <th scope="col">Url</th>
                        <th className="text-center" scope="col">Supprimer le projet</th>
                      </tr>
                    </thead>
                      {this.renderRepo()}
                  </table>
                </div>
              </div>

            </div>
          </section>

    );
  }
}
