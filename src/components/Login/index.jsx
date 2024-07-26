import { Container, Title, Wrapper, Input, Button } from "./style"
import { useState } from "react";

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
        <Input placeholder="Enter your email address"></Input>
        <Title.Label>Email Address <span className="star">*</span></Title.Label>
        <Input placeholder="**********"></Input>
        <Button active = {state ==="Login"} onClick={() => onToggle('Reset')}>Login</Button>
      </Wrapper>
    
   
    </Container>
  )
}

export default Login;