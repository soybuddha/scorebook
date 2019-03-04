import styled from 'styled-components';

export const StyledTextInputWrapper = styled.div`
  position: relative;
`;

export const StyledTextInput = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 22px;

  &:hover, &:focus {
    border-color: #666;
  }
`;

export const StyledTextInputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #666;

  background: #fff;
`;