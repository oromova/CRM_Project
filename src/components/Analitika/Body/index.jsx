import React from 'react'
import './style'

import { Container, H1, P } from './style'
import { Navbar } from '../Navbar';
import { Category } from './Category';
import { SocialMedia } from './Media';


export default function Body() {
  return (
    <Container>
      <Navbar/>
      <H1>Analitika</H1>
      <Category/>
      <P>Ijtimoiy tarmoqlar</P>
      <SocialMedia/>
    </Container>
     
   
    
  )
}
