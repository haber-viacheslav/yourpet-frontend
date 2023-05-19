import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '@mui/material/Button';
// import { register } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import { Form, Input } from './RegisterForm.styled';
// import TextField from '@mui/material/TextField';

// const validationSchema = yup.object({
//   name: yup.string('Enter your Name').required('Name is required'),
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

export const RegisterForm = () => {
  // const dispatch = useDispatch();

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: values => {
  //     dispatch(register(values));
  //   },
  // });

  return (
    <>
      <Form >

        {/* <Button>
          Register
        </Button> */}
      </Form>
    </>
  );
};

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import { Box, Form, Input, Label, Button } from './RegisterForm.styled';

// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const email = form.elements.email.value;
//     const password = form.elements.password.value;

//     if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
//       return alert('Fill in all fields please');
//     }
//     dispatch(
//       register({
//         name: name,
//         email: email,
//         password: password,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <Box>
//       <Form onSubmit={handleSubmit} autoComplete="off">
//         <Label>
//           Username
//           <Input type="text" name="name" />
//         </Label>
//         <Label>
//           Email
//           <Input type="email" name="email" />
//         </Label>
//         <Label>
//           Password
//           <Input type="password" name="password" />
//         </Label>
//         <Button type="submit">Register</Button>
//       </Form>
//     </Box>
//   );
// };
