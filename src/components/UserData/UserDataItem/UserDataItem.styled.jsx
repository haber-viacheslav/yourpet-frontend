import styled from 'styled-components';
import { Field } from 'formik';

export const ProfileInputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.2px;
  letter-space: 4%;
`;

export const ProfileInput = styled(Field)`
<<<<<<< Updated upstream
  width: 120px;
  margin-top: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;

=======
  width: 130px;
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.39px;
>>>>>>> Stashed changes
  border: none;
  outline: none;

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 16.39px;
  }
`;

<<<<<<< Updated upstream
export const SingleInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4px 12px;
  width: 190px;
  height: 28px;
  border: 1px solid #54adff;
  border-radius: 20px;
`;

export const ProfileInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  align-self: flex-start;
  gap: 12px;
=======
export const  SingleInputWrapper = styled.div`
display: flex;
justify-content: space-between;
align-item: center;
width: 190px;
padding: 0px 12px;
margin-top: 0;
border: 1px solid #54adff;
border-radius: 20px;
>>>>>>> Stashed changes
`;

export const SVG = styled.svg`
  fill: ${props => props.fill || 'transparent'};
  stroke: ${props => props.stroke || 'transparent'};
<<<<<<< Updated upstream
=======
  width: 20px;
  // margin-right: 12px;
>>>>>>> Stashed changes
`;