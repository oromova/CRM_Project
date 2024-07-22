import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 430px;
  height: 550px;
  padding: 12px 20px 12px 20px;
`

export const Title = styled.div `
  font-family: Inter;
  font-size: 28px;
  font-weight: 500;
  line-height: 38px;
  text-align: center;
  color: rgb(31, 31, 31);
`
Title.Main = styled(Title)``

Title.Description = styled(Title)`
  color: rgb(140, 140, 140);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: rgb(140, 140, 140);
`
Title.Label = styled(Title)`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  .star {
    color: red;
  }
`
export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid rgb(187, 195, 205);
  border-radius: 8px;
  background: rgb(255, 255, 255);
  padding: 6px 12px 6px 12px;
  margin: 4px 0px;
`
export const Test = styled(Title.Description)`
  margin-top: 8px;
  margin-bottom: 8px;
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