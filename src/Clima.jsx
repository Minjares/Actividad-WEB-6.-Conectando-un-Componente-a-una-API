import React, {useState,useEffect} from 'react'
import nubes from "./assets/logoclima.png";
import Datos from './Datos';

function Clima(props) {

    const [Clima,setWeather] = useState(null)
    
    useEffect(() => {
      
        fetch(`http://api.weatherstack.com/current?access_key=6f51d923b3a43d88b4cfb48b15cbbe49&query=${props.loc}`)
        .then((response) => response.json())
        .then((data)=> setWeather(data.current));
    }, [props.loc])
    

  return (
    <div className='w-80 h-80 container flex flex-col bg-blue-950 rounded-lg'>
      
        <h3  className=' text-3xl text-center text-white mt-4'>{props.loc}</h3>

        <div className='flex justify-between mt-4 '>

            <div className=' ml-5 flex flex-col items-center'>
            <img className='  w-14 h-14' src={nubes} alt="nubes"/>
            <h4 className='mt-3  text-white text-lg'>Nublado</h4>
            </div>

            <div className='mr-10 mt-4'><h4 className='text-white'><strong>Temperatura:</strong></h4>
            { Clima && <h4 className='text-white'>{Clima.temperature} grados</h4>}
            <h4 className='text-white'><strong>Sensación:</strong></h4>
            { Clima && <h4 className='text-white'>{Clima.feelslike} grados</h4>}
            </div>

        </div>

        <div className='flex flex-row justify-around mt-5'>

            { Clima && <Datos titulo="Presion" dato={Clima.pressure}/>}
            { Clima && <Datos titulo="Humedad" dato={Clima.humidity}/>}
            { Clima && <Datos titulo="Velocidad" dato={Clima.wind_speed}/>}
            
            


        </div>


    </div>
  )
}

export default Clima