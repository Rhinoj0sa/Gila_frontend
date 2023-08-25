import React from 'react';
import { Table } from 'react-bootstrap';

const Tabla = ({ datos }) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Edad</th>
            </tr>
            </thead>
            <tbody>
            {datos.map((dato, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.edad}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default Tabla;