import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import SiteMainPage from "./SiteMainPage";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<SiteMainPage />}/>
            </Routes>
        </div>

    );
}

export default App;
