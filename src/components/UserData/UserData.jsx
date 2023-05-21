<<<<<<< Updated upstream
import { ProfileTitle, ProfileContainer } from './UserData.styled';
=======
import { ProfileWrapper, ProfileTitle, ProfileInputWrapper } from './UserData.styled';
>>>>>>> Stashed changes
import { UserDataItem } from './UserDataItem/UserDataItem';
import { UserAvatarInput } from './UserAvatarInput/UserAvatarInput';
import { FlexContainer } from 'components/FlexContainer/FlexContainer';
import { Logout } from './Logout/Logout';
import { Formik } from 'formik';
import * as yup from 'yup';



const ProfileSchema = yup.object().shape({
  name: yup.string().min(2).max(20).required(),
  email: yup.string(), 
  phone: yup.string().matches(/^\+\d{12}$/),
  birthday: yup.string().matches(/^\d{2}\.\d{2}\.\d{4}$/),
  city: yup.string().matches(/^[A-Z][a-zA-Z]*$/),
  file:'',
});

export const UserData = () => {
  return (
<<<<<<< Updated upstream
    <ProfileContainer outlineColor={'red'}>
=======
    <ProfileWrapper 
      border-radius={'20px'} 
      outline={'1px solid red'}
    >
>>>>>>> Stashed changes
      <ProfileTitle>
        My information:
      </ProfileTitle>

      <FlexContainer>
<<<<<<< Updated upstream
        <div>
          <img 
            src="" 
            alt="user avatar" 
            width={'182px'} 
            height={'182px'} 
          />
        </div>
=======
>>>>>>> Stashed changes

        <Formik
          validationSchema={ProfileSchema}
        >
          <ProfileInputWrapper >
            <UserAvatarInput/>

            <UserDataItem 
              type='text'
              name='name'
              label='Name:'
              placeholder='Enter your name'
            />
            <UserDataItem 
              type='text'
              name='email'
              label='Email:'
              placeholder='example@mail.com'
            />
            <UserDataItem 
              type='text'
              name='birthday'
              label='Birthday:'
              placeholder='00.00.0000'
            />
            <UserDataItem 
              type='tel'
              name='phone'
              label='Phone:'
              placeholder='+380000000000'
            />
            <UserDataItem 
              type='text'
              name='city'
              label='City:'
              placeholder='Kyiv'
            />
          </ProfileInputWrapper>
        </Formik>
      </FlexContainer>

<<<<<<< Updated upstream
      <Logout/>

    </ProfileContainer>
=======
    </ProfileWrapper>
>>>>>>> Stashed changes
  );
};
