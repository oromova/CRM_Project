import React from 'react'
import statistics from '../../../../utils/Statistics'
import { Container, Content, H1, Number, Title, Wrapper} from './style';


export const Category = () => {
  return (
    <Container > 
      {
        statistics.map(({id, title, num, icon:Icon, backColor, src: Src, iconPlus: IconPlus, arrow: Arrow}) =>{
          return(
            <Container>
              <Wrapper key={id} color={backColor}>
                <Content>
                  <Icon className='icon'/>
                  <Title>{title}</Title>
                  <IconPlus className='plusIcon'/>
                </Content>
                <Content>
                  <Arrow className='arrow'/>
                  <Number>{num}</Number>
                </Content>
              </Wrapper>
            </Container>
          )
        })
      }
    </Container>
  )
}
