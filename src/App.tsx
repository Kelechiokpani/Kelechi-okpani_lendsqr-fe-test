import React from 'react';
import "./scss/style.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/singleUser/Single";
import {productInputs, userInputs} from "./Form";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Login/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="users">
                            <Route index element={<List/>}/>
                            <Route path=":userId" element={<Single/>}/>
                            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
                        </Route>
                        <Route path="products">
                            <Route index element={<List/>}/>
                            <Route path=":productId" element={<Single/>}/>
                            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
                        </Route>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
