import React from "react"; 
import { Routes, Route, Link } from "react-router-dom";
import {Layout,Typography, Space} from "antd"
import {Navbar,Cryptocurrencies,News,Exchanges,Homepage,CryptoDetails} from "./components";
import './App.css'
const App= ()=>{
    return (
        <div className="app">
           <div className="navbar">
            <Navbar/> </div> 
           <div className="main">
            <layout>
            <div className="routes">
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/exchanges' element={<Exchanges/>}/>
                <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>

            </Routes>
                </div>
            </layout>
           
           <div className="footer">
               <Typography.Title level={4} style={{color:'#fff', textAlign:'center'}}>
                Crypton <br/>
                All rights reserved
               
               </Typography.Title>
               <Space>
                    <Link to='/'>Home </Link>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
           </div>
           </div>
        </div>
    )
}

export default App