import styled from 'styled-components';

export const Diamond = styled.div`
  border: 1px solid #ccc;
  transform: rotate(45deg);
  width: 45%;
  height: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAtBat = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
`;

export const ActiveAtBatWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: #fff;
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 50px;
  color: #ccc;

  &:focused {
    outline: none;
  }

  &:hover {
    color: #666;
  }
`;