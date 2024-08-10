import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  width: 100%; 
  margin-left: 10px;

`

export const TitleAnalitika= styled.h1`
  margin-top: 19px;
  margin-left: 30px;
  color: rgb(37, 62, 95);
  font-size: 20px;
  font-weight: 600;
`

export const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 10px 16px;
  width: 100%;
  height: 188px;
  border-radius: 8px;
  position: relative;
  margin-top: 16px;
  .icon {
    margin-top: 24px;
    margin-left: 24px;
  }
  .plusIcon {
    position: absolute;
    right: 26px;
    top: 26px;
  }
`
export const Content = styled.div`
  display: flex;
  .arrow {
    margin-top: 36px;
    margin-left: 20px;
  } 
`
export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: left;
  color: rgb(37, 62, 95);
  margin-top: 34px;
  margin-left: 16px;
`
export const Number = styled.p`
  color: rgb(37, 62, 95);
  font-size: 40px;
  font-weight: 600;
  line-height: 56px;
  margin-top: 16px;
  margin-left: 20px;
`
export const Img = styled.img`
  display: inline;
  border-radius: 50%;
  width: 177px;
  padding-right: 10px;
  margin-left: auto;
`