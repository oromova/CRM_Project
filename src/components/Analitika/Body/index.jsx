import React from 'react'
import './style'

import { Container} from './style'
import { Navbar } from '../Navbar';
import { SocialMedia } from './Media';
import { Category } from './Category';
import { Emails } from './Emails';


export default function Body() {
  return (
    <Container>
      <Navbar/>
      <Category/>
      <SocialMedia/>
      <Emails/>
    </Container>
  )
}
