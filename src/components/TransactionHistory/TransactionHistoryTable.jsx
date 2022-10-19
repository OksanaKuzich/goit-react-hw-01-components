import PropType from 'prop-types';

export const TransactionHistoryTable = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryTable.propType = {
  type: PropType.string,
  amount: PropType.string,
  currency: PropType.string,
};
