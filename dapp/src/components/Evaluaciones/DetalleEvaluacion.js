import React from 'react';
import {newContextComponents} from "@drizzle/react-components";
import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import EvaluacionHeader from "./EvaluacionHeader";

const {ContractData} = newContextComponents;


class DetalleEvaluacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { evaluacion: null };
  }
  
  mySubmitHandler = (event) => {
    event.preventDefault();
    let ev = this.state.evaluacion;
    if (!Number(ev)) {
      alert("Evaluation id must be a number");
    }
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "evaluacion") {
      if (!event.target.validity.valid) {
        alert("Evaluation id must be a number");
      }else if(val >= this.props.evaluacionesLength){
        alert("No existe una evaluacion con ese id");
      }else{
        this.setState({evaluacion: val});
      }
    }
    
  }
  render() {
    let table = '';
    if(this.state.evaluacion){
      
      
      table = <>

      <EvaluacionHeader evaluacionIndex = {this.state.evaluacion}
                                                drizzle={this.props.drizzle}
                                                drizzleState={this.props.drizzleState} />
      <table>
            <CalificacionesHead evaluacion={this.state.evaluacion}/>
            <CalificacionesBody drizzle={this.props.drizzle}
                                drizzleState={this.props.drizzleState}
                                matriculasLength={this.props.matriculasLength}
                                evaluacion={this.state.evaluacion}/>
      </table> 
      </>
    } else {
      table = '';
    }
    return (
      
      <>
      <form onSubmit={this.mySubmitHandler}>
      <h2> Calificaciones de una evaluacion </h2>
      <p>Introduce evaluacion id:</p>
      <input
        type='text'
        name='evaluacion'
        pattern="[0-9]*"
        onChange={this.myChangeHandler}
      />
      <br/>
      </form>

      <br/>

      {table}
      </>
    );
  }
}

export default DetalleEvaluacion;