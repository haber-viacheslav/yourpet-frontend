import { RxCross1 } from 'react-icons/rx';
import { ReactComponent  as Search } from 'images/icons.svg';
import { Wrap, ButtonIcon } from './ButtonIconForm.styled';
import icons from 'images/icons.svg';
export const ButtonIconForm = ({ searchQuery, onClick }) => {
  return (
    <Wrap>
      <ButtonIcon type="submit" color="#54ADFF" hovercolor="#1075d3">
        <Search width={24} height={24} >
        <use href={icons + '#icon-search'}></use>
        </Search>
      </ButtonIcon>
      {searchQuery !== '' && (
        <ButtonIcon
          type="button"
          color="#757575"
          fill={'#757575'}
          hovercolor="#F43F5E"
          onClick={onClick}
        >
          <RxCross1 size={24} hovercolor={'#F43F5E'} />
        </ButtonIcon>
      )}
    </Wrap>
  );
};


