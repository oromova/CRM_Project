import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`
export const H1 = styled.h1`
  margin-top: 19px;
  margin-left: 24px;
  color: rgb(37, 62, 95);
  font-size: 20px;
  font-weight: 600;
`
export const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 10px 16px;
  width: 334px;
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
`