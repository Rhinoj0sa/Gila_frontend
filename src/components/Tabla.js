import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import axios from "axios";

const Tabla = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        console.log('useEffect')
        axios.get('http://localhost:3000/notifications')
            .then(res => {
                console.log(res.data)
                setData(data => (res.data.notifications))
            })
            .catch(err => console.log(err))
    }, [])
    return (
        // <div>
        //     <p>{JSON.stringify(data)}</p>
        // </div>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Message</th>
                <th>Category</th>
                <th>Channel</th>
                <th>Sent</th>
                <th>TimeStamp</th>
            </tr>
            </thead>
            <tbody>
            {data.map((dato, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dato.name}</td>
                    <td>{dato.message}</td>
                    <td>{dato.category}</td>
                    <td>{dato.channel}</td>
                    <td>{dato.sent}</td>
                    <td>{dato.createdAt}</td>

                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default Tabla;