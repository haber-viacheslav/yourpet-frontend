import styled from 'styled-components';

export const ProfileTitle = styled.h2`
  font-family: Manrope;
  font-style: Medium;
  font-size: 20px;
  line-height: calc(27/20);
  letter-spacing: 4%;
  color: rgba(0, 0, 0, 1);
  align: left;
  margin-bottom: 18px;
`;

export const ProfileContainer = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'column'};
align-item: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};

margin: 0; 
padding: 20px 8px 25px;
border-radius: 20px;

box-shadow: 3px 8px 14px 0px #88C6FD30;
`;
