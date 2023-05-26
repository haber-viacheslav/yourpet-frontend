import Cat from '../../images/walking-cat.gif';
import { createPortal } from 'react-dom';
import { LoaderContainer } from './Loader.styled';
const loader = document.querySelector('#loader');
export const Loader = ({ size = 200 }) => {
  return createPortal(
    <LoaderContainer>
      <img src={Cat} alt="Loading" width={size} />
    </LoaderContainer>,
    loader
  );
};
