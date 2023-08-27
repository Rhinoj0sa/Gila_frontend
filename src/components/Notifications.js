import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import axios from "axios";

const Notifications = () => {
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
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.message}</td>
                    <td>{item.category}</td>
                    <td>{item.channel}</td>
                    <td>{item.sent}</td>
                    <td>{item.createdAt}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default Notifications;