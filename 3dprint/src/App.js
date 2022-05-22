import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigationbar';
import About from './components/About';
import SignIn from './components/SignIn';
import Photos from './components/Photos';
import Videos from './components/Videos';
import Dashboard from "./components/Dashboard";
import ArticleFeed from "./components/ArticleFeed";
import Discussion from "./components/Discussion"

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      
        <Routes>
        <Route exact path ="/" element = { <About />}></Route>
        <Route exact path= "/about" element = { <About/>} ></Route>
        <Route exact path = "/dashboard" element = {<Dashboard />}></Route>
        <Route exact path = "/discussion" element = {<Discussion />}></Route>
        <Route exact path= "/articleFeed" element = { <ArticleFeed/> } ></Route>
        <Route exact path = "/signIn" element = {<SignIn/>}></Route>
        <Route exact path = "/photos" element = {<Photos/>}></Route>
        <Route exact path = "/videos" element = {<Videos/>}></Route>
        </Routes>
      
   
     
   
    
      
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;

