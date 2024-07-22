import { Container, Title, Wrapper, Input, Button } from "./style"

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title.Main>Login to your account</Title.Main>
        <Title.Description>Enter your details to login.</Title.Description>
        <Title.Label>Email Address <span className="star">*</span></Title.Label>
        <Input placeholder="Enter your email address"></Input>
        <Title.Label>Email Address <span className="star">*</span></Title.Label>
        <Input placeholder="**********"></Input>
        <Button>Login</Button>
      </Wrapper>
    </Container>
  )
}

export default Login;