import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 550px;
  padding: 12px 20px 12px 20px;
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  color: rgb(31, 31, 31);
`;

Title.Main = styled(Title)`
  margin-bottom: 16px;
`;

Title.Description = styled(Title)`
  color: rgb(140, 140, 140);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(140, 140, 140);
  margin-bottom: 32px;
`;

export const Display = styled.div`
  display: flex;
  margin: 32px 0px;
`

export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin: 32px 0px;
  box-sizing: border-box;
  border: 1px solid rgb(47, 84, 235);
  border-radius: 8px;
  box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.12);
  background: rgb(24, 144, 255);
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(10, 13, 20);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  text-decoration-line: underline;
  margin-top: 4px;
`

export const Code = styled.div`
  width: 88.5px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  padding: 12px 16px 12px 16px;
  margin: 0px 12px;
  box-sizing: border-box;
  border: 1px solid rgb(226, 228, 233);
  border-radius: 12px;
  background: rgb(255, 255, 255);

  `