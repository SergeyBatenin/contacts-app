import './App.css';
import React, {useState} from 'react';
import TableComp from './blocks/TableComp';
import FormNewContact from './components/FormNewContact';

function App() {

  const [contacts, setContacts] = useState(
    [
      {id: 1, fullName: " FIO 1", phone: "+7 123 456 78 91", note: "note 1"},
      {id: 2, fullName: " FIO 2", phone: "+7 123 456 78 92", note: "note 2"},
      {id: 3, fullName: " FIO 3", phone: "+7 123 456 78 93", note: "note 3"}
    ]
  )

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
