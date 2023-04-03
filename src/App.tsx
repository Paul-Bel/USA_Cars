import React from 'react';
import {MainPage} from "./pages/Main/MainPage";
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Contacts} from "./pages/Contacts/Contacts";

function App() {
    return (
        <div className="App" >
            <Routes >
                <Route path="/USA_Cars" element={ <MainPage />} />
                <Route path="/Contacts" element={<Contacts />} />
                {/*<Route path="/menu" element={<MenuPage />} />*/}
                {/*<Route path="/companies" element={<CompaniesPage/>} />*/}
                {/*<Route path="*" element={<div >Не найдено</div >} />*/}
            </Routes >
        </div >
    );
}

export default App;
