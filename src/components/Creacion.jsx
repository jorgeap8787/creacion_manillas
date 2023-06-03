import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc } from 'firebase/firestore'




const Creacion = () => {
  const [cantidad, setCantidad] = useState([])
  const [manillasDto, setManillasDto] = useState([])
  const [material, setMaterial] = useState('');
  const [dije, setDije] = useState('');
  const [tipo, setTipo] = useState('');
  const [moneda, setMoneda] = useState('Dólares');
  const [valorPagar, setValorPagar] = useState("0");
  const [valor, setValor] = useState("0");


  useEffect(()=>{
    const obtenerDatos = async() =>{
        try{
            await onSnapshot(collection(db, 'manillas'), (query) =>{
                setManillasDto(query.docs.map((doc)=>({...doc.data(), id:doc.id})))
                console.log(manillasDto)
            })
        }catch(error){
            console.log(error)
        }
    }
    obtenerDatos();
}, [])

 

  const Calcular = () => {

    
    const  material = document.getElementById("inputGroupSelect01").value
    const  dije = document.getElementById("inputGroupSelect02").value
    const  tipo = document.getElementById("inputGroupSelect03").value
    const  moneda = document.getElementById("inputGroupSelect04").value
    const  cantidad = document.getElementById("cantidad").value
    
 

    
    if (material === 'Cuero' && dije === 'Martillo' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      setValor ("100");
    } else if (material === 'Cuero' && dije === 'Martillo' && tipo === 'Plata') {
      setValor ("80");
    } else if (material === 'Cuero' && dije === 'Martillo' && tipo === 'Niquel') {
      setValor ("70");
    } else if (material === 'Cuero' && dije === 'Ancla' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      setValor ("120");
    } else if (material === 'Cuero' && dije === 'Ancla' && tipo === 'Plata') {
      setValor ("100");
    } else if (material === 'Cuero' && dije === 'Ancla' && tipo === 'Niquel') {
      setValor ("90");
    } else if (material === 'Cuerda' && dije === 'Martillo' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      setValor ("90");
    } else if (material === 'Cuerda' && dije === 'Martillo' && tipo === 'Plata') {
      setValor ("70");
    } else if (material === 'Cuerda' && dije === 'Martillo' && tipo === 'Niquel') {
      setValor ("50");
    } else if (material === 'Cuerda' && dije === 'Ancla' && (tipo === 'Oro' || tipo === 'Oro Rosado')) {
      setValor ("110");
    } else if (material === 'Cuerda' && dije === 'Ancla' && tipo === 'Plata') {
      setValor ("90");
    } else if (material === 'Cuerda' && dije === 'Ancla' && tipo === 'Niquel') {
      setValor ("80");
    }

    if (moneda === 'Pesos') {
      setValorPagar (5000*valor*cantidad); 
    }


    setValorPagar(valor*cantidad);
    
  };

  return (
    <div>
      <h1 style={{ color: 'blue' }}>CREACION MANILLAS</h1>

      <br style={{ marginBottom: '1cm' }} />
     

      {<div className='row'>
            <div className="col-10">
                <h4 className="text-center"></h4>
                <table className='table'>
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Material</th>
                        <th scope="col">Dije</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                            manillasDto.map(item =>(
                                <tr key={item.id}>                                    
                                    <td>{item.material}</td>
                                    <td>{item.dije}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.valor}</td>                                    
                                </tr>
                            ))   
                        }

                    </tbody>
                </table>
            </div>
        </div>}



      <br style={{ marginBottom: '1cm' }} />


      <label for="inputGroupSelect01"><h5>Material:</h5></label>
      <select id="inputGroupSelect01" style={{ marginLeft: '1rem' }} onChange={()=>Calcular()}>
        <option selected>Selecciona.</option>
        <option value="Cuero">Cuero</option>
        <option value="Cuerda">Cuerda</option>
      </select>

      <br />

      <label for="inputGroupSelect02"><h5>Dije:</h5></label>
      <select id="inputGroupSelect02"  style={{ marginLeft: '3.5rem' }} onChange={()=>Calcular()}>
        <option value="">Selecciona.</option>
        <option value="Martillo">Martillo</option>
        <option value="Ancla">Ancla</option>
      </select>

      <br />

      <label for="inputGroupSelect03"><h5>Tipo:</h5></label>
      <select id="inputGroupSelect03" style={{ marginLeft: '3.1rem' }} onChange={()=>Calcular()}>
        <option value="">Selecciona.</option>
        <option value="Oro">Oro</option>
        <option value="Oro Rosado">Oro Rosado</option>
        <option value="Plata">Plata</option>
        <option value="Niquel">Niquel</option>
      </select>

      <br />

      <label for="inputGroupSelect04"><h5>Moneda:</h5></label>
      <select id="inputGroupSelect04" style={{ marginLeft: '1rem' }} onChange={()=>Calcular()}>
        <option value="Dólares">Dólares</option>
        <option value="Pesos">Pesos</option>
      </select>
      
    <br />

      <label><h5>Cantidad:</h5></label>

      <input type="number" id="cantidad" onChange={()=>Calcular()} />

      <br />
      <p style={{ color: 'blue' }}>Valor a pagar en {moneda}: {valorPagar}</p>
    </div>
  );
};

export default Creacion;