import styled from '@emotion/styled';

export const Container = styled.div`
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 210px;
`;

export const Description = styled.div`
  background-color: ${p => p.theme.colors.card};
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeigth.bold};
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-top: ${p => p.theme.space[2]}px;
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Stats = styled.ul`
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.cardAccent};
  display: flex;
`;

export const Item = styled.li`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xs}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.textDark};
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(210px / 3);

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.textDark};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeigth.bold};
  color: ${p => p.theme.colors.textDark};
`;
