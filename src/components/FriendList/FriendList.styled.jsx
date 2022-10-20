import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  margin: 30px auto 0 auto;
  width: 210px;
`;

export const FriendListItemStyle = styled.li`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0 10px 10px -5px rgb(0 0 0 / 30%);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`;

export const FriendAvatar = styled.img`
  width: 48px;
  margin-right: 5px;
`;

export const FriendName = styled.p`
  font-size: 18px;
`;
