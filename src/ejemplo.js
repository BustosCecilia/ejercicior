var React = require('react');
var ReactDom = require('react-dom');

function Hola(props) {
    return<h1>hola props.nombre</h1> // props contiene un conjunto de propiedades que son inmutables

}

// como la renderizo , sin estado, con:
ReactDom.render(<Hola nombre={"Mercado libre"}/>,
    document.getElementById('hola-meli')) // escribo todos los componentes y los renderizo donde quiero en mi html

class Hola2 extends React.Component {
    render() {
        return <h1> Hola {this.props.nombre}</h1>
    }
}

// como la renderizo , sin estado, con:
ReactDom.render(<Hola2 nombre={"Mercado libre"}/>,
    document.getElementById('hola-meli')) // escribo todos los componentes y los renderizo donde quiero en mi html

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();