import './App.css';
import React, {useState} from 'react';
import TableComp from './blocks/TableComp';

function App() {

  const [contacts, setContacts] = useState(
    [
      {id: 1, fullName: " FIO 1", phone: "+7 123 456 78 91", note: "note 1"},
      {id: 2, fullName: " FIO 2", phone: "+7 123 456 78 92", note: "note 2"},
      {id: 3, fullName: " FIO 3", phone: "+7 123 456 78 93", note: "note 3"}
    ]
  )

  const appendContact = () => {    
    const newContact = {id: 7, fullName: " FIO 7", phone: "+7 123 456 78 97", note: "note 7"};
    setContacts([...contacts, newContact]);
  }

  return (
    <div className='container mt-5'>
      <div className="App card">
        <div className='card-header'>
          <h1>Список контактов</h1>
        </div>
        <div className='card-body'>
          <TableComp data={contacts} />
          <div>
          <button
            type='button'
            className='btn btn-primary'
            onClick={appendContact}>
            Добавить контакт
          </button>
        </div>
        </div>                
      </div>
    </div>
  );
}

export default App;
