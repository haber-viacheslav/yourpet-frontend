import React from 'react';
import Dog from '../../images/lazy-dog.gif';
import { Wrap, Title, Img } from './NotResults.styled';

export const NotResults = ({ title }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Img src={Dog} alt="lazy-dog" loading="lazy" />
    </Wrap>
  );
};
