import React from 'react';

//Criei como function porque não vou manipular estado. Somente renderiar estilo
function Texto(props) {
    return (
      <p>{props.nome}</p>
    );
  }

export default Texto;