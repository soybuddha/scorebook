import styled from 'styled-components';

import { OL, UL } from '../../styled-components/Global';
import { StyledAtBat } from '../AtBat/StyledAtBat';

export const LineupTitle = styled.li`
  display: flex;
`;

export const Position = styled.span`
  display: flex;
  align-items: flex-start;
  width: 35px;
  padding: 5px 8px;

  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
`;

export const Player = styled.span`
  display: flex; 
  flex: 1;
  align-items: flex-start;
  padding: 5px 8px;

  border-right: 1px solid #333;
  border-bottom: 1px solid #333;
`;

export const LineupRow = styled(LineupTitle)`
  height: 81px;
  justify-content: center;
`;

export const LineupLayout = styled.div`
  display: flex;

  > ${UL} {
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    border-bottom: 1px solid #333;
    min-width: 20%;

    > ${LineupRow}:last-child {
      ${Player} {
        border-bottom: none;
      }

      ${Position} {
        border-bottom: none;
      }
    }
  }
`;

export const InningTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  padding: 5px;
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
`;

export const LineupInnings = styled(OL)`
  display: flex;
  list-style: none outside;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child {
      ${InningTitle} {
        border-right: none;
      }

      ${StyledAtBat} {
        border-right: none;
      }
    }

    ${StyledAtBat}:last-child {
      border-bottom: none;
    }
  }
`;

export const HittingStat = styled.div``;

export const StatTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  padding: 5px;
  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
`;

export const StyledStatCount = styled.div`
  width: 40px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;


  border-bottom: 1px solid #333;
  border-right: 1px solid #333;
`;

export const HittingStatsLayout = styled.div`
  display: flex;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
  border-bottom: 1px solid #333;

  ${HittingStat} {
    &:last-child {
      ${InningTitle} {
        border-right: none;
      }

      ${StyledStatCount} {
        border-right: none;
      }
    }

    ${StyledStatCount}:last-child {
      border-bottom: none;
    } 
  }
`;

