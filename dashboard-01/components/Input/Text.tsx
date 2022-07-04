import {
  SearchOutlinedStyled,
  TextContainer,
  TextStyled,
} from './Input.styles';

const Text = ({ value, ...props }) => (
  <TextContainer>
    <SearchOutlinedStyled />
    <TextStyled value={value} {...props} />
  </TextContainer>
);

export default Text;
