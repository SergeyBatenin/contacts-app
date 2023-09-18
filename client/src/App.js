import './App.css';
import React, {useState, useEffect} from 'react';
import TableComp from './blocks/TableComp';
import FormNewContact from './components/FormNewContact';
import axios from 'axios';

function App() {
  const BASE_URL = 'http://localhost:8080/api/contacts';

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL)
        .then(res => {
          const data = [];

          res.data._embedded.contacts.forEach(contact => {
            data.push({
              id: contact.id,
              fullName: contact.fullName,
              phone: contact.phone,
              note: contact.note
            })
          });
          setContacts(data);
        })
  }, []);
  

  const appendContact = (fullName, phone, note) => {

    const newContact = {
      fullName: fullName, 
      phone: phone, 
      note: note
    };

    axios.post(BASE_URL, newContact)
    .then(res => {
      newContact.id = res.data.id;
      setContacts([...contacts, newContact]);
    });
  }

  const removeContact = (id) => {
    const url = `${BASE_URL}/${id}`;
    axios.delete(url);
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <div className='container mt-5'>
      <div className="App card">
        <div className='card-header'>
          <h1>Список контактов</h1>
        </div>
        <div className='card-body'>
          <TableComp data={contacts} removeContact={removeContact}/>
          <FormNewContact appendContact={appendContact}/>
        </div>                
      </div>
    </div>
  );
}

export default App;
