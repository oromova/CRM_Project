import user from '../../../assets/img/sidebar/user.png'
import { UserBlock, UserName, UserOn, UserMail, Img } from './style'

const User = () => {
  return (
     <UserBlock>
        <Img src={user}></Img>
        <UserOn/>
          <div>
            <UserName>Sardorbek Muhtorov</UserName>
            <UserMail>s.muhtorov@gmail.com</UserMail>
          </div>
        </UserBlock>
  )
}

export default User
