import styled from 'styled-components';

import { OL } from '../../styled-components/Global';

export const LineupLayout = styled.div`
  display: flex;
  padding-bottom: 146px;
`;

export const LineupInnings = styled(OL)`
  display: flex;
  list-style: none outside;
  flex: 1;

  > li {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledAtBat = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Diamond = styled.div`
  border: 1px solid #333;
  transform: rotate(45deg);
  width: 50%;
  height: 50%;
`;