import styled from 'styled-components';
// import second from '../../theme/theme'

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  width: 280px;
  height: 481px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background-color: #ffffff;
  padding: 40px 12px;

  @media screen and (min-width: 768px) {
    width: 608px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;
`;

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 12px 16px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border: 1px solid #54adff;
  border-radius: 40px;
  cursor: pointer;
`;
