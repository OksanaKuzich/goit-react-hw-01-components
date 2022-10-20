import PropType from 'prop-types';
import {
  FriendListItemStyle,
  Status,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyle>
      <Status type={isOnline}></Status>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendListItemStyle>
  );
};

FriendListItem.propType = {
  avatar: PropType.string,
  name: PropType.string,
  isOnline: PropType.bool,
};
