import icons from '../../../images/icons.svg';

export const SexIcon = ({ iconName }) => {
  return (
    <svg width={10} height={18}>
      <use href={icons + `${iconName}`}></use>
    </svg>
  );
};
