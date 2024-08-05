import {Container, Wrapper, Title, Button,  Input} from '../Login/style'
import Flag from '../../../assets/icons/reset/uzbekistan.svg?react'
import { InputWrapper, Select, InputDiv } from './style';


const Reset = () => {
  // const [state, setState] = useState('Login');

  // const onToggle = (name) => setState(name);
  // console.log(state, "state");
  return (
    <Container>
     <Wrapper> 
     <Title.Main>Reset Password</Title.Main>
     <Title.Description>Enter your email to reset your password.</Title.Description>
     <Title.Label>Phone</Title.Label>
     <InputWrapper>
     <InputDiv style={{borderRight:"1px solid rgb(208, 215, 222)"}}> 
     <Flag className="flag"/>
     <Select className='lang' name="lang" id="lang">
        <option value="uz">UZ</option>
        <option value="rus">RUS</option>
        <option value="eng">ENG</option>
     </Select>
     </InputDiv>
     <InputDiv>
     <Input className='tel' type="tel" placeholder='+998 90 000 00 00'/>
     </InputDiv>
     </InputWrapper>
     <Button onClick={() => onToggle('VerificationCode')}>Reset Password</Button>
     </Wrapper> 
    </Container>
  )
};

export default Reset