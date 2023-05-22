import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  gap: ${props => props.flexGap || '0px'};
  outline: ${props => props.outLine || 'none'};
`;
