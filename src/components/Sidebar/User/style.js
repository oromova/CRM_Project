import styled from "styled-components";
import { CommonStyle } from "../style";


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
`;

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

export const Img = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`