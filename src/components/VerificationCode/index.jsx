import {Container, Wrapper, Title, Display, Button, Subtitle, Code} from "./style"
import {useState} from 'react' 

const VerificationCode = () => {
  const [state, setState] = useState('Login');

  const onToggle = (name) => setState(name);
  console.log(state, "state");
  return (
    <Container>
      <Wrapper>
        <Title.Main>Enter Verification Code</Title.Main>
        <Title.Description>We’ve sent a code to <span style={{fontWeight: '500'}}>+998 90 000 00 00</span></Title.Description>
        <Display>
          <Code>4</Code>
          <Code>1</Code>
          <Code>9</Code>
          <Code>7</Code>
        </Display>
        <Button active={state === "VerificationCode"
     } onClick={() => onToggle("Login")}>Reset Password</Button>
        <Title.Description style={{marginBottom:'4px'}}>Experiencing issues receiving the code?</Title.Description>
        <Subtitle>Resend code</Subtitle>
      </Wrapper>

    </Container>
  )
}
 export default VerificationCode