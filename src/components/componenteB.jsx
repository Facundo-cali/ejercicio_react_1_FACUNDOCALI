import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import { contacto } from '../models/contacto_class';


const ComponenteB = (estado) => {

    const [conectado, setConectado] = useState(estado);


    return (
        <div>
            Este usuario está { conectado === false ? 'Contacto no disponible':'Contacto en linea'}
            <div><button onClick={() => setConectado(!conectado)}> Click me </button></div> 
            
        </div>
    );
};

ComponenteB.propTypes = {
    estado: PropTypes.bool,
};



export default ComponenteB;


