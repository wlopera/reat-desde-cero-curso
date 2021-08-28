import React, { useState } from "react";

const Contador = ({ init, factor }) => {
  const [contador, setContador] = useState(init);

  const aumentar = () => {
    setContador(contador + factor);
  };

  const disminuir = () => {
    setContador(contador - factor);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Contador;
