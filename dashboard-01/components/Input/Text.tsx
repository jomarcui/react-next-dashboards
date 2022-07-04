import {
  SearchOutlinedStyled,
  TextContainerStyled,
  TextStyled,
} from './Input.styles';

const Text = ({ value, ...props }) => (
  <TextContainerStyled>
    <SearchOutlinedStyled />
    <TextStyled value={value} {...props} />
  </TextContainerStyled>
);

export default Text;
