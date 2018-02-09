  import React, { Component } from 'react';

  const token = localStorage.getItem('token');
  var Repo = [];
// App component - represents the whole app
export default class gestionProjets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repo: []
        };
    }
    componentDidMount() {
        HTTP.call('GET', 'http://192.168.1.200:52900/api/projects', {
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
                    console.log(res.data);
                    this.setState({users: res.data});
                }else {
                    console.log('nous rencontrons quelques soucis !');
                }
            });
    }

    renderRepo = () =>{
        let display = [];

        for (var i = 0; i< this.state.test.length; i++ ){
            display.push(<tr><td>{i}</td><td><a href="#" data-toggle="modal" data-target="#exampleModal" >{this.state.test[i].file_name}</a></td><td>{this.state.test[i].url}</td>
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
          <div className="adminContent gestionProjets">
            <h1>Historiques des projets</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nom du client</th>
                  <th scope="col">Nom du projet</th>
                  <th scope="col">Url</th>
                  <th className="text-center" scope="col">Supprimer le projet</th>
                </tr>
              </thead>
                {this.renderRepo()}
            </table>
          </div>
    );
    }
}
