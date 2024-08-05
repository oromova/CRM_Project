import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 430px;
  height: 414px;
  padding: 12px 20px 12px 20px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  color: #1f1f1f;
`;

Title.Main = styled(Title)``;

Title.Description = styled(Title)`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #8c8c8c;
  margin-top: 16px;
`;

Title.Label = styled(Title)`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  margin-top: 32px;
  margin-bottom: 4px;
  .star {
    color: red;
  }
`;

export const InputDiv = styled.div`
  outline: none;
  width: 100%;
  height: 48px;
  padding: 8px 12px;
  border: 1px solid rgb(208, 215, 222);
  border-radius: 8px;
  position: relative;
  .email {
    margin-right: 8px;
    text-align: center;
  }
  ::placeholder {
    color: rgb(146, 159, 175);
    font-size: 17px;
  }
  .visible {
    position: absolute;
    right: 18px;
    top: 12px;
  }
`;

export const Input = styled.input`
  border: none;
  width: 80%;
  outline: none;
`;

export const Forgot = styled.div`
  color: rgb(140, 140, 140);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration-line: underline;
  margin-top: 16px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  margin: 32px 0px;
  font-size: 16px;
  font-weight: 500;
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
