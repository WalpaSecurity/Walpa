import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HTTP } from 'meteor/http';


export default class Try extends Component {
    handleSubmitTest(event){
        event.preventDefault();


        HTTP.call('GET', 'http://192.168.1.16:5000/try', {}, (error, result) =>{
            if( !error ){
            console.log(result);
            const res = JSON.parse(result.content);
            //debugger;
            console.log(res);
            // console.log(JSON.parse(result));
        }
    });
    }

    render() {
        return (
            <div className="col-12 col-md-6 col-lg-4 inscription">
                <h2>Test</h2>

            <form onSubmit={this.handleSubmitTest.bind(this)}>
                <input type="submit" value="C'est parti pour laravel" />
            </form>
            </div>
        );
    }

}