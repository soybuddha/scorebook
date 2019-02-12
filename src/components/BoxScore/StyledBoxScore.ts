import styled from 'styled-components';

import { Team } from '../../styled-components/Global';


export const BoxScoreWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 0;

  box-shadow: 0 15px 30px 10px rgba(0,0,0,.15);
`;

export const BoxScoreLayout = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const TeamWrapper = styled.div`
  width: 10%;
  border-top: 1px solid #333;
  border-left: 1px solid #333;
  border-bottom: 1px solid #333;
`;

export const TeamSpacer = styled.div`
  padding: 5px 10px;
  border-bottom: 1px solid #333;
`;

export const BoxScoreTeam = styled(Team)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;

export const BoxScoreInningLayout = styled.ol`
  display: flex;
  justify-content: space-around;
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none outside;
  border-right: 1px solid #333;
  border-top: 1px solid #333;

  > li {
    border-bottom: 1px solid #333;
    border-left: 1px solid #333;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const BoxScoreHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 5px 10px;
  border-bottom: 1px solid #333;
`;

export const InningLayout = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none outside;

  > li {
    border-bottom: 1px solid #333;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      border-bottom: none;
    }

    span {
      display: block;
    }
  }
`;

export const GameTotals = styled.div`
  display: flex;
  width: 20%;
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
  border-right: 1px solid #333;
`;

export const TotalLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #333;

  &:last-child {
    border-right: none;
  }
`;

export const Total = styled.div`
  border-bottom: 1px solid #333;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-bottom: none;
  }
`;