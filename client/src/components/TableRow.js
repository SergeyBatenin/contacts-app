import React from 'react';
// import CloseButton from './../';

const TableRow = (props) => {
    return (
        <tr>
            <th scope='row'>{props.contact.id}</th>
            <td>{props.contact.fullName}</td>
            <td>{props.contact.phone}</td>
            <td>
                {props.contact.note}
                <div><img src="./../../public/cross_large.png" alt="крестик"/></div>
                {/* <div><img src={CloseButton} alt="крестик"/></div> */}
            </td>
        </tr>
    );
}

export default TableRow;