import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../models/contacto_class';
import ComponenteB from './componenteB';


const ComponenteA = () => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                email: { contacto.email }
            </h4>
            <h5>
            <ComponenteB></ComponenteB>
            </h5> 
        </div>
    );
};


ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};


export default ComponenteA;
