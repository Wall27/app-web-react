import React from "react";
import FormularioCelular from './FormularioCelular';

const AgregarCelular = () => {

    const handleOnSubmit = (celular) => {
        console.log(libro);
    };

    return (

        <React.Fragment>
            <FormularioCelular handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>

    );

};

export default AgregarCelular;