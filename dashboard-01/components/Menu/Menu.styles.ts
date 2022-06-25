import styled from '@emotion/styled';
import { mq } from '../../utilities/mediaQuery';

interface IMenuListItemButtonStyled {
  selected: boolean;
}

export const ButtonStyled = styled.button<IMenuListItemButtonStyled>`
  border: none;
  border-bottom: 2px solid
    ${({ selected }) => (selected ? '#171522' : '#ececf6')};
  display: flex;
  justify-content: center;
  padding: 2em;
  transition: border-bottom 0.2s linear, color 0.2s linear;
  width: 100%;
`;

export const ListStyled = styled.ul`
  display: grid;
  grid-template: auto / repeat(6, 1fr);
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ListItemStyled = styled.li``;
