import { Rings } from 'react-loader-spinner';
import { Portal, Backdrop } from '@mui/material';
import { useState } from 'react';
export const Loader = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Portal>
      <Backdrop open={open} onClick={handleClose}>
        <Rings
          height="200"
          width="200"
          color="#0026fd"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </Backdrop>
    </Portal>
  );
};
