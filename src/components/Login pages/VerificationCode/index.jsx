import { Button, Container, Title, Wrapper } from "../Login/style";
import { Code, Display, Subtitle } from "./style";

const VerificationCode = () => {
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
        <Button>Reset Password</Button>
        <Title.Description style={{marginBottom:'4px', marginTop: "0px"}}>
          Experiencing issues receiving the code?</Title.Description>
        <Subtitle>Resend code</Subtitle>
      </Wrapper>
    </Container>
  )
}
 export default VerificationCode