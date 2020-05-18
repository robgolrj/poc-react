import React from 'react';

//Criei como function porque não vou manipular estado. Somente renderiar estilo
function CampoNome(props) {
    return (
        <>
            <input
                className="form-control"
                type="text"
                value={props.nome}
                onChange={props.meuBind}
            />
        </>
    );
  }

  export default CampoNome;