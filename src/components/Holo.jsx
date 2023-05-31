import React, { useState } from 'react';

const Holo = () => {
  const [cantidad, setCantidad] = useState(0);
  const [material, setMaterial] = useState('');
  const [dije, setDije] = useState('');
  const [tipo, setTipo] = useState('');
  const [moneda, setMoneda] = useState('Dólares');
  const [valorPagar, setValorPagar] = useState(0);

  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const handleDijeChange = (event) => {
    setDije(event.target.value);
  };

  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleMonedaChange = (event) => {
    setMoneda(event.target.value);
  };

  const handleCalcular = () => {
    // Lógica para calcular el valor a pagar
    let valor = 0;

    // Lógica para calcular el valor en base a la cantidad, material, dije, tipo y moneda seleccionada
    // Aquí puedes implementar tus cálculos según tus requerimientos

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
      valor *= 5000; // Conversión de dólares a pesos
    }

    valor *= cantidad; // Multiplicar el valor por la cantidad

    setValorPagar(valor);
  };

  return (
    <div>
      <h1>Formulario</h1>

      <label>Cantidad:</label>
      <input type="number" value={cantidad} onChange={handleCantidadChange} />

      <br />

      <label>Material:</label>
      <select value={material} onChange={handleMaterialChange}>
        <option value="">Selecciona un material</option>
        <option value="Cuero">Cuero</option>
        <option value="Cuerda">Cuerda</option>
      </select>

      <br />

      <label>Dije:</label>
      <select value={dije} onChange={handleDijeChange}>
        <option value="">Selecciona un dije</option>
        <option value="Martillo">Martillo</option>
        <option value="Ancla">Ancla</option>
      </select>

      <br />

      <label>Tipo:</label>
      <select value={tipo} onChange={handleTipoChange}>
        <option value="">Selecciona un tipo</option>
        <option value="Oro">Oro</option>
        <option value="Oro Rosado">Oro Rosado</option>
        <option value="Plata">Plata</option>
        <option value="Niquel">Niquel</option>
      </select>

      <br />

      <label>Moneda:</label>
      <select value={moneda} onChange={handleMonedaChange}>
        <option value="Dólares">Dólares</option>
        <option value="Pesos">Pesos</option>
      </select>

      <br />

      <button onClick={handleCalcular}>Calcular</button>

      <br />

      <p>Valor a pagar en {moneda}: {valorPagar}</p>
    </div>
  );
};

export default Holo;
