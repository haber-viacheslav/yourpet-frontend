import styled from "styled-components";

export const Box = styled.div`
  width: 100%;

  @media screen and (${props=>props.theme.media.md}){
    width: 113px;
    height: 44px;
  }  
`;

export const UserName = styled.span`
  font-weight: ${props=>props.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.36;
  color: ${props=>props.theme.colors.orange};
`;