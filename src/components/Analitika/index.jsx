import React from 'react'
import Sidebar from './Sidebar';
import Body from './Body';
import { Container } from './style';

export default function Analitika() {
  return (
    <Container>
        <Sidebar/>
        <Body/>
    </Container>
  )
}
