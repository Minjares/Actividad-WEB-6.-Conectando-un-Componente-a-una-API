import React from 'react'

function Datos(props) {
  return (
    <div className='flex flex-col bg-gradient-to-r from-gray-400 to-blue-500 rounded-lg' >
        

        
        <h4 className='text-white mx-4 mt-4' ><strong>{props.titulo}</strong></h4>
        <h5 className='text-white mt-2 mb-5'>{props.dato}</h5>




    </div>
  )
}

export default Datos