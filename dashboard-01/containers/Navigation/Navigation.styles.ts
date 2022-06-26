import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

export const NavigationContainerStyled = styled.div`
  background-color: #ececf6;

  ${mq['XS']} {
    grid-area: Navigation;
  }
`;
