import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

export const DashboardContainerStyled = styled.div`
  background-color: #f3f3fb;
  padding: 0 2em;

  ${mq['XS']} {
    grid-area: Dashboard;
    overflow: hidden;
  }
`;

export const TransferActionButtonContainerStyled = styled.div`
  margin: 2em 0;
  overflow-x: scroll;
  white-space: nowrap;

  ${mq['XS']} {
    max-width: 425px;
  }
`;

export const TransferActionButtonContentStyled = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  font-family: 'Rubik';
  gap: 1em;
  grid-template-rows: repeat(3, 1fr);
`;

export const TransferActionButtonContentFeeStyled = styled.div`
  font: 500 1.125em 'Rubik';
`;

export const TransferActionButtonContentLabelStyled = styled.div`
  align-items: start;
  color: #9d9d9f;
  display: flex;
  flex-direction: column;
`;

export const TransferActionButtonContentMoreStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
