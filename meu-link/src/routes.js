import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Links from "./pages/Links";

function RouterApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/links" element={<Links/>} />
            <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;