import { Wrapper,Container, Title, Input, Test, Button} from './style'

export const NewPassword = () => {
  <Container>
    <Wrapper>
    <Title.Main>New Password</Title.Main>
    <Title.Description>Set up a new password to protect your account.</Title.Description>
    <Title.Label>New Pasword <span className='star'>*</span> </Title.Label>
    <Input placeholder="**********"></Input>
    <Title.Label>Confirm Password <span className='star'>*</span> </Title.Label>
    <Input placeholder="**********"></Input>
    <Test>At least 1 uppercase</Test>
    <Test>At least 1 number</Test>
    <Test>At least 8 characters</Test>
    <Button>Continue</Button>
    </Wrapper>
  </Container>
}

export default NewPassword