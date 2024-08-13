import React from 'react'
import { Input, InputDiv, Time, Wrapper, Select, WrapperTime, Data,} from './style';
import SearchIcon from '../../../assets/icons/navbar/search.svg?react'
// import CurrentDay from '../../../utils/date';

  
export const Navbar = () => {
  const time = new Date()

  return (
    <Wrapper>
     <InputDiv>
        <SearchIcon className="icon"/>
        <Input placeholder='Search'/>
     </InputDiv>
     <WrapperTime>
     <Time>
      <Time.Info>
          {(time.getHours() < 10 ? "0" : "") + time.getHours()}:
          {(time.getMinutes() < 10 ? "0" : "") + time.getMinutes()}
          <span className="time">{time.getHours() > 11 ? "PM" : "AM"}</span>
      </Time.Info>
     </Time>
     <Data type='date'  
           min="2024-01-01"
           max="2024-12-31"
          defaultValue={time.toJSON().slice(0, 10)}>
      </Data>
     <Select className='lang' name="lang"> 
      <option value="uz">O'zbekcha</option>
      <option value="rus">Ruscha</option>
    </Select>
    </WrapperTime>
    </Wrapper>
  )
}
