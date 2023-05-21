import { 
<<<<<<< Updated upstream
  ProfileInputLabel, 
  ProfileInput,
  SingleInputWrapper,
  SVG 
=======
  ProfileInputLabel,
  ProfileInput,
  SingleInputWrapper, 
  SVG
>>>>>>> Stashed changes
} from "./UserDataItem.styled";
import icons from 'images/icons.svg';


export const UserDataItem = ({type, name, label, placeholder, value}) => {
    return (
      <ProfileInputLabel>
        {label}
        <SingleInputWrapper>
          <ProfileInput 
            type={type} 
            name={name} 
            placeholder={placeholder} 
<<<<<<< Updated upstream
          />
          <SVG width={20} height={20}  stroke={'#00C3AD'}>
            <use href={icons + '#icon-check'}></use>
          </SVG>

          <SVG width={20} height={20} fill={'#54ADFF'} stroke={'#54ADFF'}>
            <use href={icons + '#icon-edit'}></use>
          </SVG>
        </SingleInputWrapper>
=======
            value={value}
            readonly={true}
          />
          <SVG width={20} height={20} stroke={'#00C3AD'}>
            <use href={icons + '#icon-check'}></use>
          </SVG>
          <SVG width={20} height={20} stroke={'#54ADFF'} fill={'#54ADFF'}>
            <use href={icons + '#icon-edit'}></use>
          </SVG>
        </ SingleInputWrapper>
>>>>>>> Stashed changes
      </ProfileInputLabel>
    );
  };