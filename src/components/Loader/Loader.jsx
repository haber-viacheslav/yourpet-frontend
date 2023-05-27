import { createPortal } from 'react-dom';
import { LoaderContainer } from './Loader.styled';
const loader = document.querySelector('#loader');
export const Loader = ({ size = 200, loaderSrc }) => {
  return createPortal(
    <LoaderContainer>
      <img src={loaderSrc} alt="Loading" width={size} />
    </LoaderContainer>,
    loader
  );
};
