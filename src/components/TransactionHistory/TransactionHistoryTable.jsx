import PropType from 'prop-types';
import { TableDateTd, TableDateTr } from './TransactionHistory.styled';

export const TransactionHistoryTable = ({ type, amount, currency }) => {
  return (
    <TableDateTr>
      <TableDateTd>{type}</TableDateTd>
      <TableDateTd>{amount}</TableDateTd>
      <TableDateTd>{currency}</TableDateTd>
    </TableDateTr>
  );
};

TransactionHistoryTable.propType = {
  type: PropType.string,
  amount: PropType.string,
  currency: PropType.string,
};
