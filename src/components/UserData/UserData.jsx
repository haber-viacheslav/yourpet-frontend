import {
  useState,
  // , useEffect
} from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut, updateUser } from 'redux/auth/authService';
import { useNavigate } from 'react-router-dom';

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

const inputs = [
  { type: 'text', name: 'name', placeholder: 'Enter your name' },
  { type: 'text', name: 'email', placeholder: 'example@mail.com' },
  { type: 'date', name: 'birthday', placeholder: '00.00.0000' },
  { type: 'tel', name: 'phone', placeholder: '+380000000000' },
  { type: 'text', name: 'city', placeholder: 'Kyiv' },
];

export const UserData = () => {
  const [isEditingBlocked, setIsEditingBlocked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const user = useSelector(selectUser);
  console.log(user.birthday.slice(0, 10));
  const initialValues = {
    name: user.name || 'And',
    email: user.email || '',
    birthday: user.birthday.slice(0, 10) || '2222-05-01',
    phone: user.phone || '',
    city: user.city || '',
    file: user.avatarURL || '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleOnSubmit = async values => {
    const keys = Object.keys(values);
    // console.log(777, values);
    const formData = new FormData();
    keys.forEach(key => {
      if (values[key] && key !== 'file') {
        formData.append(key, values[key]);
      }
    });

    if (values.file) {
      formData.append('file', values.file, 'User`s photo');
    }
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      dispatch(updateUser(formData));
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
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={profileSchema}
          >
            {({ values, errors, touched, handleSubmit }) => {
              console.log(values);
              // console.log(errors);
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
    </>
  );
};
