import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin: 0;
`;

export const SectionSubtitle = styled.span`
  font-weight: bold;
  display: block;
`;

export const Team = styled.div`
  font-weight: bold;
`;

export const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const OL = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const HorizontalUL = styled(UL)`
  display: flex;
`;

interface IntTeamButton {
  selected: boolean,
}

export const TeamButton = styled.button`
  border: none;
  text-transform: uppercase;
  color: ${(p: IntTeamButton) => p.selected ? '#333333' : '#f0f0f0'};
  background-color: ${(p: IntTeamButton) => p.selected ? '#ffffff' : '#cccccc'};

  &:focus {
    outline: none;
  }
`;

export const TeamTabs = styled(HorizontalUL)`
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > li {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    ${TeamButton} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;

      padding: 15px 30px;
      font-size: 28px;
      cursor: pointer;
    }
  }
`;

