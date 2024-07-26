import { Wrapper,Container, Title, Input, Test, Button, RedLine, Line} from './style'
import { useState } from 'react';

export const NewPassword = () => {
  const [state, setState] = useState('Login');

  const onToggle = (name) => setState(name);
  console.log(state, "state");
  return(
  <Container>
    <Wrapper>
    <Title.Main>New Password</Title.Main>
    <Title.Description>Set up a new password to protect your account.</Title.Description>
    <Title.Label>New Pasword <span className='star'>*</span> </Title.Label>
    <Input placeholder="**********"></Input>
    <Title.Label>Confirm Password <span className='star'>*</span> </Title.Label>
    <Input placeholder="**********"></Input>
    <Container>
    <RedLine/>
    <Line/>
    <Line/>
    </Container>
    <Test>Weak password. Must contain at least;</Test>
    <Test>At least 1 uppercase</Test>
    <Test>At least 1 number</Test>
    <Test>At least 8 characters</Test>
    <Button active = {state === "NewPassword"} onClick={() => onToggle('VerificationCode')}>Continue</Button>
    </Wrapper>

  </Container>
  )

}

export default NewPassword