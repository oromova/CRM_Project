import styled, { css } from "styled-components";

export const Container = styled.div`
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: 0px 8px 8px 0px rgb(245, 246, 248);
  background: rgb(22, 37, 57);
  border: 1px solid black;
  position: relative;
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

export const SidebarList = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #253e5f;
  padding-bottom: 10px;
`;

export const SidebarListLi = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  
  .icon {
    width: 17px;
    height: 17px;
    margin-left: 26px;
  }

  p {
    color: rgb(248, 250, 252);
    ${CommonStyle}
    margin-left: 20px;
  }

  .arrowright {
    position: absolute;
    right: 30px;
  }

  &:hover {
    cursor: pointer;
    background-color: #253e5f;
    color: #1890ff;
    p {
      color: rgb(24, 144, 255);
    }
    path {
      fill: rgb(24, 144, 255);
    }
  }
 
`;

export const Submenu = styled.div`
  height: ${({ open }) => (open ? "fit-content" : "0px")};
  overflow: hidden;
`;

export const SubmenuItem = styled(SidebarListLi)`
  font-size: 14px;
  margin-left: 45px;
  color: white;
  padding-left: 17px;
`;

export const Settings = styled(SidebarListLi)`
  margin-top: 24px;
`;

