import React, { Component } from 'react';

$('body').css({ 'padding-top':'0 !important'});

export default class Sidebar extends Component {

    render() {
        return (
          <div className="sidebar-admin text-center">
            <ul className="navbar-nav">
              <li className="p-4">
                  <img src="/images/logo-footer-walpa.png" className="img-fluid" />
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/admin/">Tableau de bord</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/projets">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dons">Dons</a>
              </li>
            </ul>
            <div className="topbar text-right">
              <a href="/logout"><i className="fa fa-user" aria-hidden="true"></i> Déconnexion</a>
            </div>
          </div>

    );
    }
}
