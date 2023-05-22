import { 
  AvatarInputLabel, 
  AvatarInput
} from "./UserAvatarInput.styled";


import { SVG } from "../UserDataItem/UserDataItem.styled";
import icons from 'images/icons.svg';


export const UserAvatarInput = () => {
    return (
    <>
      <AvatarInputLabel>
        <AvatarInput  
          type='file' 
          name='avatar'
          margin-bottom={'15px'}
        />

        <div>
          <SVG width={20} height={20} stroke={'#00C3AD'}>
            <use href={icons + '#icon-check'}></use>
          </SVG>
          <span>Edit photo</span>
        </div>
      </AvatarInputLabel>
              <div>
              <SVG width={20} height={20} stroke={'#00C3AD'}>
                <use href={icons + '#icon-check'}></use>
              </SVG>
              <span>Confirm</span>
            </div>
    </>
    );
  };