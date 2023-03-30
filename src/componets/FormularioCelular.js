import React, {useState } from 'react';
import {Form, Buttom } from 'react-bootstrap';
import {v4 as uuidv4 } from 'uuid';

const FormularioCelular = (props) => {


    const [celular, setCelular] = useState({

      celularId: props.celular ? props.celular.celularId: '',
      marca: props.celular ? props.celular.marca: '',
      modelo: props.celular ? props.celular.modelo: '',
      color: props.celular ? props.celular.color: '',
      precio: props.celular ? props.celular.precio: '',
      descripcion: props.celular ? props.celular.descripcion: '',
      operadora: props.celular ? props.celular.operadora: ''  

    });

    const [errorMsg, setErrorMsg] = useState ('');
    const {celularId, marca, modelo, color, precio, descripcion, operadora} = celular;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const valores = [celularId, marca, modelo, color, precio, descripcion, operadora];
        let errorMsg = '';

        const todosLosCamposLlenos = valores.every((campo) =>{

            const valor = `${campo}`.trim();
            return valor != '' && valor !=='0';

        });

        if(todosLosCamposLlenos){
            const celular = {
                celularId: uuidv4(),
                marca,
                modelo,
                color,
                precio,
                descripcion,
                operadora

            };
            props.handleOnSubmit(celular);
        }else{

            errorMsg = 'Por favor, completar todos los campos.';

        }

        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const {marca,valor} = event.target;
        switch(marca){
            case 'precio':
                if (valor===''|| valor.match(/^\d{1,}(\.\d{0,2})?$/)){

                    setCelular((prevState)=>({
                        ...prevState,
                        [marca]: valor
                    }));
                }
                break;
                default:
                    setCelular((prevState) => ({
                        ...prevState,
                        [marca]: valor
                    }));
    }

};

return (

    <div className='main-form'>

        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId= "marca">
                <Form.Label>Marca del celular</Form.Label>
                <Form.Control
                className="input-control"
                type="text"
                name="marcacelular"
                value={nombrecelular}
                placeholder="Ingrese la marca del celular"
                onChange={handleInputChange}
                />
            </Form.Group>
        <Form.Group controlId="modelo">
          <Form.Label>Autor del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="modelo"
            value={autor}
            placeholder="Ingrese el nombre del modelo"
            onChange={handleInputChange}
          />
          </Form.Group>
          <Form.Group controlId="color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="color"
            value={color}
            placeholder="Ingrese el color del celular"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="precio"
            value={precio}
            placeholder="Ingrese el precio del celular"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="descripcion">
          <Form.Label>Descripcion del celular</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="descripcion"
            value={descripcion}
            placeholder="Ingrese una descripcion"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="operadora">
          <Form.Label>Operadora del celular</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="operadora"
            value={descripcion}
            placeholder="Ingrese la operadora del celular"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Buttom variant ="primary" type="submit" className="submit-btn">
            Agregar
        </Buttom>
    </Form>   
 </div>
);
};

export default FormularioCelular;