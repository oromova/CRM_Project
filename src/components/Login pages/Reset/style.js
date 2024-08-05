import styled from "styled-components";

export const Select = styled.select`
  margin-right: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(208, 215, 222);
  border-radius: 8px;
  .tel {
    height: 100%;
    padding: 0;
    width: 280px;
  }
`;

export const InputDiv = styled.div`
  outline: none;
  height: 48px;

  .flag {
    margin-top: 12px;
    margin-left: 10px;
  }
  .lang {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: rgb(110, 119, 129);
  }

  .tel{
    padding-left: 12px;
  }

  ::placeholder{
    color: rgb(110, 119, 129);
    font-size: 16px;
    font-weight: 400;
  }
`;
