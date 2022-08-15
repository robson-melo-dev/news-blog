import React from 'react'
import '../styles/form.css'

function Form() {
  return (
    <form className='form'>
        <label className='form__labelName'>Name</label>
        <input type='text' defaultValue='your name here' className='form___inputName'/>
        <button type='submit' className='form__submit'>Send me your name</button>
    </form>
  )
}

export default Form