import PropTyre from 'prop-types';
import { TransactionHistoryTable } from './TransactionHistoryTable';
import {
  TransactionHistoryTableStyle,
  TableHead,
  TableHeadTH,
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
        {items.map(item => (
          <TransactionHistoryTable
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionHistoryTableStyle>
  );
};

TransactionHistory.propType = {
  items: PropTyre.arrayOf(PropTyre.object),
};
