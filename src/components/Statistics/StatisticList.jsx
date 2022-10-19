import PropTypes from 'prop-types';

export const StatisticList = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
