import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

export const DashboardContainerStyled = styled.div`
  background-color: #f3f3fb;
  padding: 2em;

  ${mq['XS']} {
    grid-area: Dashboard;
    overflow: hidden;
  }
`;

export const TransferActionButtonContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;

  ${mq['XS']} {
    max-width: 425px;
  }
`;

export const TransferActionButtonContent = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  font-family: 'Rubik';
  gap: 1em;
  grid-template-rows: repeat(3, 1fr);
`;

export const TransferActionButtonContentFee = styled.div`
  font: 500 1.125em 'Rubik';
`;

export const TransferActionButtonContentLabel = styled.div`
  align-items: start;
  color: #9d9d9f;
  display: flex;
  flex-direction: column;
`;

export const TransferActionButtonContentMore = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
