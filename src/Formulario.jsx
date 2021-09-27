import React , {Component} from "react";

class Formulario extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            nombre: "Su nombre",
            apellido: ""
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarApellido = this.cambiarApellido.bind(this);

        let elemento = document.getElementById("elemento")
        console.log(elemento)
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }

    cambiarApellido(e){
        this.setState({
            apellido: e.target.value
        });
    }

    render(){
        return(
            <div id="elemento">
                <h1>Formulario</h1>
                <form action="">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Nombres y apellidos</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Ingrese su nombre" onChange={ this.cambiarNombre }/>
                        <input type="text" className="form-control" placeholder="Ingrese sus apellidos" onChange={ this.cambiarApellido }/>
                        </div>
                        <br />
                        <input type="submit" className="btn btn-primary" value="Ingresar"/>
                </form>
                <br/>
                <br/>
                <h4>{`Nombre: ${this.state.nombre}`}</h4>
                <h4>{`Apellido: ${this.state.apellido}`}</h4>
            </div>
        )
    }

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        console.log(elemento)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState);
        console.log(prevProps);
        console.log("-----------------")
    }
}

export default Formulario;