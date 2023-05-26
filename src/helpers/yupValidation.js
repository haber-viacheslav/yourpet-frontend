import * as yup from 'yup';
import 'yup-phone';

export const contactYupSchema = yup.object().shape({
  name: yup.string().trim().strict().required(),
  number: yup.string().phone('UA').required(),
});

export const yupRegisterValidation = yup.object().shape({
  name: yup.string().trim().strict().required('Required !'),
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const yupLoginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
  password: yup
    .string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});

export const addPetFormSchema = yup.object().shape({
  title: yup.string().when('category', {
    is: value => value !== 'your pet',
    then: yup
      .string()
      .min(2, 'Minimum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Enter a title'),
    otherwise: yup.string(),
  }),
  date: yup.string().required('Choose a date of birth'),
  breed: yup
    .string('Must be a string')
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s breed '),
  name: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(16, 'Maximum 16 characters')
    .required('Enter a pet`s name'),
  location: yup.string().when('category', {
    is: value => value !== 'your pet',
    then: yup
      .string()
      .matches(/^[A-Z][a-zA-Z]*$/, 'Starts with capitalize character')
      .required('Enter your location'),
    otherwise: yup.string(),
  }),
  price: yup.number().when('category', {
    is: value => value === 'sell',
    then: yup
      .number()
      .moreThan(0, 'Price must be greater than 0')
      .required('Enter a price'),
    otherwise: yup.number(),
  }),
  comments: yup
    .string()
    .min(8, 'Minimum 8 characters')
    .max(120, 'Maximum 120 characters'),
  sex: yup.string().when('category', {
    is: value =>
      value === 'sell' || value === 'lost/found' || value === 'in good hands',
    then: yup.string().oneOf(['Female', 'Male']).required('Choose a pet`s sex'),
    otherwise: yup.string(),
  }),
  category: yup
    .string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required(),
  file: yup
    .mixed()
    .required('Upload pet`s photo')

    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .test(
      'fileSize',
      'File size is too large',
      value => value?.size <= 3145728
    ),
});

export const profileSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'min 2 characters')
    .max(20, 'max 20 characters')
    .required('Set your name'),
  email: yup.string().email('Enter a valid email').required('Set your email'),
  birthday: yup.string().required('Choose your birthday'),
  city: yup
    .string()
    .matches(/^[A-Z][a-zA-Z]*$/, 'Starts with capitalize character'),
  phone: yup.string().matches(/^\+\d{12}$/, 'UA format number'),
  file: yup
    .mixed()
    .required('Upload photo')

    .test(
      'fileType',
      'Only image files are allowed',
      value =>
        !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
    )
    .test(
      'fileSize',
      'File size is too large',
      value => value?.size <= 3145728
    ),
});
