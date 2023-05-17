import PropTypes from 'prop-types';
import { getRandomColor } from 'components/helpers/getRandomColor';
import { deleteContact } from 'redux/contacts/contactService';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Modal } from '../MainModal/Modal';
import { EditForm } from 'components/EditForm/EditForm';
import { IconButton, Tooltip, Box, Typography } from '@mui/material';
import Portal from '@mui/base/Portal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ContactItem = ({ contact: { name, number, id } }) => {
  const actualFields = { name, number, id };
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleIsOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <Box
        sx={{
          p: '1rem',
          borderRadius: '0.2rem',
          boxShadow: `2px 3px 3px ${getRandomColor()}`,
          background: `linear-gradient(145deg, ${getRandomColor()}26, ${getRandomColor()}26)`,
          width: { xs: '260px', sm: '440px' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', lg: 'column' },
            gap: { sm: '1.2rem', lg: '0.2rem' },
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">{name}:</Typography>
          <Typography variant="body1">{number}</Typography>
        </Box>

        <Box
          sx={{
            ml: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <Tooltip title="Edit">
            <IconButton onClick={handleToggleIsOpen}>
              <ModeEditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={handleDeleteContact}>
              <DeleteForeverIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {isOpen && (
        <Portal>
          <Modal onClick={handleToggleIsOpen}>
            <EditForm onClose={handleToggleIsOpen} data={actualFields} />
          </Modal>
        </Portal>
      )}
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactItem;
