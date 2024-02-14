import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Fetchregistrations from './components/Fetchregistrations';

function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/counsellor" element={<Counsellor/>} exact />
        <Route path="/visitor" element={<Visitor/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
        <Route path="/fetch" element={<Fetchregistrations/>} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
 