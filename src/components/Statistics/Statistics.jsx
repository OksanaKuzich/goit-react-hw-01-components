import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatisticListItem,
  StatisticListLabel,
  StatisticListPercentage,
} from './Ststistic.styled';

export const Statistics = ({ title, items }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {items.map(({ id, label, percentage }) => (
          <StatisticListItem key={id}>
            <StatisticListLabel>{label}</StatisticListLabel>
            <StatisticListPercentage>{percentage}%</StatisticListPercentage>
          </StatisticListItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
