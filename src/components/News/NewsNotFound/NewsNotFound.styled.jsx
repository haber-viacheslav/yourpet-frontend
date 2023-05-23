import styled from 'styled-components';
export const Section = styled.section``;

export const Wrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 1.37;
  @media (max-width: 480px) {
    min-width: 280px;
    font-size: 6vw;
  }
  @media (${props => props.theme.media.md}) {
    // width: 684px;
    font-size: 32px;
  }
`;