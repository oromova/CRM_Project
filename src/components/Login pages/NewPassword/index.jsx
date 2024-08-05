import { Button, Container, Input, InputDiv, Title, Wrapper } from "../Login/style";
import Unvisible from '../../../assets/icons/newpassword/unvisible.svg?react'
import { Line, LineWrapper, RedLine, Test, WrapperTest } from "./style";
import Check from '../../../assets/icons/newpassword/check.svg?react';
import Close from '../../../assets/icons/newpassword/close.svg?react'


export const NewPassword = () => {
  return(
  <Container style={{marginBottom: "200px"}}>
    <Wrapper>
      <Title.Main>New Password</Title.Main>
      <Title.Description>Set up a new password to protect your account.</Title.Description>
      <Title.Label>New Pasword <span className='star'>*</span> </Title.Label>
      <InputDiv>
      <Input placeholder="• • • • • • • •"></Input>
      <Unvisible className="visible"/>
      </InputDiv>
      
      <Title.Label>Confirm Password <span className='star'>*</span> </Title.Label>
      <InputDiv>
      <Input placeholder="• • • • • • • •"></Input>
      <Unvisible className="visible"/>
      </InputDiv>

      <LineWrapper>
        <RedLine/>
        <Line/>
        <Line/>
      </LineWrapper>
      
      <Test style={{marginLeft: '0px'}}>Weak password. Must contain at least;</Test>
      <WrapperTest>
        <Check/>
        <Test>At least 1 uppercase</Test>
      </WrapperTest>
      <WrapperTest>
        <Close/>
        <Test>At least 1 number</Test>
      </WrapperTest>
      <WrapperTest>
        <Close/>
        <Test>At least 8 characters</Test>
      </WrapperTest>

      <Button >Continue</Button> 
    </Wrapper>
  </Container> 
  )

}

export default NewPassword