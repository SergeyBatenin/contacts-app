import React from 'react';
import './table_row.css';


const TableRow = (props) => {
    const {id, fullName, phone, note} = props.contact;
    return (
        <tr className='contact-row'>
            <th scope='row'>{id}</th>
            <td className='contact-fullname'>{fullName}</td>
            <td className='contact-phone'>{phone}</td>
            <td className='contact-note'>{note}</td>
            <td className='close-btn'>
                <img 
                src="./remove_btn.png" 
                alt="remove contact" 
                onClick={() => props.removeContact(id)}/>
            </td>
        </tr>
    );
}

export default TableRow;