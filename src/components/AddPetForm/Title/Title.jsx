import { AddPetTitle } from './Title.styled';

export const Title = ({ picked, stage }) => {
  let title = 'Add pet';
  if (stage !== 1) {
    switch (picked) {
      case 'sell':
        title = 'Add pet for sale';
        break;
      case 'lost/found':
        title = 'Add lost pet';
        break;
      default:
        title = 'Add pet';
    }
  }
  return <AddPetTitle>{title}</AddPetTitle>;
};
