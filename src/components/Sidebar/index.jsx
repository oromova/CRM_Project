import React from 'react'
import { Container, Wrapper, H1, UserBlock, UserName, UserMail, SidebarList, SidebarListLi, Settings, Edit, Icons, UserOn} from './style';
import user from '../../assets/img/sidebar/user.png'
import sidebarList from '../../mock/SidebarList';
import { Arrow } from '../../mock/SidebarList';

export const Sidebar = () => {

  return (
    <Container>
      <Wrapper>
        <H1>Webbrain.crm</H1>
        <hr style={{border: '1px solid rgb(37, 62, 95)'}}/>
        <UserBlock>
        <Icons.User src={user}/>
        <UserOn/>
          <div>
            <UserName>Sardorbek Muhtorov</UserName>
            <UserMail>s.muhtorov@gmail.com</UserMail>
          </div>
        </UserBlock>
        <SidebarList>
          {
           sidebarList.map(({id, name, icon: Icon}) => {
            return(
              <SidebarListLi key={id}>
             <Icon/>
              <p>{name}</p>
            <Arrow/>
            </SidebarListLi>
            )
            })
          }
        </SidebarList>
  
        
        {/* <Settings>
          <Icons.Icon src={settings}/>
          <p>Sozlamalar</p>
         
        </Settings>
        <Edit>
        <Icons.Icon src={edit}/>
          <p>Chiqish</p>
        </Edit> */}
      </Wrapper>
    </Container>
  )
}

export default Sidebar
