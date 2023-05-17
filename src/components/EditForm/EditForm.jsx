import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { contactYupSchema } from 'components/helpers/yupValidation';
import { useDispatch } from 'react-redux';
import { changeContact, fetchContacts } from 'redux/contacts/contactService';
import { PropTypes } from 'prop-types';

export const EditForm = ({ data, onClose }) => {
  const { name, number, id } = data;
  const initialValue = {
    name: name,
    number: number,
  };

  const dispatch = useDispatch();
  const handleChangeContact = (data, props) => {
    dispatch(changeContact({ id, data }));
    onClose();
    props.resetForm();
    dispatch(fetchContacts());
  };

  return (
    <Container>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Paper sx={{ boxShadow: '2px 2px 3px #adadad' }}>
          <Box p={4} sx={{ maxWidth: '450px' }}>
            <Typography variant="h5">Edit contact</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={contactYupSchema}
              onSubmit={handleChangeContact}
            >
              {props => {
                return (
                  <Form>
                    {/* Name */}
                    <Field
                      as={TextField}
                      label="name"
                      type="text"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.email && props.touched.email}
                      size="small"
                    />
                    {/* Phone Number */}
                    <Field
                      as={TextField}
                      label="number"
                      name="number"
                      type="tel"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="number" />}
                      error={props.errors.password && props.touched.password}
                      size="small"
                    />

                    <Button
                      sx={{
                        textAlign: 'center',
                        display: 'block',
                        mx: 'auto',
                      }}
                      variant="contained"
                      type="submit"
                      color="primary"
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
    </Container>
  );
};

EditForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
