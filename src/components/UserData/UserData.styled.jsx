import styled from 'styled-components';

export const ProfileTitle = styled.h2`
  font-family: Manrope;
  font-style: 500;
  font-size: 20px;
  line-height: 27.32px;
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

export const ProfileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
  margin-top: 22px;

`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: stretch;
  justify-content: stretch;
  padding: 20px 8px 25px;
  margin: 0; 
  border-radius: 20px;
  outline: ${props => props.outline || 'none'};
`;