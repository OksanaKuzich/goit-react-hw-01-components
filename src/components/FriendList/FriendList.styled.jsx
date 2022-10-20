import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
`;

export const FriendListItemStyle = styled.li`
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.card};
  box-shadow: 0 10px 10px -5px rgb(0 0 0 / 30%);
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Status = styled.span`
  margin-right: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => (p.status ? 'green' : 'red')};
  width: 10px;
  height: 10px;
`;

export const FriendAvatar = styled.img`
  margin-right: ${p => p.theme.space[2]}px;
  width: 48px;
`;

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
`;
