import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

export const DashboardContainerStyled = styled.div`
  background-color: #f3f3fb;
  padding: 2em;

  ${mq['XS']} {
    grid-area: Dashboard;
  }
`;
