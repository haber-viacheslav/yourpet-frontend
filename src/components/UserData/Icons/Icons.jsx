import { SVG } from "./Icons.styled";
import icons from 'images/icons.svg';
import { theme } from "theme/theme";

export const LogoutIcon = (props) => {
  return (
    <SVG width={24} height={24} 
      stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-logout'}></use>
    </SVG>
  )
};

export const CheckIcon = (props) => {
  return (
    <SVG width={20} height={20} 
      stroke={theme.colors.green} {...props}>
      <use href={icons + '#icon-check'}></use>
    </SVG>
  )
};

export const EditIcon = (props) => {
  return (
    <SVG width={20} height={20} 
      fill={theme.colors.blue} 
      stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-edit'}></use>
    </SVG>)
};

export const PlusIcon = (props) => {
  return (
    <SVG width={35} height={35} 
      fill={theme.colors.blue} 
      stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-plus'}></use>
    </SVG>)
};

export const EditPhotoIcon = (props) => {
  return (
    <SVG width={24} height={24} 
      stroke={theme.colors.blue} {...props}>
      <use href={icons + '#icon-camera'}></use>
    </SVG>)
};