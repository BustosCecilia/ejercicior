var React = require('react');
var ReactDom = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "Pepe"
        }

       this.forcedUpdateHandler = this.forcedUpdateHandler.bind(this);
        this.encontrarNodoUno = this.encontrarNodoUno.bind(this);
        this.encontrarNodoDos = this.encontrarNodoDos.bind(this);
    }

    encontrarNodoUno() {
        var divUno = document.getElementById('divUno');
        ReactDom.findDOMNode(divUno).style.color = 'green';
    }

    encontrarNodoDos() {
        var divDos = document.getElementById('divDos');
        ReactDom.findDOMNode(divDos).style.color = 'red';
    }
    forcedUpdateHandler(){
        this.forcedUpate();
    }

    render() {
        return(
        <div>
             <h1>Hola </h1>
            <button onClick={this.encontrarNodoUno}>NODO 1</button>
            <button onClick={this.encontrarNodoDos}>NODO 2</button>
            <h4 id='divUno'>NODO 1</h4>
            <h4 id='divDos'>NODO 2</h4>
        </div>
        )
    }
}

App.defaultProps={
    nombre:"Marcelo"
};
// como la renderizo , sin estado, con:
//ReactDom.render(<Hola2 />,
//   document.getElementById('hola-meli'))

//ReactDom.render(<App nombre={"Mercado libre"}/>,
//    document.getElementById('hola-meli'));

export default App;