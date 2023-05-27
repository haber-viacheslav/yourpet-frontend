import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { updateFetch } from 'api/auth';
import { logOut, userCurrent } from 'redux/auth/authService';

import { Formik } from 'formik';

import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { UserDataItem } from './UserDataItem/UserDataItem';
import { AvatarUploadInput } from './AvatarUploadInput/AvatarUploadInput';
import { LogOut } from '../buttons/buttons';
import { profileSchema } from 'helpers/yupValidation';
import {
  ProfileTitle,
  ProfileInputWrapper,
  ProfileInfo,
} from './UserData.styled';

const inputs = [
  { type: 'text', name: 'name', placeholder: 'Enter your name' },
  { type: 'text', name: 'email', placeholder: 'example@mail.com' },
  { type: 'date', name: 'birthday', placeholder: '01.01.2000' },
  { type: 'tel', name: 'phone', placeholder: '+380000000000' },
  { type: 'text', name: 'city', placeholder: 'Kyiv' },
];

export const UserData = () => {
  const [isEditingBlocked, setIsEditingBlocked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  useEffect(() => {
    if (user.newUser) {
      setIsNewUser(true);
    }
  }, [user]);

  const handleCongratsOut = () => {
    setIsNewUser(false);
  };

  const handleLogOut = () => {
    setIsLogOut(true);
  };

  const handleLogOutCancel = () => {
    setIsLogOut(false);
  };

  const handleLogOutYes = async () => {
    try {
      dispatch(logOut());
      setIsLogOut(false);
      navigate('/');
    } catch (error) {}
  };
  //SUBMIT
  const handleOnSubmit = async values => {
    const keys = Object.keys(values);
    const formData = new FormData();

    keys.forEach(key => {
      if (values[key] && key !== 'file' && key !== 'email') {
        formData.append(key, values[key]);
      }
      if (values.email !== user.email) {
        formData.append('email', values.email);
      }
    });

    if (values.file) {
      formData.append('file', values.file, 'User`s photo');
    }

    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    try {
      const { body } = await updateFetch(formData);
      console.log(body);
      // dispatch(updateUser(formData));
      dispatch(userCurrent());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik
            initialValues={{
              name: user.name || '',
              email: user.email || '',
              birthday: user.birthday
                ? user.birthday.slice(0, 10)
                : '1999-01-01',
              phone: user.phone || '',
              city: user.city || '',
              file: '',
            }}
            onSubmit={handleOnSubmit}
            validationSchema={profileSchema}
          >
            {({ values, errors, touched, handleSubmit }) => {
              return (
                <>
                  <AvatarUploadInput
                    errors={errors}
                    touched={touched}
                    handleSubmit={handleSubmit}
                    isEditingBlocked={isEditingBlocked}
                    setIsEditingBlocked={setIsEditingBlocked}
                    avatar={user.avatarURL}
                  />
                  <ProfileInputWrapper>
                    {inputs.map(input => {
                      const { type, name, placeholder } = input;
                      return (
                        <UserDataItem
                          key={name}
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          isEditingBlocked={isEditingBlocked}
                          setIsEditingBlocked={setIsEditingBlocked}
                          handleSubmit={handleSubmit}
                          errors={errors}
                          touched={touched}
                        />
                      );
                    })}
                  </ProfileInputWrapper>
                </>
              );
            }}
          </Formik>
          <LogOut onClick={handleLogOut} />
        </ProfileInfo>
      </div>
      {isLogOut && (
        <ModalApproveAction
          onActivate={handleLogOutYes}
          onClick={handleLogOutCancel}
          variant={'logOut'}
        />
      )}
      {isNewUser && (
        <ModalApproveAction onClick={handleCongratsOut} variant={'congrats'} />
      )}
    </>
  );
};
