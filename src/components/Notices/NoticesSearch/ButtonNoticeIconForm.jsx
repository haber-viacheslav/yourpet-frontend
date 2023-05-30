import { RxCross1 } from 'react-icons/rx';
import icons from 'images/icons.svg';
import { ButtonNoticeIcon, WrapNotice } from './ButtonNoticeIconForm.styled';
export const ButtonIconNoticeForm = ({ searchQuery, onClick }) => {
  return (
    <WrapNotice>
      <ButtonNoticeIcon type="submit" color="#54ADFF" hovercolor="#1075d3">
        <svg width={24} height={24} fill="#54ADFF">
          <use href={icons + '#icon-search'}></use>
        </svg>
      </ButtonNoticeIcon>

      {searchQuery !== '' && (
        <ButtonNoticeIcon
          type="button"
          color="#FFC107"
          fill={'#757575'}
          hovercolor="#F43F5E"
          onClick={onClick}
          aria-label='button'
        >
          <RxCross1 size={24} hovercolor={'#F43F5E'} />
        </ButtonNoticeIcon>
      )}
    </WrapNotice>
  );
};
