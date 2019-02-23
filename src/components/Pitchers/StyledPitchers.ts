import styled from 'styled-components';

import { HorizontalUL } from '../../styled-components/Global';

export const PitcherLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  > li {
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
  }
`;

export const PitcherNumber = styled.li`
  width: 35px;
`;

export const PitcherName = styled.li`
  min-width: 200px;
`;

export const PitcherStat = styled.li`
  width: 50px;

  strong {
    display: flex;
    justify-content: center;
  }
`;

export const PitchingTitles = styled(HorizontalUL)`
  
  > li {
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
    padding: 5px 8px;

    &:last-child {
      border-right: none;
    }
  }
`;