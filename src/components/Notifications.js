import React, {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import axios from "axios";
import Card from 'react-bootstrap/Card';

const Notifications = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/notifications`)
            .then(res => {
                setData(() => (res.data.notifications))
            })
            .catch(err => console.log(err))
    }, [])

    return <Card>
        <h1 align={'center'}>Notifications</h1>
        <Table striped bordered hover size={'sm'}>
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
                    <td>{item.sent ? 'True':'False'}</td>
                    <td>{item.createdAt}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    </Card>
};

export default Notifications;