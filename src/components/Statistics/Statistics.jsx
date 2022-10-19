import PropTypes from 'prop-types';
import { StatisticList } from './StatisticList';

export const Statistics = ({ title, items }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {items.map(item => (
          <StatisticList
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
};
