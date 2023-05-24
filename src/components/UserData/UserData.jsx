import { useState, useEffect } from 'react';
import { Formik } from 'formik';

import { UserDataItem } from './UserDataItem/UserDataItem';
import { AvatarUploadInput } from './AvatarUploadInput/AvatarUploadInput';
import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
import { LogOut } from '../buttons/buttons';
import { profileSchema } from 'helpers/yupValidation';
import {
  ProfileTitle,
  ProfileInputWrapper,
  ProfileInfo,
} from './UserData.styled';

const inputes = [
  { type: 'text', name: 'name', placeholder: 'Enter your name' },
  { type: 'text', name: 'email', placeholder: 'example@mail.com' },
  { type: 'date', name: 'birthday', placeholder: '00.00.0000' },
  { type: 'tel', name: 'phone', placeholder: '+380000000000' },
  { type: 'text', name: 'city', placeholder: 'Kyiv' },
];

const InitialFormData = {
  name: 'Andrii',
  email: 'a.hokhman@gmail.com',
  birthday: '1983-06-24',
  phone: '',
  city: '',
  file: '',
};

export const UserData = () => {
  const [isEditingBlocked, setIsEditingBlocked] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [initialValues, setinitialValues] = useState(InitialFormData);

  useEffect(() => {
    setinitialValues(InitialFormData);
  }, []);

  const handleLogOut = () => {
    setLogOut(true);
  };

  const handleLogOutCancel = () => {
    setLogOut(false);
  };

  const handleLogOutYes = () => {
    // Логаут і перенапралення юзера
    alert('Закрив і вийшов!');
    setLogOut(false);
  };

  const handleOnSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('birthday', values.birthday);
    formData.append('phone', values.phone);
    formData.append('city', values.city);
    if (values.file) {
      formData.append('file', values.file, 'User`s photo');
    }

    try {
      //  await createNotice(formData);
    } catch (error) {
      console.log(error);
    }
    alert('SUBMIT!!!');
  };

  return (
    <>
      <div>
        <ProfileTitle>My information:</ProfileTitle>
        <ProfileInfo>
          <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={profileSchema}
          >
            {({ errors, touched, handleSubmit }) => {
              return (
                <>
                  <AvatarUploadInput
                    errors={errors}
                    touched={touched}
                    handleSubmit={handleSubmit}
                    isEditingBlocked={isEditingBlocked}
                    setIsEditingBlocked={setIsEditingBlocked}
                  />
                  <ProfileInputWrapper>
                    {inputes.map(inpute => {
                      const { type, name, placeholder } = inpute;
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
      {logOut && (
        <ModalApproveAction
          onActivate={handleLogOutYes}
          onClick={handleLogOutCancel}
          variant={'logOut'}
        />
      )}
    </>
  );
};
