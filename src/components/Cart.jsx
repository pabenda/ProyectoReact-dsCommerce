import React from 'react'

const Cart = () => {
  return (
    <div className='formCart'>
      <form>
        <div className='lineaForm'>
          <label> Nombre y Apellido: <input type="text" name="name" /> </label>
        </div>
        <div className='lineaForm'>
          <label> Email:      <input type="email" name="email" /> </label>
        </div>
        <div className='lineaForm'>
          <label> Comentarios:    <textarea name="comments" />  </label>
        </div>
        <div className='lineaForm'>
          <button className='btnForm' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Cart