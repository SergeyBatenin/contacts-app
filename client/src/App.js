import './App.css';
import React, {useState, useEffect} from 'react';
import TableComp from './blocks/TableComp';
import FormNewContact from './components/FormNewContact';
import axios from 'axios';

function App() {

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts')
        .then(res => {
          const data = [];

          res.data._embedded.contacts.forEach(contact => {
            data.push({
              fullName: contact.fullName,
              phone: contact.phone,
              note: contact.note
            })
          });
          setContacts(data);
        })
  }, []);
  

  const appendContact = (fullName, phone, note) => {    
    
    const length = contacts.length;
    let currentId = 0;

    if (length === 0) {
      currentId = 1;
    } else {
      currentId = contacts[length - 1].id + 1;
    }

    const newContact = {id: currentId, fullName: fullName, phone: phone, note: note};
    setContacts([...contacts, newContact]);
  }

  const removeContact = (id) => {
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
