import React, { useState } from 'react';


import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'

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

    

    if (material === 'Cuero' && dije === 'Martillo' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      valor = 100;
    } else if (material === 'Cuero' && dije === 'Martillo' && tipo === 'Plata') {
      valor = 80;
    } else if (material === 'Cuero' && dije === 'Martillo' && tipo === 'Niquel') {
      valor = 70;
    } else if (material === 'Cuero' && dije === 'Ancla' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      valor = 120;
    } else if (material === 'Cuero' && dije === 'Ancla' && tipo === 'Plata') {
      valor = 100;
    } else if (material === 'Cuero' && dije === 'Ancla' && tipo === 'Niquel') {
      valor = 90;
    } else if (material === 'Cuerda' && dije === 'Martillo' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      valor = 90;
    } else if (material === 'Cuerda' && dije === 'Martillo' && tipo === 'Plata') {
      valor = 70;
    } else if (material === 'Cuerda' && dije === 'Martillo' && tipo === 'Niquel') {
      valor = 50;
    } else if (material === 'Cuerda' && dije === 'Ancla' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      valor = 110;
    } else if (material === 'Cuerda' && dije === 'Ancla' && tipo === 'Plata') {
      valor = 90;
    } else if (material === 'Cuerda' && dije === 'Ancla' && tipo === 'Niquel') {
      valor = 80;
    }

    if (moneda === 'Pesos') {
      valor *= 5000; 
    }

    valor *= cantidad; 

    setValorPagar(valor);
    
  };

  return (
    <div>
      <h1 style={{ color: 'blue' }}>CREACION MANILLAS</h1>

      <br style={{ marginBottom: '1cm' }} />

      <label><h5>Cantidad:</h5></label>
      <input type="number" value={cantidad} onChange={CantidadCambio} />

      <br />


      <br style={{ marginBottom: '1cm' }} />

      <label><h5>Material:</h5></label>
      <select value={material} onChange={MaterialCambio} style={{ marginLeft: '1rem' }}>
        <option value="">Selecciona un material</option>
        <option value="Cuero">Cuero</option>
        <option value="Cuerda">Cuerda</option>
      </select>

      <br />

      <label><h5>Dije:</h5></label>
      <select value={dije} onChange={DijeCambio} style={{ marginLeft: '3.5rem' }}>
        <option value="">Selecciona un dije</option>
        <option value="Martillo">Martillo</option>
        <option value="Ancla">Ancla</option>
      </select>

      <br />

      <label><h5>Tipo:</h5></label>
      <select value={tipo}onChange={TipoCambio} style={{ marginLeft: '3.1rem' }}>
        <option value="">Selecciona un tipo</option>
        <option value="Oro">Oro</option>
        <option value="Oro Rosado">Oro Rosado</option>
        <option value="Plata">Plata</option>
        <option value="Niquel">Niquel</option>
      </select>

      <br />

      <label><h5>Moneda:</h5></label>
      <select value={moneda} onChange={MonedaCambio} style={{ marginLeft: '1rem' }}>
        <option value="Dólares">Dólares</option>
        <option value="Pesos">Pesos</option>
      </select>

      <br />

      <br style={{ marginBottom: '1cm' }} />

      <button onClick={Calcular}>Calcular</button>

      <br />

      <p style={{ color: 'blue' }}>Valor a pagar en {moneda}: {valorPagar}</p>
    </div>
  );
};

export default Creacion;