import React, {useState} from "react";

const FormNewContact = (props) => {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const addContact = () => {
        if (fullName.trim() === "" || phone.trim() === "") return;
        
        props.appendContact(fullName, phone, note);
        setFullName("");
        setPhone("");
        setNote("");
    }

    return (
        <form className="row g-3">
      <h2>Новый контакт</h2>
      <div className="col-md-6">
        <input type="text" 
            className="form-control" 
            placeholder="Фамилия Имя Отчество" 
            value={fullName}
            onChange={(e) => {setFullName(e.target.value)}}/>
      </div>
      <div className="col-12">
        <input type="tel" 
            className="form-control" 
            placeholder="Phone number (+7 123 456 78 90)" 
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}/>
      </div>
      <div className="col-12">
        <textarea rows={3} type="text" 
            className="form-control" 
            placeholder="Note" 
            value={note}
            onChange={(e) => {setNote(e.target.value)}}/>
      </div>
      <div className="col-12">
        <button type="button" className="btn btn-primary" onClick={addContact}>Добавить</button>
      </div>
    </form>
    )
}

export default FormNewContact;