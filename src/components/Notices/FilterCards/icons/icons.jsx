import icons from 'images/icons.svg';
import {SVG} from './icons.styled'

export const IconClose = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-chevron-down'}></use>
    </SVG>
  );
};

export const IconOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-chevron-up'}></use>
    </SVG>
  );
};

export const IconCheck = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-round'}></use>
    </SVG>
  );
};

export const IconCheckRound = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-check-round'}></use>
    </SVG>
  );
};