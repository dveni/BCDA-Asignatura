import {newContextComponents} from "@drizzle/react-components";
const {ContractData, ContractForm} = newContextComponents;

const NuevaEvaluacion = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Nueva Evaluación</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>Para crear evaluaciones debes ser el profesor</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="creaEvaluacion"
                                           labels={["Nombre de la evaluacion (Examen, Entrega,etc)",
                                            "Fecha (segundos desde el 1/1/1970)",
                                             "Puntos (x10) sobre la nota final"]}
                      />
                  }}
    />
</article>

export default NuevaEvaluacion;