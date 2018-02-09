  import React, { Component } from 'react';

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

    handleListrepoFile(data){
      HTTP.call('GET', 'http://192.168.1.16:5000/api/storage/{data}', {
        headers:{
          "Access-Control-Allow-Headers": "Content-Type, Authorization,Accept , Access-Control-Allow-Headers",
          'Content-Type' : "application/json",
          'Authorization' : "Bearer " + token,
        }
      },
      (error, result) => {
        if (!error) {
            console.log(data);
        }
      });
    }

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
          this.setState({test: res.data});
          this.renderRepo();
          this.displayName();
        }
      });
    }

    displayName(){
        const Supaname = name;
        return (<p className="h4 my-4 text-uppercase"> {Supaname}</p>);
    }

    handleListrepo() {
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
        }
      });
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
            display.push(<tr><td>{i}</td><td><a href="#" data-toggle="modal" data-target="#exampleModal" onClick={this.handleListrepoFile(this.state.test[i].file_name)}>{this.state.test[i].file_name}</a></td><td>{this.state.test[i].url}</td>
            <td className="text-center"><a href=""><i className="far fa-trash-alt"></i></a></td></tr>);

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
              <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body" id="modalContent">
                    bonjour toto, voici lanalyse de ton projet !
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    );
  }
}
