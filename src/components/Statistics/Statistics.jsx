import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';
import { StatisticsContainer, Title, StatList } from './Ststistic.styled';

export const Statistics = ({ title, items }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}
      <StatList>
        {items.map(item => (
          <StatisticList
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};
