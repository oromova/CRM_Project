import React from 'react'
import { Container, Num, Percent, Title, Wrapper } from './style';
import socialMedia from '../../../../utils/socialMedia';
import { Content } from '../Category/style';

export const SocialMedia = () => {
  return (
    <Container>
      {
        socialMedia.map(({id, icon1: IconMedia, title, icon: IconDots, arrow: Arrow, percent, num})=>{
         return(
           <Wrapper key={id}>
            <Content>
              <IconMedia className='iconMedia'/>
              <Title>{title}</Title>
              <IconDots className='iconDots'/>
            </Content>
            <Content>
              <Arrow className="arrow"/>
              <Percent>{percent}</Percent>
              <Num>{num}</Num>
            </Content>
          </Wrapper>
         )
        })
      }
    </Container>
  )
}
