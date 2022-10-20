import styled from '@emotion/styled';

export const TransactionHistoryTableStyle = styled.table`
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.tableHeader};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  text-transform: uppercase;
`;

export const TableHeadTH = styled.th`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeigth.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.card};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
`;

export const TableDateTd = styled.th`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-weight: ${p => p.theme.fontWeigth.normal};
  font-size: ${p => p.theme.fontSizes.s}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  text-transform: capitalize;
`;

export const TableDateTr = styled.tr`
  background-color: ${p => p.theme.colors.card};

  :nth-of-type(2n) {
    background-color: ${p => p.theme.colors.tableBgAccent};
  }
`;
