import {Container, Wrapper, Title, Button,} from './style'
import { useState } from 'react';

const Reset = () => {
  const [state, setState] = useState('Login');

  const onToggle = (name) => setState(name);
  console.log(state, "state");
  return (
    <Container>
     <Wrapper> 
     <Title.Main>Reset Password</Title.Main>
     <Title.Description>Enter your email to reset your password.</Title.Description>
     <Title.Label>Phone</Title.Label>
     <Button active={state === "Reset"} onClick={() => onToggle('VerificationCode')}>Reset Password</Button>
     </Wrapper> 

    </Container>
    
  )
};

export default Reset