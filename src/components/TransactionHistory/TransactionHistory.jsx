import PropTypes from 'prop-types';
import {
  TransactionHistoryTableStyle,
  TableHead,
  TableHeadTH,
  TableDateTd,
  TableDateTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTableStyle>
      <TableHead>
        <tr>
          <TableHeadTH>Type</TableHeadTH>
          <TableHeadTH>Amount</TableHeadTH>
          <TableHeadTH>Currency</TableHeadTH>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableDateTr key={id}>
            <TableDateTd>{type}</TableDateTd>
            <TableDateTd>{amount}</TableDateTd>
            <TableDateTd>{currency}</TableDateTd>
          </TableDateTr>
        ))}
      </tbody>
    </TransactionHistoryTableStyle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
