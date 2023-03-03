import React from 'react';
import {MainPage} from "./pages/Main/MainPage";
import {Route, Routes} from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App" >


            <Routes >
                <Route path="/" element={ <MainPage />} />
                {/*<Route path="/account" element={<PersonalAreaPage />} />*/}
                {/*<Route path="/menu" element={<MenuPage />} />*/}
                {/*<Route path="/companies" element={<CompaniesPage/>} />*/}
                {/*<Route path="*" element={<div >Не найдено</div >} />*/}
            </Routes >
        </div >
    );
}

export default App;
