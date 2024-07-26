import React from 'react'
import { Container, Wrapper, H1, UserBlock, UserName, UserMail, SidebarList, SidebarListLi, Settings, Edit, Icons, UserOn} from '../Sidebar/Sidebar';
import user from '../../assets/img/sidebar/user.png'
import analitika from '../../assets/icons/sidebar/analitika.svg'
import buyurtma from '../../assets/icons/sidebar/buyurtma.svg'
import moliya from '../../assets/icons/sidebar/moliya.svg'
import talaba from '../../assets/icons/sidebar/talaba.svg'
import guruhlar from '../../assets/icons/sidebar/guruhlar.svg'
import kurslar from '../../assets/icons/sidebar/kurslar.svg'
import hr from '../../assets/icons/sidebar/hr.svg'
import settings from '../../assets/icons/sidebar/settings.svg'
import edit from '../../assets/icons/sidebar/edit.svg'
import arrowRight from '../../assets/icons/sidebar/arrowRight.svg'

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
          <SidebarListLi >
            <Icons.Icon src={analitika}/>
            <p>Analitika</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi >
            <Icons.Icon src={buyurtma}/>
            <p>Buyurtma</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi>
            <Icons.Icon src={moliya}/>
            <p>Moliya</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi>
            <Icons.Icon src={talaba}/>
            <p>Talaba</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi>
            <Icons.Icon src={guruhlar}/>
            <p>Guruhlar</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi>
            <Icons.Icon src={kurslar}/>
            <p>Kurlar</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
          <SidebarListLi>
            <Icons.Icon src={hr}/>
            <p>HR</p>
            <Icons.Arrow src={arrowRight}/>
          </SidebarListLi>
        </SidebarList>
        <Settings>
          <Icons.Icon src={settings}/>
          <p>Sozlamalar</p>
          <Icons.Arrow src={arrowRight}/>
        </Settings>
        <Edit>
        <Icons.Icon src={edit}/>
          <p>Chiqish</p>
        </Edit>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
