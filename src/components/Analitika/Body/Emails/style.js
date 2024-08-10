import styled from "styled-components";

export const Email = styled.div`
  display: flex;
`;
export const Circle = styled.div`
  width: 28px;
  height: 28px;
  padding: 4px 8px 4px 8px;
  background-color: rgb(24, 144, 255);
  border-radius: 16px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 16px;
  margin-top: 24px;
`;

export const Container = styled.div`
  margin-top: 16px;
  margin-left: 24px;
  width: 720px;
  height: 280px;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 8px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  padding-right: 15px;
  /* overflow-y: auto; */
`;

export const Wrapper = styled.div`
  width: 695px;
  height: 64px;
  padding: 12px;
  :hover {
    border-radius: 8px;
    background: rgb(240, 245, 255);
  }
`;

export const Profile = styled(Wrapper)`
  gap: 20px;
  display: flex;
`;

export const Name = styled.div`
  flex-direction: column;
  width: 180px;
  align-items: start;
`;

Name.Surname = styled(Name)`
  color: rgb(37, 62, 95);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
Name.Role = styled(Name)`
  color: rgb(146, 159, 175);
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding-top: 0px;
`;

export const Message = styled.p`
  width: 121px;
  display: flex;
  align-items: center;
`;

Message.Time = styled(Message)`
  width: 87px;
  margin-left: auto;
`;
