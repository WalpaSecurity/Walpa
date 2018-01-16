import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from './imports/ui/App.js';
import Header from './imports/ui/Header.js';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
    render(<Header />, document.getElementById('header'));
});