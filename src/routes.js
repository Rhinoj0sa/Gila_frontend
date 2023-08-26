import {BrowserRouter, Route, Routes} from 'react-router-dom';

import UserForm from './components/UserForm';
import Header from './components/header';
import MessageForm from "./components/MessageForm";
import Notifications from "./components/Notifications";

const App = () => {

    return (<BrowserRouter>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<MessageForm/>}></Route>
                    <Route path="/userform" element={<UserForm />}></Route>
                    <Route path="/notifications" element={<Notifications/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>)
}


export default App;