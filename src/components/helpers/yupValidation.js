import { string, object, ref } from 'yup';
import 'yup-phone';

export const contactYupSchema = object().shape({
  name: string().trim().strict().required(),
  number: string().phone('UA').required(),
});

export const yupRegisterValidation = object().shape({
  name: string().trim().strict().required('Required !'),
  email: string().email('Enter a Valid Email').required('Email is Required'),
  password: string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
  confirmPassword: string()
    .oneOf([ref('password')], 'Password does not matched')
    .required('Confirm Password is Required'),
});

export const yupLoginValidation = object().shape({
  email: string().email('Enter a Valid Email').required('Email is Required'),
  password: string()
    .required('Enter Your Password')
    .min(8, 'Password Should be minimum 8 character')
    .max(50, 'Too long'),
});
