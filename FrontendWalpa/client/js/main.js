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
import Footer from '../imports/ui/Footer.js';

Meteor.startup(() => {
    // render(<App />, document.getElementById('content'));
    render(<Header />, document.getElementById('header'));
    render(<BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route name="connexion" path="/login" component={ Home }  />
                <Route name="compte" path="/compte" component={ Home }  />
                <Route exact path="/qui-sommes-nous" component={Team}/>
                <Route exact path="/analyser-mon-projet" component={Projet}/>
                <Route exact path="/faire-un-don" component={Dons}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/connexion" component={Connexion}/>
            </Switch>
    </BrowserRouter> , document.getElementById('content'));
    render(<Footer />, document.getElementById('footer'));
});

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
