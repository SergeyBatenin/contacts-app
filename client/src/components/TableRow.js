const TableRow = (props) => {
    return (
        <tr>
            <th scope='row'>{props.contact.id}</th>
            <th>{props.contact.fullName}</th>
            <th>{props.contact.phone}</th>
            <th>{props.contact.note}</th>
        </tr>
    );
}

export default TableRow;