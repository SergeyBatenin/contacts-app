import React from 'react';
import TableRow from '../components/TableRow';

const TableComp = (props) => {
    return (
        <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>№</th>
            <th scope='col'>Фамилия Имя Отчество</th>
            <th scope='col'>Номер телефона</th>
            <th scope='col'>Заметка</th>
          </tr>
        </thead>
        <tbody>
            {
              props.data.map(item => (
                <TableRow contact={item}/>
              ))
            }
        </tbody>
      </table>  
    );
}

export default TableComp;