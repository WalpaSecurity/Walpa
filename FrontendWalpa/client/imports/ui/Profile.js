  import React, { Component } from 'react';
  import Repo from './Repo.js';

  const token = localStorage.getItem('token');
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
        HTTP.call('GET', 'http://192.168.1.16:5000/api/storage/3_RESULT_1739833415', {
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
                    console.log("state" , this.state.test);
                    this.renderRepo();
                    //TableauRepo.map(res.data);

                    //var toto = TableauRepo;
                    //console.log(TableauRepo);
                    // console.log(TableauRepo[0])


                }
            });
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


    renderRepo = (tab) =>{

        console.log('test tab', tab);

        return (
        <tbody>
        <tr>
            <td>
                {this.state.test}
            </td>
        </tr>
        </tbody>
        )

        /*return (
            <tbody>
            <tr>
                <td>
                    Ok
                </td>
            </tr>
            </tbody>
        );*/

        // return (
            //<tr><td>1</td><td><a href="/files.txt">Projet 1</a></td><td>{"https://github.com/WalpaSecurity/Walpa.git"}</td><td><a href="/admin/projet/2"><i className="fa fa-trash" aria-hidden="true"></i></a></td></tr>
        // );

        //this.setRepodata(TableauRepo);
       // let display =[];
        //for (var i = 0; i< TableauRepo.length; i++ ){
          //  display.push(<tr><td>1</td><td><a href="/files.txt">Projet 1</a></td><td>{"https://github.com/WalpaSecurity/Walpa.git"}</td><td><a href="/admin/projet/2"><i className="fa fa-trash" aria-hidden="true"></i></a></td></tr>);

       // }




//        return (
  //          <tbody>{display}</tbody>
    //    );
        /*{this.state.test.map((item, index) => {
            return <Repo key={index} test={item}/>;
        })}*/

        // return this.getRepo().map(
        //     function (repo) {
        //         <tr>
        //             <td>1</td>
        //             <td>
        //                 <a href="/files.txt">
        //                     Projet 1
        //                 </a>
        //             </td>
        //             <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
        //             <td>
        //             <a href="/admin/projet/2">
        //             <i className="fa fa-trash" aria-hidden="true"></i>
        //             </a>
        //             </td>
        //         </tr>
        //     }
        // );
    }

        // <ul>
        // {myList.map(function (element) {
        // return (
        //     <li>{element}</li>
        // )
        // })}
        // </ul>

    render() {

        return (
          <section id="profile" onLoad={this.handleListrepo.bind(this)}>
            <div className="mes-projets container">
              <div className="row">
                <div className="col-lg-3 text-center">
                  <img className="img-fluid d-block mx-auto" width="200px" src="images/user.png" />
                  <p className="h4 my-4 text-uppercase">User User</p>
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
                      <tbody>
                      <tr>
                          <td>1</td>
                          <td>
                              <a href="#" onClick={this.handleListrepoFile.bind(this)}>
                                  Projet 1
                              </a>
                          </td>
                          <td>{"https://github.com/WalpaSecurity/Walpa.git"}</td>
                          <td>
                              <a href="/admin/projet/2">
                                  <i className="fa fa-trash" aria-hidden="true"></i>
                              </a>
                          </td>
                          </tr>
                      </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

    );
  }
}
