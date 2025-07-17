import React from 'react'
import { FaPlus } from 'react-icons/fa'


const Additem = ({newItems1, setItems1,handleSubmit}) => {
  return (
   <form className='addForm' onSubmit = {handleSubmit}>
        <label htmlFor="addItem"></label>
        <input 
             type='text'
             autoFocus
             id="addItem"
             value = {newItems1}
             onChange = {(e)=>setItems1(e.target.value)}
             placeholder='addItem'
             required>
        </input>
        <button type='submit'
        aria-label='addItem' >  <FaPlus></FaPlus></button>
      
   </form>
  )
}

export default Additem