import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import {
  Button,
  Form,
  InputName,
  InputNumber,
  Label,
} from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const handleChange = event => {
    const prop = event.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'phone':
        setPhone(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleAddContact = async event => {
    event.preventDefault();
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      setName('');
      setPhone('');
      return toast.error(`This contact: '${name}' is already in phonebook`, {
        duration: 2000,
        position: 'top-center',
      });
    }
    if (name && phone) {
      await addContact({ name: name, phone: phone }).unwrap();
      toast.success('Contact is added successfully!', {
        duration: 2000,
        position: 'top-center',
      });
      setName('');
      setPhone('');
    }
  };

  return (
    <Form onSubmit={handleAddContact} isLoading={isLoading}>
      <Label>
        Name
        <InputName
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters"
          required
        />
      </Label>
      <Label>
        Number
        <InputNumber
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          placeholder="Enter Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && (
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="18"
            visible={true}
          />
        )}
        {isLoading ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
};

export default ContactForm;
