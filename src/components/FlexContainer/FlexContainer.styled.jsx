import styled from 'styled-components';

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: 0;
  outline: ${props => props.outline || 'none'};
`;
