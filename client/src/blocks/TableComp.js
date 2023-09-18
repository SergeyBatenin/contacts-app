import React from 'react';
import TableRow from '../components/TableRow/TableRow';

const TableComp = (props) => {
    return (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>№</th>
            <th scope='col'>Фамилия Имя Отчество</th>
            <th scope='col'>Номер телефона</th>
            <th scope='col'>Заметка</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
            {
              props.data.map((item, index) => (
                <TableRow contact={item} position = {index} key={item.id} removeContact={props.removeContact}/>
              ))
            }
        </tbody>
      </table>  
    );
}

export default TableComp;