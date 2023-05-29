import { createPortal } from 'react-dom';
import { LoaderContainer, LoaderImg } from './Loader.styled';
const loader = document.querySelector('#loader');
export const Loader = ({ size = 250, loaderSrc }) => {
  return createPortal(
    <LoaderContainer>
      <LoaderImg src={loaderSrc} alt="Loading" width={size} />
    </LoaderContainer>,
    loader
  );
};
