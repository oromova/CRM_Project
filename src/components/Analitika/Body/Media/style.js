import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
`;
export const Wrapper = styled.div`
  width: 230px;
  height: 140px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
  background: rgb(255, 255, 255);
  .iconMedia {
    margin-top: 24px;
    margin-left: 26px;
  }
  .iconDots {
    margin-top: 24px;
    margin-left: 32px;
  }
`;
export const Content = styled.div`
  width: 221px;
  height: 140px;
  display: flex;
`;
export const Title = styled.p`
  margin-top: 24px;
  margin-left: 24px;
  color: rgb(37, 62, 95);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Percent = styled.p`
  color:  ${({ color }) => color};
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-top: 32px;
  margin-left: 8px;
`;

export const Num =styled.p`
  color: rgb(37, 62, 95);
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
  margin-top: 16px;
  margin-left: 13px;
  margin-right: 26px;
`
