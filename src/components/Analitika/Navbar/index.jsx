import React from 'react'
import { Input, InputDiv, Time, Wrapper, Date, Select} from './style';
import SearchIcon from '../../../assets/icons/navbar/search.svg?react'
import { Hour, NewDate } from '../../../utils/navbar';

export const Navbar = () => {
  return (
    <Wrapper>
     <InputDiv>
        <SearchIcon className="icon"/>
        <Input placeholder='Search'/>
     </InputDiv>
     <Time>
        <Hour className="date"/>
     </Time>
      <Date type='datetime-local' value={7} />
    <NewDate />
    <Select className='lang' name="lang"> 
      <option value="uz">O'zbekcha</option>
      <option value="rus">Ruscha</option>
    </Select>
    </Wrapper>
  )
}
