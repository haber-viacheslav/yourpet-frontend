import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateFetch } from 'api/auth';
import { userCurrent } from 'redux/auth/authService';

import { Formik } from 'formik';

import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { UserDataItem } from './UserDataItem/UserDataItem';
import { AvatarUploadInput } from './AvatarUploadInput/AvatarUploadInput';
import { profileSchema, photoSchema } from 'helpers/yupValidation';
import {
  ProfileTitle,
  ProfileInputWrapper,
  ProfileInfo,
} from './UserData.styled';
import { notify } from 'helpers/notification';

const inputs = [
  { type: 'text', name: 'name', placeholder: 'Enter your name' },
  { type: 'text', name: 'email', placeholder: 'example@mail.com' },
  { type: 'date', name: 'birthday', placeholder: '01.01.2000' },
  { type: 'tel', name: 'phone', placeholder: '+380000000000' },
  { type: 'text', name: 'city', placeholder: 'Kyiv' },
];

const initialEditStatus = {
  name: false,
  email: false,
  birthday: false,
  phone: false,
  city: false,
  photo: false,
  refresh: true,
};

export const UserData = () => {
  const [isEditingBlocked, setIsEditingBlocked] = useState(initialEditStatus);
  const [isNewUser, setIsNewUser] = useState(false);
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.newUser) {
      setIsNewUser(true);
    }
  }, [user]);

  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);

  const handleCongratsOut = () => {
    setIsNewUser(false);
  };

  const handleEditBlock = name => {
    const newEditStatus = { ...initialEditStatus, [name]: true };
    setIsEditingBlocked(newEditStatus);
  };

  //SUBMIT
  const handleOnEditPhotoSubmit = async values => {
    const formData = new FormData();
    if (values.file) {
      formData.append('file', values.file, 'User`s photo');
    }
    try {
      const result = await updateFetch(formData);

      if (result.response.code === 200) {
        notify('success', 'Photo successfully updated');
        dispatch(userCurrent());
      }
    } catch (error) {
      notify('error', 'Unsuccessful');
    }
  };

  const handleOnEditProfileSubmit = async values => {
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

    try {
      const result = await updateFetch(formData);

      if (result.response.code === 200) {
        notify('success', 'Profile successfully updated');
        dispatch(userCurrent());
      }
    } catch (error) {
      notify('error', 'Unsuccessful');
    }
  };
  const initialName = user.email.slice(0, user.email.lastIndexOf('@'));
  return (
    <>
      <div>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik
            initialValues={{
              file: '',
            }}
            onSubmit={handleOnEditPhotoSubmit}
            validationSchema={photoSchema}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
                <AvatarUploadInput
                  errors={errors}
                  touched={touched}
                  isEditingBlocked={isEditingBlocked}
                  avatar={user.avatarURL}
                  onEditClick={handleEditBlock}
                  onFormSubmit={handleSubmit}
                />
              );
            }}
          </Formik>
          <Formik
            initialValues={{
              name: user.name || initialName,
              email: user.email || '',
              birthday: user.birthday
                ? user.birthday.slice(0, 10)
                : '1999-01-01',
              phone: user.phone || '',
              city: user.city || '',
            }}
            onSubmit={handleOnEditProfileSubmit}
            validationSchema={profileSchema}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
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
                        errors={errors}
                        touched={touched}
                        onEditClick={handleEditBlock}
                        onFormSubmit={handleSubmit}
                      />
                    );
                  })}
                </ProfileInputWrapper>
              );
            }}
          </Formik>
        </ProfileInfo>
      </div>
      {isNewUser && (
        <ModalApproveAction onClick={handleCongratsOut} variant={'congrats'} />
      )}
    </>
  );
};
