import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from "react-router-dom";

import App from './imports/ui/App.js';
import Header from './imports/ui/Header.js';
import Base from './imports/ui/Base.js';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
    render(<Header />, document.getElementById('header'));
render(<Router>
    <Route path="/connexion" component={Base}></Route>

</Router> ,document.getElementById('app'));
});

