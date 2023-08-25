import {BrowserRouter, Route, Routes} from 'react-router-dom';

import UserForm from './components/UserForm';
import Header from './components/header';
import MessageForm from "./components/MessageForm";
import Tabla from "./components/Tabla";
import React from "react";
import axios from "axios";



const App = () => {
    const showDataHandler = val => console.log(`values up in app: ${JSON.stringify(val)}`)
    const dummy_data = [{nombre:'Juan', edad:20},{nombre:'Pedro', edad:30},{nombre:'Maria', edad:40}]
    const sendMessageHandler = values => {
        console.log(`values up in app: ${JSON.stringify(values)}`)
        axios.post('http://localhost:3000/messages', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const sendUserHandler = values => {
        console.log(`values up in app: ${JSON.stringify(values)}`)
        axios.post('http://localhost:3000/user', values)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (<BrowserRouter>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<MessageForm showData={sendMessageHandler}/>}></Route>
                    <Route path="/userform" element={<UserForm showData={sendUserHandler} />}></Route>
                    <Route path="/notifications" element={<Tabla datos={dummy_data}/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>)
}


export default App;