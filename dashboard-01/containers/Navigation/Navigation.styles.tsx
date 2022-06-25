import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

interface IMenuListItemButtonStyled {
  selected: boolean;
}

export const MenuListStyled = styled.ul`
  display: grid;
  grid-template: auto / repeat(6, 1fr);
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MenuListItemButtonStyled = styled.button<IMenuListItemButtonStyled>`
  border: none;
  border-bottom: 2px solid
    ${({ selected }) => (selected ? '#171522' : '#ececf6')};
  display: flex;
  justify-content: center;
  padding: 1em;
  transition: border-bottom 0.2s linear;
  width: 100%;
`;

export const MenuListItemStyled = styled.li``;

export const NavigationContainerStyled = styled.div`
  background-color: #ececf6;
  ${mq['XS']} {
    grid-area: Dashboard;
  }
`;
