import { ButtonStyled } from './Menu.styles';

const Button = ({ children, handleClick, selected, ...props }) => (
  <ButtonStyled onClick={handleClick} selected={selected} {...props}>
    {children}
  </ButtonStyled>
);

export default Button;
