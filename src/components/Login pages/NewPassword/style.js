import styled from "styled-components";
import { Title } from "../Login/style";

export const LineWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const Line = styled.div`
  width: 124px;
  height: 4px;
  background-color: rgb(187, 195, 205);
  border-radius: 2px;
  margin: 8px 8px 24px 8px;
`;

export const RedLine = styled(Line)`
  background-color: rgb(245, 34, 45);
`;

export const WrapperTest = styled.div`
  display: flex;
  align-items: center;
`;

export const Test = styled(Title.Description)`
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;
  margin-left: 10px;
`;

