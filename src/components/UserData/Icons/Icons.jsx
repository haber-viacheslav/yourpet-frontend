import { SVG } from './Icons.styled';
import icons from 'images/icons.svg';
import { theme } from 'theme/theme';

export const CheckIcon = props => {
  return (
    <SVG width={20} height={20} stroke={theme.colors.green} {...props}>
      <use href={icons + '#icon-check'}></use>
    </SVG>
  );
};

export const UserPhotoIcon = props => {
  return (
    <SVG width={100} height={95} stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-user-photo'}></use>
    </SVG>
  );
};

export const EditPhotoIcon = props => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-camera'}></use>
    </SVG>
  );
};

export const CrossIcon = props => {
  return (
    <SVG width={24} height={24} stroke={theme.colors.white} {...props}>
      <use href={icons + '#icon-cross-small'}></use>
    </SVG>
  );
};
