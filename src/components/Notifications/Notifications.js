import { toast } from 'react-hot-toast';

export const Success = () =>
  toast.success('Success', {
    duration: 1000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

export const Loading = () =>
  toast.loading('Loading...', {
    duration: 1000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });

export const Error = () =>
  toast.error('This is an error!', {
    duration: 1000,
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
