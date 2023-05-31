import React, { useState } from 'react';

const Creacion = () => {
  const [cantidad, setCantidad] = useState(0);
  const [material, setMaterial] = useState('');
  const [dije, setDije] = useState('');
  const [tipo, setTipo] = useState('');
  const [moneda, setMoneda] = useState('Dólares');
  const [valorPagar, setValorPagar] = useState(0);

  const CantidadCambio = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  const MaterialCambio = (event) => {
    setMaterial(event.target.value);
  };

  const DijeCambio = (event) => {
    setDije(event.target.value);
  };

  const TipoCambio = (event) => {
    setTipo(event.target.value);
  };

  const MonedaCambio = (event) => {
    setMoneda(event.target.value);
  };

  const Calcular = () => {
    
    let valor = 0;

    if (moneda === 'Pesos') {
      valor *= 5000; 
    }

    valor *= cantidad; 

    setValorPagar(valor);
  };

  return (
    <div>
      <h1>CREACION MANILLAS</h1>

      <label>Cantidad:</label>
      <input type="number" value={cantidad} onChange={CantidadCambio} />

      <br />

      <label>Material:</label>
      <select value={material} onChange={MaterialCambio}>
        <option value="">Selecciona un material</option>
        <option value="Cuero">Cuero</option>
        <option value="Cuerda">Cuerda</option>
      </select>

      <br />

      <label>Dije:</label>
      <select value={dije} onChange={DijeCambio}>
        <option value="">Selecciona un dije</option>
        <option value="Martillo">Martillo</option>
        <option value="Ancla">Ancla</option>
      </select>

      <br />

      <label>Tipo:</label>
      <select value={tipo} onChange={TipoCambio}>
        <option value="">Selecciona un tipo</option>
        <option value="Oro">Oro</option>
        <option value="Oro Rosado">Oro Rosado</option>
        <option value="Plata">Plata</option>
        <option value="Niquel">Niquel</option>
      </select>

      <br />

      <label>Moneda:</label>
      <select value={moneda} onChange={MonedaCambio}>
        <option value="Dólares">Dólares</option>
        <option value="Pesos">Pesos</option>
      </select>

      <br />

      <button onClick={Calcular}>Calcular</button>

      <br />

      <p>Valor a pagar en {moneda}: {valorPagar}</p>
    </div>
  );
};

export default Creacion;