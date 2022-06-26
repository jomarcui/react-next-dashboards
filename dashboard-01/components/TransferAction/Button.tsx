import { ButtonStyles } from './Button.styles';

const Button = ({ children, value }) => (
  <ButtonStyles value={value}>{children}</ButtonStyles>
);

export default Button;
