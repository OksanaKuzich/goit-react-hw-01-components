import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 210px;
  border: 1px solid black;
`;

export const Description = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-top: 15px;
`;

export const Tag = styled.p`
  color: #575555;
  font-size: 14px;
  margin-top: 5px;
`;

export const Location = styled.p`
  color: #575555;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Stats = styled.ul`
  color: #575555;
  display: flex;
  background-color: #facfcf;
  /* text-align: stretch; */
  /* justify-content: center; */
`;

export const Item = styled.li`
  color: #575555;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(210px / 3);
  font-size: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid black;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const Label = styled.span`
  margin-bottom: 2px;
`;

export const Quantity = styled.span`
  font-weight: bold;
  color: black;
`;
