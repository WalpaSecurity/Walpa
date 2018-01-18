import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../imports/ui/App.js';
import Header from '../imports/ui/Header.js';
import Content from '../imports/ui/Content.js';

Meteor.startup(() => {
    // render(<App />, document.getElementById('content'));
    render(<Header />, document.getElementById('header'));
    render(<BrowserRouter >
            <Switch>
                <Route exact path="/" component={ App }/>
                <Route name="connexion" path="/login" component={ Content }  />
                <Route name="compte" path="/compte" component={ Content }  />
                <Route name="dons" path="/don" component={ Content }  />
            </Switch>


</ BrowserRouter> , document.getElementById('content'));
});

