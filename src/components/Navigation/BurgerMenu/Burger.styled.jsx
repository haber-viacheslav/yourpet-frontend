import styled from 'styled-components';

const Hamburger = styled.button
  `width: auto;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

@media screen and (min-width: 767px) {
  .burger {
    margin-left: 24px;
  }
}
`;
export { Hamburger };
