import { 
  ProfileInputLabel, 
  ProfileInput,
  SingleInputWrapper} from './UserDataItem.styled';
// import { CheckIcon, EditIcon } from '../Icons/Icons';
import { InputEditBtn, InputCheckBtn } from '../buttons/buttons';


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
          <InputCheckBtn/>
          <InputEditBtn/>

        </SingleInputWrapper>
      </ProfileInputLabel>
    );
  };