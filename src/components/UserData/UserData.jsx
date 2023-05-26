import {
  useState,
  // useEffect
} from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import {
  logOut,
  updateUser,
  // userCurrent
} from 'redux/auth/authService';
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
  { type: 'date', name: 'birthday', placeholder: '01.01.2000' },
  { type: 'tel', name: 'phone', placeholder: '+380000000000' },
  { type: 'text', name: 'city', placeholder: 'Kyiv' },
];

export const UserData = () => {
  const [isEditingBlocked, setIsEditingBlocked] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(userCurrent);
  // }, [dispatch]);

  const avatar = user.avatarURL;
  const initialValues = {
    name: user.name || 'User',
    email: user.email || 'example@mail.com',
    birthday: user.birthday ? user.birthday.slice(0, 10) : '1900-01-01',
    phone: user.phone || '',
    city: user.city || '',
    file: '',
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

  const handleOnSubmit = async values => {
    const keys = Object.keys(values);
    const formData = new FormData();

    keys.forEach(key => {
      if (values[key] && key !== 'file') {
        formData.append(key, values[key]);
      }
    });

    if (values.file) {
      formData.append('file', values.file, 'User`s photo');
    }
    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1]);
    // }

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
              // console.log(values);
              // console.log(errors);
              return (
                <>
                  <AvatarUploadInput
                    errors={errors}
                    touched={touched}
                    handleSubmit={handleSubmit}
                    isEditingBlocked={isEditingBlocked}
                    setIsEditingBlocked={setIsEditingBlocked}
                    avatar={avatar}
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
