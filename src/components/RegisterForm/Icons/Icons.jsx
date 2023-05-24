import { SVG } from './Icons.styled';
import icons from 'images/icons.svg';

export const iconClose = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-closed'}></use>
    </SVG>
  );
};

export const iconOpen = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-eye-open'}></use>
    </SVG>
  );
};

export const IconCrossSmall = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-cross-small'}></use>
    </SVG>
  );
};

export const IconCheck = () => {
  return (
    <SVG width={24} height={24}>
      <use href={icons + '#icon-check'} color="#00C3AD"></use>
    </SVG>
  );
};