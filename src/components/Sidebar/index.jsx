import React, { useState } from 'react'
import { Container, Wrapper, H1, SidebarList, SidebarListLi, Submenu, SubmenuItem} from './style';
import sidebarList from '../../utils/SidebarList';
import User from './User';
import setting from '../../utils/Settings';
import edit from '../../utils/Edit'

export const Sidebar = () => {
  const [open, setOpen] = useState([])

  const onOpen = (id) => {
    // localStorage.setItem('open', [sidebarList.map((val)=>)])
    if (open.includes(id)){
      let res = open.filter((val) => val !== id)
      setOpen(res)
    } else setOpen([...open, id])
  }

  return (
    <Container>
      <Wrapper>
        <H1>Webbrain.crm</H1>
        <hr style={{border: '1px solid rgb(37, 62, 95)'}}/>
        <User/>
        <SidebarList>
          {sidebarList.map(({id, name, icon: Icon, arrow: Arrow, child}) => {
            return(
              <div>
                <SidebarListLi onClick={()=>onOpen(id)} key={id}>
                <Icon className="icon"/>
                <p>{name}</p>
                {child && <Arrow className="arrowright"/>}
                </SidebarListLi>
                  {child && (
                    <Submenu open={open.includes(id)}>
                    {child.map((child) => {
                        return <SubmenuItem key={child.id}>{child.name}</SubmenuItem>
                    })}
                    </Submenu>
                  )}
              </div>
            )
            })
          }
        </SidebarList>
        {
          setting.map(({id, title, icon: Icon, child, arrow: Arrow}) => {
            return(
              <div>
                <SidebarListLi onClick={()=>onOpen(id)} key={id}>
                <Icon className="icon"/>
                <p key={id}>{title}</p>
                {child && <Arrow className="arrowright"/>}
                </SidebarListLi>
                {child && (
                <Submenu open={open.includes(id)}>
                {child.map((child) => {
                    return <SubmenuItem key={child.id}>{child.title}</SubmenuItem>
                })}
                </Submenu>
              )}
              </div>
            )
          })
        }
        { 
        edit.map(({id, title, icon: Icon}) =>{
          return(
            <SidebarListLi key={id} style={{marginTop: 'auto', height: '67px', borderTop: '1px solid #253E5F'}}>
              <Icon className="icon"/>
              <p>{title}</p>
            </SidebarListLi>
          )
        })
        }
      </Wrapper>
    </Container>
  )
}

export default Sidebar
