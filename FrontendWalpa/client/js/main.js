import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Header from '../imports/ui/Header.js';
import Home from '../imports/ui/Home.js';
import Team from '../imports/ui/Team.js';
import Projet from '../imports/ui/Projet.js';
import Dons from '../imports/ui/Dons.js';
import Contact from '../imports/ui/Contact.js';
import Connexion from '../imports/ui/Connexion.js';
import Profile from '../imports/ui/Profile.js';
import Footer from '../imports/ui/Footer.js';
import Try from '../imports/ui/try.js';

// ADMIN
import Dashboard from '../imports/ui/admin/Dashboard.js';
import Sidebar from '../imports/ui/admin/Sidebar.js';
import gestionProjets from '../imports/ui/admin/Projets.js';
import gestionUsers from '../imports/ui/admin/Users.js';
import addAdmin from '../imports/ui/admin/add-admin.js';


const statutconnexion = localStorage.getItem('statutconnexion');


if(statutconnexion == 1){
  Meteor.startup(() => {
      render(<Sidebar />, document.getElementById('panel-admin'));
      render(<BrowserRouter>
              <Switch>
                  <Route exact path="/admin" component={Dashboard}></Route>
                  <Route exact path="/admin/projets" component={gestionProjets}/>
                  <Route exact path="/admin/utilisateurs" component={gestionUsers}/>
                  <Route exact path="/admin/add-admin" component={addAdmin}/>
              </Switch>
      </BrowserRouter> , document.getElementById('content'));
  });
} else {
  Meteor.startup(() => {
      render(<Header />, document.getElementById('header'));
      render(<BrowserRouter>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/home" component={Home}></Route>
                  <Route name="connexion" path="/login" component={ Home }  />
                  <Route name="compte" path="/compte" component={ Home }  />
                  <Route exact path="/qui-sommes-nous" component={Team}/>
                  <Route exact path="/analyser-mon-projet" component={Projet}/>
                  <Route exact path="/faire-un-don" component={Dons}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/connexion" component={Connexion}/>
                  <Route exact path="/profile" component={Profile}/>
                  <Route exact path="/try" component={Try}/>
              </Switch>
      </BrowserRouter> , document.getElementById('content'));

      render(<Footer />, document.getElementById('footer'));
  });
}



window.onscroll = function () {
    growShrinkLogo();
};

function growShrinkLogo() {
    var Logo = document.getElementById("logo");
    var body = document.getElementsByTagName('body');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        Logo.style.width = '120px';
    } else {
        Logo.style.width = '180px';
    }
}

jQuery(function($){


  // Ouverture du menu mobile et de l'overlay
  $('body').on("click", ".navbar-toggler", function(){
    $("#menu-mobile").animate({
        opacity: 1,
        left: "0px"
    }, 300);
    $('.overlay_mobile').fadeIn();
    $('body').addClass("noscroll");
  });
  // Fermeture du menu mobile et de l'overlay
  $('.overlay_mobile').click(function() {
    $("#menu-mobile").animate({
        opacity: 0,
        left: "-80%"
    }, 300);
    $('.overlay_mobile').fadeOut();
    $('body').removeClass("noscroll");
  });
});
