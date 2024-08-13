import React, { useEffect, useState } from 'react'
import { Container, Content, Img, Number, Title, TitleAnalitika, Wrapper} from './style';
import Talabalar from '../../../../assets/icons/statistics/talabalar.svg?react'
import Mentorlar from '../../../../assets/icons/statistics/mentorlar.svg?react'
import Filiallar from '../../../../assets/icons/statistics/filiallar.svg?react'
import IconPlus from '../../../../assets/icons/statistics/plusgreen.svg?react'
import Up from '../../../../assets/icons/statistics/up.svg?react'
import Down from '../../../../assets/icons/statistics/down.svg?react'
import talaba from '../../../../assets/img/statistics/talaba.png'
import mentor from '../../../../assets/img/statistics/mentor.png'
import filial from '../../../../assets/img/statistics/filial.png'

export const Category = () => {
  const [category, setCategory] = useState([])

  const url ='https://sheet.best/api/sheets/fa9a3f5f-3a6d-4a54-99c7-63772418a673/tabs/analytics_page/'

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setCategory(res))
  }, [])
  

  return (
    <>
    <TitleAnalitika>Analitika</TitleAnalitika>
    <Container>
       {
        category?.map((item) => {
          let icon;
          let img;
          switch (item.title){
            case  "G10":
              icon = <Talabalar/>
              img = talaba
              break;
            case "G11":
              icon = <Mentorlar/>
              img = mentor
              break;
            case "G12":
              icon = <Filiallar/>
              img = filial
              break;
            default: ""
          }
         return (
          <Container>
            <Wrapper key={item.id} >
              <Content>
                {icon}
                <Title>{item.title}</Title>
                <IconPlus className='plusIcon'/>
              </Content>
              <Content>
              <Up className='arrow'/>
              <Number>{item.num}</Number>
              <Img src={img}/>
              </Content>
            </Wrapper>
          </Container>
         )
       })
       }
   </Container>
    </>
  )

  
 }
