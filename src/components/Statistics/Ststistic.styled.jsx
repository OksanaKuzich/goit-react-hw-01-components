import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.card};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatisticListItem = styled.li`
  color: ${p => p.theme.colors.card};
  background-color: ${props => getDarkColor()};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  width: 56px;
  text-align: center;
`;

export const StatisticListLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.xs}px;
`;

export const StatisticListPercentage = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
`;

function getDarkColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}
