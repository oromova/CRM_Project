import styled from "styled-components";

export const Container = styled.div`
  width: 368px;
  height: 280px;
  left: 1032px;
  top: 572px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
`

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`

export const Month = styled.div`
  color: rgb(37, 62, 95);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 82px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`

export const Day = styled.div`
  width: 48px;
  height: 72px;
  box-sizing: border-box;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 24px;
`

Day.Name = styled(Day)`

`