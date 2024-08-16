import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = () => {
  return (
    <form>
      <Input label="email" required/>
      <Input id="password" label="password"/>
      <Button/>
    </form>
  )
}

export default Form