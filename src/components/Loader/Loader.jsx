import { ColorRing } from 'react-loader-spinner';
import ClipLoader from 'react-spinners/ClipLoader';

export const LoaderColor = () => (
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    wrapperClass="blocks-wrapper"
    colors={['#9ef48a', '#b1fdd5', '#9ef48a', '#b1fdd5', '#9ef48a']}

  />
);

export const Loader = ({
  size = 40,
  color = '#9ef48a',
  marginTop = '-40px',
  marginBottom = '40px',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      <ClipLoader
        display="block"
        margin="0 auto"
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

