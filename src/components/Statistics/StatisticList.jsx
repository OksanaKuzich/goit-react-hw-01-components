import PropTypes from 'prop-types';
import {
  StatisticListItem,
  StatisticListLabel,
  StatisticListPercentage,
} from './Ststistic.styled';

export const StatisticList = ({ label, percentage }) => {
  return (
    <StatisticListItem>
      <StatisticListLabel>{label}</StatisticListLabel>
      <StatisticListPercentage>{percentage}%</StatisticListPercentage>
    </StatisticListItem>
  );
};

StatisticList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
