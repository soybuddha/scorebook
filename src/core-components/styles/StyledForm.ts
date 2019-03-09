import styled from 'styled-components';

export const StyledFormElementWrapper = styled.div`
  position: relative;
`;

export const StyledInputElement = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 22px;

  &:hover, &:focus {
    border-color: #666;
    outline: none;
  }
`;

export const StyledSelectElement = styled.select`
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 22px;
  border-radius: 0;
  background-color: #fff;
  appearance: none;

  &:hover, &:focus {
    border-color: #666;
    outline: none;
  }
`;

export const StyledFormElementLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #666;

  background: #fff;
`;