import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
    <Navigation/>
    <Route path="/" exact component={NotesList} />
    <Route path="/edit/:id" component={CreateNote} />
    <Route path="/create" component={CreateNote} />
    <Route path="/user" component={CreateUser} />
  </Router>


  );
}
export default App;
