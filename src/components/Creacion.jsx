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
  
    
  };

  return (
    <div>
      <h1>CREACION MANILLAS</h1>

      <br />
      <label>Material:</label>
      <select value={material} onChange={MaterialCambio}>
      </select>
      <br />

      <label>Dije:</label>
      <select value={dije} onChange={DijeCambio}>
      </select>
      <br />

      <label>Tipo:</label>
      <select value={tipo} onChange={TipoCambio}>
     </select>

      <br />
      <label>Moneda:</label>
      <select value={moneda} onChange={MonedaCambio}>
      </select> 
    </div>
  );
};

export default Creacion;