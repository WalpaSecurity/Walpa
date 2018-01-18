import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from './imports/ui/Header.js';
import Base from './imports/ui/Content.js';
import Home from './imports/ui/Home.js';
import Dons from './imports/ui/Dons.js';

Meteor.startup(() => {
    render(<Header />, document.getElementById('header'));
    render(<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/faire-un-don" component={Dons}></Route>
      </Switch>
    </BrowserRouter>, document.getElementById('content'));
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
