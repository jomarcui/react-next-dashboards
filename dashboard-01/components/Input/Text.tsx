import { TextStyled } from './Input.styles';

const Text = ({ value, ...props }) => <TextStyled value={value} {...props} />;

export default Text;
