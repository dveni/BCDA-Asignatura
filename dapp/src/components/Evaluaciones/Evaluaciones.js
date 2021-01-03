import {newContextComponents} from "@drizzle/react-components";
import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";
import NuevaEvaluacion from "./NuevaEvaluacion";
import DetalleEvaluacion from "./DetalleEvaluacion";


import EvaluacionesSinComponentes from "./EvaluacionesSinComponentes";

const {ContractData, ContractForm} = newContextComponents;





const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        
        <NuevaEvaluacion drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />
        <h2>Evaluaciones</h2>

        

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
                
            )}
        />

        <EvaluacionesSinComponentes drizzle={props.drizzle} drizzleState={props.drizzleState} />

        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => 
                        <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract={"Asignatura"}
                            method={"evaluacionesLength"}
                            render={el => 
                                
                                <DetalleEvaluacion 
                                            drizzle={props.drizzle}
                                            drizzleState={props.drizzleState}
                                            evaluacionesLength={el}
                                            matriculasLength={ml}/>
                                
                            }
                        />
                        }
        />
    </section>
);



export default Evaluaciones;
