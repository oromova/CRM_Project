import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 280px;
  height: 100vh;
  left: 0;
  top: 0;
  box-shadow: 0px 8px 8px 0px rgb(245, 246, 248);
  background: rgb(22, 37, 57);
  border: 1px solid black;
`;

export const CommonStyle = css`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const H1 = styled.h1`
  color: rgb(24, 144, 255);
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  margin: 16px 24px;
`;

export const UserBlock = styled.div`
  display: flex;
  margin-top: 22.5px;
  margin-bottom: 20px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const UserOn = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 58px;
  top: 121px;
  background: rgb(82, 196, 26);
  border-radius: 50%;
`

export const UserName = styled.div`
  width: 168px;
  height: 20px;
  padding: 0px;
  margin: 2px 0px;
  ${CommonStyle};
  color: rgb(248, 250, 252);
  font-weight: 600;
`;

export const UserMail = styled.div`
  ${CommonStyle};
  font-size: 12px;
  color: rgb(146, 159, 175);
`;

export const SidebarList = styled.div`
  height: 330px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #253e5f;
  padding-bottom: 10px;
`;

export const SidebarListLi = styled.a`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;

  p {
    color: rgb(248, 250, 252);
    ${CommonStyle}
    margin-left: 20px;
  }

  &:hover {
    cursor: pointer;
    background-color: #253e5f;
    color: #1890ff;
    p{
      color: rgb(24, 144, 255);
    }
  }
`;

export const Icons = styled.div``;

Icons.User = styled.img`
  margin-right: 16px;
`;

Icons.Icon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 27px;
`;

Icons.Arrow = styled.img`
  position: absolute;
  right: 30px;
`;

export const Settings = styled(SidebarListLi)`
  margin-top: 24px;
`;

export const Edit = styled(Settings)`
  position: fixed;
  bottom: 0;
  width: 280px;
`;
