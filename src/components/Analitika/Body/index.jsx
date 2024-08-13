import React from 'react'
import './style'

import { Container} from './style'
import { Navbar } from '../Navbar';
import { SocialMedia } from './Media';
import { Category } from './Category';
import { Emails } from './Emails';
// import { Moliya } from './Moliya';


export default function Body() {
  return (
    <Container>
      <Navbar/>
      <Category/>
      <SocialMedia/>
      <div style={{dislay: 'flex'}}>
        <Emails/>
        {/* <Moliya/>  */}
      </div>
    
    </Container>
  )
}
