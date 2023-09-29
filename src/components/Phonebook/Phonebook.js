import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import {
  PhonebookContainer,
  TitleContacts,
  TitlePhoneBook,
  PhonebookWrapper,
} from './Phonebook.styled';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <PhonebookWrapper>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm />

        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {(isLoading && !error && <b>Request in progress...</b>) || (
          <ContactList />
        )}
      </PhonebookWrapper>
    </PhonebookContainer>
  );
};
