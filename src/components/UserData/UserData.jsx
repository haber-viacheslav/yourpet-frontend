import { 
  ProfileTitle, 
  ProfileContainer, 
  ProfileWrapper, 
  ProfileInputWrapper, 
  ProfileInfo } from './UserData.styled';
import { UserDataItem } from './UserDataItem/UserDataItem';
import { Logout } from './Logout/Logout';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AvatarUploadInput } from './AvatarUploadInput/AvatarUploadInput';


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
    <ProfileContainer>
      <ProfileWrapper>
        
        <ProfileTitle>
          My information:
        </ProfileTitle>

        <ProfileInfo >
          
          {/* <AvatarUploadInput
            // errors={errors}
            // touched={touched}
          />     */}

          <AvatarUploadInput/>

          <Formik
            validationSchema={ProfileSchema}
          >
            <ProfileInputWrapper >

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
        </ProfileInfo>

        <Logout/>
      </ProfileWrapper>
    </ProfileContainer>
  );
};
