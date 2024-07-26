import React from 'react'
import { Container, Wrapper, H1, UserBlock, UserName, UserMail, SidebarList, SidebarListLi, Settings, Edit} from '../Sidebar/Sidebar';


export const Sidebar = () => {

  return (
    <Container>
      <Wrapper>
        <H1>Webbrain.crm</H1>
        <hr style={{border: '1px solid rgb(37, 62, 95)'}}/>
        <UserBlock>
          <div>
            <UserName>Sardorbek Muhtorov</UserName>
            <UserMail>s.muhtorov@gmail.com</UserMail>
          </div>
        </UserBlock>
        <SidebarList>
          <SidebarListLi><p>Anlitika</p></SidebarListLi>
          <SidebarListLi><p>Buyurtma</p></SidebarListLi>
          <SidebarListLi><p>Moliya</p></SidebarListLi>
          <SidebarListLi><p>Talaba</p></SidebarListLi>
          <SidebarListLi><p>Guruhlar</p></SidebarListLi>
          <SidebarListLi><p>Kurlar</p></SidebarListLi>
          <SidebarListLi><p>HR</p></SidebarListLi>
        </SidebarList>
        <Settings><p>Sozlamalar</p></Settings>
        <Edit><p>Chiqish</p></Edit>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
