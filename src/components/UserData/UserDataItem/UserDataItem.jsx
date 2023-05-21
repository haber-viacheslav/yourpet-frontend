import { 
  ProfileInputLabel, 
  ProfileInput,
  SingleInputWrapper,
  SVG 
} from "./UserDataItem.styled";
import icons from 'images/icons.svg';

export const UserDataItem = ({type, name, label, placeholder}) => {
    return (
      <ProfileInputLabel>
        {label}
        <SingleInputWrapper>
          <ProfileInput 
            type={type} 
            name={name} 
            placeholder={placeholder} 
          />
          <SVG width={20} height={20}  stroke={'#00C3AD'}>
            <use href={icons + '#icon-check'}></use>
          </SVG>

          <SVG width={20} height={20} fill={'#54ADFF'} stroke={'#54ADFF'}>
            <use href={icons + '#icon-edit'}></use>
          </SVG>
        </SingleInputWrapper>
      </ProfileInputLabel>
    );
  };