import styled from 'styled-components';

export const ReusableTitle = styled.h2`
  margin-bottom: 24px;

  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.375;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.dark};

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;
