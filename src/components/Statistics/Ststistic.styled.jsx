import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 16px;
  text-transform: uppercase;
  color: #575555;
  background-color: #fff;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatisticListItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  width: 56px;
  text-align: center;
  color: white;
  background-color: ${props => getDarkColor()};
`;

export const StatisticListLabel = styled.span`
  font-size: 12px;
`;

export const StatisticListPercentage = styled.span`
  margin-top: 5px;
  font-size: 16px;
`;

function getDarkColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}