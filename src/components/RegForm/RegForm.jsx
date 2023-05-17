import { Box, Button, Paper, TextField, Grid, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { yupRegisterValidation } from 'components/helpers/yupValidation';
import { useDispatch } from 'react-redux';
import { userSignup } from 'redux/auth/authService';

export const RegForm = () => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, props) => {
    dispatch(
      userSignup({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    props.resetForm();
  };

  return (
    <Grid container sx={{ justifyContent: 'center', maxWidth: '500px' }}>
      <Paper sx={{ boxShadow: '2px 2px 3px #adadad' }}>
        <Box p={4}>
          <Typography variant="h3">Registration</Typography>
          <Formik
            initialValues={initialValue}
            validationSchema={yupRegisterValidation}
            onSubmit={handleSubmit}
          >
            {props => {
              const { name } = props.values;
              return (
                <Form>
                  {/* Name */}
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="dense"
                    value={name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    helperText={<ErrorMessage name="name" />}
                    error={props.errors.name && props.touched.name}
                    required
                    size="small"
                  />
                  {/* Email */}
                  <Field
                    fullWidth
                    size="small"
                    as={TextField}
                    label="Email"
                    type="Email"
                    name="email"
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="email" />}
                    error={props.errors.email && props.touched.email}
                  />
                  {/* Password */}
                  <Field
                    fullWidth
                    size="small"
                    as={TextField}
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="password" />}
                    error={props.errors.password && props.touched.password}
                  />
                  {/* Confirm Password */}
                  <Field
                    fullWidth
                    size="small"
                    as={TextField}
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    error={
                      props.errors.confirmPassword &&
                      props.touched.confirmPassword
                    }
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{
                      textAlign: 'center',
                      display: 'block',
                      mx: 'auto',
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </Grid>
  );
};
