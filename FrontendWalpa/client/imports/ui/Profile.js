  import React, { Component } from 'react';

  const token = localStorage.getItem('token');
  var TableauRepo = [];
// App component - represents the whole app
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "p"
        };
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

    getRepo() {
        return TableauRepo;
    }

    renderRepo(){

        // return (
            //<tr><td>1</td><td><a href="/files.txt">Projet 1</a></td><td>{"https://github.com/WalpaSecurity/Walpa.git"}</td><td><a href="/admin/projet/2"><i className="fa fa-trash" aria-hidden="true"></i></a></td></tr>
        // );

        var renderedHtml = "<tr><td>1</td><td>baz</td><td>foo</td><td>bar</td></tr>" ;

        for (var i = 0; i< TableauRepo.length; i++ )
        {
            console.log(TableauRepo[i].file_name);
            renderedHtml = renderedHtml + "<tr><td>1</td><td>baz</td><td>foo</td><td>bar</td></tr>";
        }
        console.log('done');
        console.log(renderedHtml);

        return (renderedHtml);

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
                        {this.renderRepo()}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </section>

    );
  }
}
