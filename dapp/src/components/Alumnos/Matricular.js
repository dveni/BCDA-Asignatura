import {newContextComponents} from "@drizzle/react-components";
const {ContractData, AccountData, ContractForm} = newContextComponents;

const Matricular = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    
    	<AccountData
            drizzle={drizzle}
            drizzleState={drizzleState}
            accountIndex="0"
            units="ether"
            precision="3"
            render={({address, balance, units}) => <ContractData 
                drizzle={drizzle} drizzleState={drizzleState}
                contract={"Asignatura"} method={"datosAlumno"} methodArgs={[address]}
                render={({nombre, email}) => {
                	// Si el nombre existe, no aparece el form.
                	if (nombre !== '') {
                          return <p></p>
                      }
                  	return <>
                  		<h3>Matricular</h3>
                      	<ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre", "Email"]}
                      /></>
                }}
            /> 

            }
        />
</article>

const Matricular2 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Calificar</h3>
    <ContractData drizzle={drizzle} drizzleState={drizzleState}
                  contract={"Asignatura"} method={"profesor"} methodArgs={[]}
                  render={addr => {
                      if (addr !== drizzleState.accounts[0]) {
                          return <p>"NO SOY EL PROFE"</p>
                      }
                      return <ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="califica"
                                           labels={["Dirección Alumno", "Índice Evaluación",
                                               "0=NP 1=Nota 2=MH", "Nota (x10)"]}
                      />
                  }}
    />
</article>

const Matricular3 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
    	<AccountData
            drizzle={drizzle}
            drizzleState={drizzleState}
            accountIndex="0"
            units="ether"
            precision="3"
            render={({address, balance, units}) => 
            	<>
            	<p> {address} </p>
            	<p> {balance} </p>
            	<p> {units} </p>
            	</>
            }
        />
</article>

const Matricular4 = ({drizzle, drizzleState}) => <article className="AppMisDatos">
    <h3>Matricular</h3>
    	<ContractForm drizzle={drizzle} drizzleState={drizzleState}
                                           contract="Asignatura" method="automatricula"
                                           labels={["Nombre", "Email"]}
                      />
</article>




export default Matricular;