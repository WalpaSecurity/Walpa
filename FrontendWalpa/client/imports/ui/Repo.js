import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Repo extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.test.id}</td>
                <td>{this.props.test.filename}</td>
                <td>{this.props.test.url}</td>
                <td>{this.props.test.success}</td>
            </tr>
        );
    }
}


/*
*
*
*


                          this.state = {
                              test: [{
                                  "title": "test Php 1",
                                  "desc": "super test pour votre code php",
                                  'testDate': "2018-12-05"
                              },]




                              dans la fonction render du component qui display ta table
                            // historique item doit être un component a part qui display un <tr> n'oublie pas de l'importer dans le component parent



  												  {this.state.test.map((item, index) => {
                        			return <HistoriqueItem key={index} test={item}/>;
                						})}




* */