import React, { useEffect, useState } from 'react'
import { P } from '../Media/style';
import { Container, Circle, Email, Message, Name, Profile, Wrapper,} from './style';
import img from '../../../../assets/img/email/email1.png'

export const Emails = () => {
  const [emails, setEmails] = useState([])

  const url = import.meta.env.VITE_BASE_URL

useEffect(() => {
  fetch(`${url}/tabs/emails`, {})
  .then((res) => res.json())
  .then((res) => setEmails(res))
}, []
)

  return (
    <>
      <Email>
        <P>Email xabarlari</P>
        <Circle>12</Circle>
      </Email>
      <Container style={{border: '1px solid rgb(240, 240, 240)'}}>
        {emails.map((item) => { 
          return(
          <Wrapper key={item.id}>
            <Profile>
              <input className='input' type="checkbox" name="" id="" />
              <img className='img' src={img} />
            <Name>
              <Name.Surname>Yulduz Oromova</Name.Surname>
              <Name.Role>{item.title}</Name.Role>
            </Name>
            <Message>Message here</Message>
            <Message.Time>10.08.2024</Message.Time>
            </Profile>
          </Wrapper>
          )
        })}
      </Container>
     
    </>
  )
}
