import { Container, Title, Wrapper, Input, InputDiv, Button, Forgot,} from "./style"
import { useState } from "react";
import Email from '../../../assets/icons/Login/email.svg?react'
import Lock from '../../../assets/icons/Login/lock.svg?react'
import Visible from '../../../assets/icons/Login/eye.svg?react'

export const Login = () => {
  const [state, setState] = useState('Login');

  const onToggle = (name) => setState(name);
  console.log(state, "state");
  return (
    <Container>
      <Wrapper>
        <Title.Main>Login to your account</Title.Main>
        <Title.Description>Enter your details to login.</Title.Description>
        <Title.Label>Email Address <span className="star">*</span></Title.Label>
        <InputDiv>
          <Email className="email"/>
          <Input placeholder="Enter your email address"></Input>
        </InputDiv>
         
        <Title.Label>Email Address <span className="star">*</span></Title.Label>
          <InputDiv>
          <Lock className="email"/>
          <Input type="password" placeholder="**********"></Input>
          <Visible className="visible"/>
          </InputDiv>      
          <Forgot>Forgot password?</Forgot>  
        <Button active = {state ==="Login"} onClick={() => onToggle('Reset')}>Login</Button>
      </Wrapper>
    
   
    </Container>
  )
}

export default Login;