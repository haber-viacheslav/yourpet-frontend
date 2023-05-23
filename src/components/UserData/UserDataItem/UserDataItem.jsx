import { 
  ProfileInputLabel, 
  ProfileInput,
  SingleInputWrapper} from './UserDataItem.styled';
import { CheckIcon, EditIcon } from '../Icons/Icons';


export const UserDataItem = ({type, name, label, placeholder, value}) => {
    return (
      <ProfileInputLabel>
        {label}
        <SingleInputWrapper>
          <ProfileInput 
            type={type} 
            name={name} 
            placeholder={placeholder} 
          />
          <CheckIcon/>
          <EditIcon/>

        </SingleInputWrapper>
      </ProfileInputLabel>
    );
  };