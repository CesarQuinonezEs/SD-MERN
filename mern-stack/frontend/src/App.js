import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import EditNote from './components/EditNote';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
      
      <Route path="/"  element={<NotesList/>} />
      <Route path="/edit/:id" element={<EditNote/>} />
      <Route path="/create" element={<CreateNote/>} />
      <Route path="/user" element={<CreateUser/>} />
      </Routes>
    </Router>

  );
}
export default App;
