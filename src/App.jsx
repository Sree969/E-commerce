import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App1 from "./App1";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Productitem";
import Error from "./Pages/Error";
import './index.css'
function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App1/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/reg" element={<Register/>}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="/*" element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App