import icons from 'images/icons.svg';
import { SVG, Button } from './Test.styled';
console.log('ICONS', icons);

export const BTNTEST = () => {
  return (
    <>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-check'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-check-round'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-chevron-down'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-chevron-up'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-cross-small'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-cross-small-1'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-edit'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-eye-closed'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-eye-open'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-female'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-filters'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-filters-2'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-heart'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-location'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-logout'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-male'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-menu-hamburger'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-pawprint'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-round'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-search'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-trash-2'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-user'}></use>
        </SVG>
      </Button>
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-arrow-left'}></use>
        </SVG>
      </Button>
      
      <Button type="button">
        <SVG width={50} height={50}>
          <use href={icons + '#icon-camera'}></use>
        </SVG>
      </Button>
    </>
  );
};
