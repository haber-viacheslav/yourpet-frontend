import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';
import { ContactListWrp } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactService';
import { useEffect } from 'react';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {visibleContacts.length > 0 && (
        <ContactListWrp>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
        </ContactListWrp>
      )}
    </>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
