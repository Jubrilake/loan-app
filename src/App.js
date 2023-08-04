
import './App.css';
import Nav from "./components/Nav"
import Transaction from "./components/Transaction";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <Router>
       <Nav />
      
   
    <Routes>
    <Route exact path="/" element={<Home/>} />
          <Route path="/transaction/:id" element={<Transaction/>} />
    </Routes>
    
    

    </Router>
    
    
  );
}

export default App;
