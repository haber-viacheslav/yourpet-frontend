import styled from 'styled-components';

export const SVG = styled.svg`
  fill: ${props => props.fill || 'none'};
  stroke: ${props => props.stroke || 'none'};
`;