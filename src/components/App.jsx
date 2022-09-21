import { Container } from 'App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster
        toastOptions={{
          error: {
            style: {
              fontWeight: 500,
              padding: '16px',
              color: '#fff',
              background: 'red',
            },
          },
          success: {
            style: {
              fontWeight: 500,
              padding: '16px',
              color: '#fff',
              background: '#5446cc',
            },
          },
        }}
      />
    </Container>
  );
};

export default App;
