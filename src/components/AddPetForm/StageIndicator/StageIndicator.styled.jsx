import styled from 'styled-components';

export const Stage = styled.span`
  font-size: 10px;
  line-height: 14px;
  color: ${props => {
    if (props.stage < props.datastage) {
      return props.theme.colors.grey;
    } else if (props.stage === props.datastage) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.green;
    }
  }};
`;

export const Indicator = styled.span`
  width: 80px;
  height: 8px;
  background: ${props => {
    if (props.stage < props.datastage) {
      return props.theme.colors.blueLight;
    } else if (props.stage === props.datastage) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.green;
    }
  }};
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
