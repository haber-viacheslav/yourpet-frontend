export const checkContact = (contacts, values) => {
  return contacts.find(contact => contact.name === values.name.trim());
};

export const checkPhone = (contacts, values) => {
  return contacts.find(contact => contact.number === values.number.trim());
};
