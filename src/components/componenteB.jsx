import React, {useState} from 'react';



const ComponenteB = () => {

    const [conectado, setConectado] = useState(false);


    return (
        <div>
            Este usuario está { conectado ? 'Contacto en linea':'Contacto no disponible'} 
            <div>
                <button onClick={() => setConectado(!conectado)}>click me!</button>
            </div> 
        </div>
    );
};





export default ComponenteB;


