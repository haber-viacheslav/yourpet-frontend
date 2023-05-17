import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from 'redux/contacts/contactService';

import {
  userSignup,
  userLogin,
  userLogout,
  userCurrent,
} from 'redux/auth/authService';

// Actions for ContactSlice Matcher
export const contactsExtraActions = [
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
];
// Actions for AuthSlice Matcher
export const authExtraActions = [
  userSignup,
  userLogin,
  userLogout,
  userCurrent,
];
