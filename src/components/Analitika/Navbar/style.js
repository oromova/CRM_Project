import styled from "styled-components";

export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  background-color: rgb(255, 255, 255);
  position: relative;
`;

export const InputDiv = styled.div`
  width: 500px;
  height: 40px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  margin-left: 24px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  .icon {
    width: 17px;
    height: 17px;
    margin-left: 18px;
  }
  ::placeholder {
    color: rgb(187, 195, 205);
    font-size: 14px;
    font-weight: 500;
  }
`;
export const Input = styled.input`
  width: 80%;
  height: 38px;
  border: none;
  margin-left: 17px;
  outline: none;
`;

export const Time = styled.div`
  margin-left: 157px;
  width: 106px;
  height: 32px;
  margin: 0px 16px;
  color: rgb(37, 62, 95);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-left: 157px;
  margin-top: 4px;
`;

export const Date = styled.div`
  width: 178px;
  height: 40px;
  padding: 10px 16px 10px 20px;
  margin: 0px 16px;
  border-radius: 8px;
  background-color: (250, 250, 250);
  border: none;
`;

export const Select = styled.select`
  position: absolute;
  top: 10px;
  right: 16px;
  width: 147px;
  height: 40px;
  padding: 10px 16px 10px 20px;
  margin: 0px 16px;
  border-radius: 8px;
  background: rgb(250, 250, 250);
  color: rgb(37, 62, 95);
  border: none;
  outline: none;
`;
