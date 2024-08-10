import React, { useEffect, useState } from 'react'
import { P } from '../Media/style';
import ArrowRight from '../../../../assets/icons/moliya/iconRight.svg?react'
import ArrowLeft from '../../../../assets/icons/moliya/iconLeft.svg?react'
import { Month, Wrapper } from './style';

export const Moliya = () => {

  const [finans, setFinans] = useState([])

  const url = 'https://sheet.best/api/sheets/2ce5a2e7-1ee2-44a3-844a-2ac19467465d/tabs/moliya'

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setFinans(res))
  })

  return (
    <>
    <P>Moliya</P>
    <Container>
      <Wrapper>
        <ArrowLeft/>
        <Month></Month>
        <ArrowRight/>
      </Wrapper>
      <Wrapper>
        <Day>
          
        </Day>
      </Wrapper>
    </Container>
    </>
  )
}
