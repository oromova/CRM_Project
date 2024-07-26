import React from 'react'
import { Container, Wrapper, H1, UserBlock, UserName, UserMail, SidebarList, SidebarListLi, Settings, Edit, Icons} from '../Sidebar/Sidebar';
import user from '../../assets/img/sidebar/user.png'
import analitika from '../../assets/icons/analitika.svg'
import buyurtma from '../../assets/icons/buyurtma.svg'
import moliya from '../../assets/icons/moliya.svg'
import talaba from '../../assets/icons/talaba.svg'
import guruhlar from '../../assets/icons/guruhlar.svg'
import kurslar from '../../assets/icons/kurslar.svg'
import hr from '../../assets/icons/hr.svg'
import settings from '../../assets/icons/settings.svg'
import edit from '../../assets/icons/edit.svg'
import arrowRight from '../../assets/icons/arrowRight.svg'

export const Sidebar = () => {

  return (
    <Container>
      <Wrapper>
        <H1>Webbrain.crm</H1>
        <hr style={{border: '1px solid rgb(37, 62, 95)'}}/>
        <UserBlock>
        <Icons.User src={user}/>
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
