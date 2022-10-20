import styled from '@emotion/styled';

export const TransactionHistoryTableStyle = styled.table`
  margin: 30px auto 30px auto;
  width: 500px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #009698;
  text-transform: uppercase;
  padding-left: 0;
  border: 1px solid black;
`;

export const TableHeadTH = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  color: white;
  padding-left: 0;
  padding-right: 0;
  border: 1px solid black;
`;

export const TableDateTd = styled.th`
  padding-left: 0;
  padding-right: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  border: 1px solid black;
`;

export const TableDateTr = styled.tr`
  background-color: #fff;

  :nth-child(2n) {
    background-color: #ebffff;
  }
`;
