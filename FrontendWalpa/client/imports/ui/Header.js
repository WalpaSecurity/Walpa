import React, { Component } from 'react';


// App component - represents the whole app
export default class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Walpa security</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                                <li><a href="#">Link</a></li>
                                <li>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                </li>
                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Connexion / inscription</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    );
    }
    // function displayHeader(){
    //     const element = (
    //         <div id='wow'></div>
    // );
    //     ReactDOM.render(
    //         element,
    //         document.getElementById('header')
    //     );
    // }

}
