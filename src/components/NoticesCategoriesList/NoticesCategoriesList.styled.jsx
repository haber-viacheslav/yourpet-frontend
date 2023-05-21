import styled from 'styled-components';

export const ConteinerCard = styled.div`
  position: relative;
  width: 280px;
  border-block: solid 1px #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;
`;
export const ConteinerInfo = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  top: 248px;
  right: 8px;
`;
export const Text = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  margin-bottom: 20px;
`;
