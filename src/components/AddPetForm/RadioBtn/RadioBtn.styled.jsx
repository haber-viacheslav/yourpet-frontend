import styled from 'styled-components';
import { Field } from 'formik';

export const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 19px;
  padding: ${props => {
    if (props.name === 'category') {
      return '8px 16px';
    }
  }};

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;

  color: ${props => {
    if (props.name === 'category') {
      return props.selected ? '#FEF9F9' : '#54adff';
    } else {
      return props.selected ? '#00C3AD' : '#888888';
    }
  }};
  background: ${props => {
    if (props.name === 'category') {
      return props.selected ? '#54adff' : '#cce4fb';
    }
  }};
  border-radius: 40px;
  cursor: pointer;
`;

export const RadioInput = styled(Field)`
  display: none;
`;
