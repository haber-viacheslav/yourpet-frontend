import {
  Box,
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { checkContact, checkPhone } from 'components/helpers/formCheckers';
import { contactYupSchema } from 'components/helpers/yupValidation';
import { toast } from 'react-hot-toast';

// Initial values for formik
const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, { resetForm }) => {
    if (checkContact(contacts, values)) {
      toast.error(`Error! 😲 ${values.name} is already in contacts`, {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    if (checkPhone(contacts, values)) {
      toast.error(`Error! 😲 ${values.number} is already in contacts`, {
        duration: 2000,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    dispatch(addContact(values));
    resetForm();
    onClose();
  };

  return (
    <Container>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Paper sx={{ boxShadow: '2px 2px 3px #adadad' }}>
          <Box p={4} sx={{ maxWidth: '450px' }}>
            <Typography variant="h5">Add contact</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={contactYupSchema}
              onSubmit={handleSubmit}
            >
              {props => {
                return (
                  <Form>
                    {/* Name */}
                    <Field
                      size="small"
                      as={TextField}
                      label="name"
                      type="text"
                      name="name"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="name" />}
                      error={props.errors.email && props.touched.email}
                      required
                    />
                    {/* Phone Number */}
                    <Field
                      size="small"
                      as={TextField}
                      label="number"
                      name="number"
                      type="tel"
                      fullWidth
                      variant="outlined"
                      margin="dense"
                      helperText={<ErrorMessage name="number" />}
                      error={props.errors.password && props.touched.password}
                      required
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

export default ContactForm;

// import {
//   FormWrap,
//   FormErrorMessage,
//   FormInput,
//   FormLabel,
//   FormInputWrp,
//   FormButton,
// } from './ContactForm.styled';

// <Formik
//   initialValues={initialValues}
//   validationSchema={contactYupSchema}
//   onSubmit={handleSubmit}
// >
//   <FormWrap autoComplete="off">
//     <FormInputWrp htmlFor="name">
//       <FormLabel>Name</FormLabel>
//       <FormInput type="text" name="name" />
//       <FormErrorMessage name="name" component="div" />
//     </FormInputWrp>

//     <FormInputWrp htmlFor="number">
//       <FormLabel>Phone</FormLabel>
//       <FormInput type="tel" name="number" />
//       <FormErrorMessage name="number" component="div" />
//     </FormInputWrp>

//     <FormButton type="submit">Add contact</FormButton>
//   </FormWrap>
// </Formik>;
