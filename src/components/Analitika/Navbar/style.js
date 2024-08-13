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

export const WrapperTime = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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
  margin-right: 30px;
`;

Time.Info = styled(Time)`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: rgba(37, 62, 95, 1);
  .time {
    color: rgba(187, 195, 205, 1);
    margin-left: 8px;
  }
`
export const Data = styled.input`
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(37, 62, 95, 1);
  cursor: pointer;
  background-color: #f9f9f9;
  padding: 10px 10px 10px 16px;
  margin: 0 16px;
  height: 40px;
  border: none;
`;

export const Select = styled.select`
  width: 147px;
  height: 40px;
  padding: 10px 16px 10px 20px;
  border-radius: 8px;
  background: rgb(250, 250, 250);
  color: rgb(37, 62, 95);
  border: none;
  outline: none;
  margin-right: 16px;
`;
