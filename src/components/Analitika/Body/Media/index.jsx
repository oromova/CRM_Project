import React, { useEffect, useState } from 'react'
import { Container, Icon, Num, P, Percent, Title, Wrapper } from './style';
// import socialMedia from '../../../../utils/socialMedia';
import { Content } from '../Category/style';
import Instagram from '../../../../assets/icons/socialMedia/instagram.svg?react'
import Youtube from '../../../../assets/icons/socialMedia/youtube.svg?react'
import Telegram from '../../../../assets/icons/socialMedia/telegram.svg?react'
import Linkedin from '../../../../assets/icons/socialMedia/linkedin.svg?react'
import Dots from '../../../../assets/icons/socialMedia/dots.svg?react'
import Up from '../../../../assets/icons/statistics/up.svg?react'
import Down from '../../../../assets/icons/statistics/down.svg?react'


export const SocialMedia = () => {
  const [media, setMedia] = useState([])

  const url = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    fetch(`${url}/tabs/media`, {})
    .then((res) => res.json())
    .then((res) => setMedia(res))
  }, [])


  return (
    <> 
   <P>Ijtimoiy tarmoqlar</P>
    <Container >
        {
          media.map(({id, title, subscribers, lastMonth,})=>{
            let icon;
            switch(title) {
              case 'Instagram':
                icon = <Instagram/>;
                break;
              case 'Telegram':
                icon = <Telegram/>;
                break;
              case 'Youtube':
                icon = <Youtube/>;
                break;
              case 'Linkedin':
                icon = <Linkedin/>;
                break;
              case "Tik tok":
                icon = <TikTok/>
                break;
                default: ""
            }

            return(
              <Wrapper key={id}>
                <Content>
                  <Icon>{icon}</Icon> 
                  <Title>{title}</Title>
                  <Dots className='iconDots'/>
                </Content>
                <Content>
                  {subscribers > lastMonth ? <Up style={{marginTop: "33px", marginLeft: '24px'}}/> : <Down style={{marginTop: "33px"}} />}
                  <Percent>
                  {Math.round(((subscribers - lastMonth) / lastMonth) * 100)}%
                  </Percent>
                  <Num>{Math.round(subscribers / 100)/10}k</Num>
                </Content>
              </Wrapper>
            )
          })
        }
    </Container>
    </>
   
  )
}
