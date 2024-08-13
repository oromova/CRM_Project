import React, { useEffect, useState } from 'react'
import { P } from '../Media/style';
import ArrowRight from '../../../../assets/icons/moliya/iconRight.svg?react'
import ArrowLeft from '../../../../assets/icons/moliya/iconLeft.svg?react'
import { Container, Month, Wrapper } from './style';

export const Moliya = () => {

  const [finans, setFinans] = useState([])

  const url = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    fetch(`${url}/tabs/moliya`, {})
    .then((res) => res.json())
    .then((res) => setFinans(res))
  }, [])

  return (
    <>
    <P>Moliya</P>
    <Container>
      {finans.map((item) => {
        return(
          // <Container>
            <Wrapper key={item.id}>
             <ArrowLeft/>
             {/* <Month>{item.day}</Month> */}
             <ArrowRight/>
            </Wrapper>
          // </Container>
        )
      })}
     
    </Container>
    </>
  )
}
