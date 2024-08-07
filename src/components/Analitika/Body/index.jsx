import React from 'react'
import './style'

import { Container } from './style'
import { Navbar } from '../Navbar';
import { Category } from './Category';

export default function Body() {
  return (
    <Container>
      <Navbar/>
      <h1 className='h1'>Analitika</h1>
      <Category/>
    </Container>
     
   
    
  )
}
