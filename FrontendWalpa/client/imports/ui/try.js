import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';


export default class Try extends Component {
    handleSubmitTest(){
        location.href = "192.168.1.16:5000";
    }

    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4 inscription">
                <h2>Test</h2>
            <button onclick="handleSubmitTest()">Vers laravel</button>
            </div>
        );
    }

}