import styled from 'styled-components';

export const WrapNotice = styled.div`
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  gap: 12px;
  display: flex;
`;

export const ButtonNoticeIcon = styled.button`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: '#757575';
  svg {
    color: ${({ color }) => color ?? color};
    transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  }
  svg:hover {
    color: ${({ hovercolor }) => hovercolor ?? hovercolor};
  }
  @media screen and (${props => props.theme.media.md}) {
    right: 20px;
  }
  @media screen and (${props => props.theme.media.lg}) {
  }
`;
