import {newContextComponents} from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
import Matricular from "./Matricular";


const {ContractData} = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">

        <Matricular drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <>
                <h2> Alumnos matriculados </h2>
                <table>
                    <AlumnosHead/>
                    <AlumnosBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 matriculasLength={ml}/>
                </table>
                </>
            )}
        />
    </section>
);

export default Alumnos;
 