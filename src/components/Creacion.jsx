import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const Creacion = () => {
 
    const [manillasDto, setManillasDto] = useState([])
    const [valorDolar, setValorDolar] = useState("0");
    const [valorPeso, setValorPeso] = useState("0");


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
    
    
    const Calcular = () =>{
        const  material = document.getElementById("inputGroupSelect01").value
        const  dije = document.getElementById("inputGroupSelect02").value
        const  tipo = document.getElementById("inputGroupSelect03").value
        const  cantidad = document.getElementById("cantidad").value

        console.log(material +"-"+ dije+"-"+tipo+"-"+cantidad)

        if(material != "Seleccione..." && dije != "Seleccione..." && tipo != "Seleccione..." && cantidad !=''){
            for(let element of manillasDto){
                console.log("-------------------------------")
                console.log(element.material+"="+material)
                console.log(element.dije+"="+dije)
                console.log(element.tipo+"="+tipo)
                if(element.material==material && element.dije==dije && element.tipo==tipo){
                    console.log("Iguales")
                    setValorDolar((element.valor*cantidad).toLocaleString("en")+" dólares")
                    setValorPeso((element.valor*cantidad*5000).toLocaleString("en") +" COP")
                    break
                }else{
                    console.log("Distinto")
                    setValorDolar("No disponible")
                    setValorPeso("No disponible")
                }
            }       
        }        
    }


    

  return (
    <div className='container mt-5'>
        <h1 style={{ color: 'blue' }}>CREACION MANILLAS</h1>
        <hr />
        {<div className='row'>
            
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
           
        </div>}
       
        <div className='row'>
        <label for="inputGroupSelect01"><h5>Material:</h5></label>
        <select id="inputGroupSelect01" style={{ marginLeft: '4rem' }} onChange={()=>Calcular()}>
        <option selected>Selecciona.</option>
        <option value="Cuero">Cuero</option>
        <option value="Cuerda">Cuerda</option>
        </select>

           
        <label for="inputGroupSelect02"><h5>Dije:</h5></label>
        <select id="inputGroupSelect02"  style={{ marginLeft: '4rem' }} onChange={()=>Calcular()}>
        <option value="">Selecciona.</option>
        <option value="Martillo">Martillo</option>
        <option value="Ancla">Ancla</option>
        </select>

    
        <label for="inputGroupSelect03"><h5>Tipo:</h5></label>
        <select id="inputGroupSelect03" style={{ marginLeft: '4rem' }} onChange={()=>Calcular()}>
        <option value="">Selecciona.</option>
        <option value="Oro">Oro</option>
        <option value="Oro Rosado">Oro Rosado</option>
        <option value="Plata">Plata</option>
        <option value="Niquel">Niquel</option>
       </select>


            <div className='col-2'>
            <div class="input-group mb-3">
            <div class="input-group-prepend">
            <span style={{ color: 'blue' }} class="input-group-text" id="basic-addon1">Cantidad</span>
            </div>
            <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1" id='cantidad' onChange={()=>Calcular()}/>
            </div>
            </div>
            <div className='col-4'>
                <span> Valor: {valorDolar} ({valorPeso}) </span>
            </div>
        </div>
    </div>
  )
}

export default Creacion