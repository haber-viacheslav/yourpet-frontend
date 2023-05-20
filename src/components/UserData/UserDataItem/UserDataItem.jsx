import { 
  ProfileInputLabel, 
  ProfileInput 
} from "./UserDataItem.styled";

export const UserDataItem = ({type, name, label, placeholder}) => {
    return (
      <ProfileInputLabel>
        {label}
        <ProfileInput 
          type={type} 
          name={name} 
          placeholder={placeholder} 
        />
      </ProfileInputLabel>
    );
  };