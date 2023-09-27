import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);

  const changedContacts = () =>
    filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul>
      {changedContacts().map(item => (
        <ContactItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
