import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={55} category="general" />} />
               <Route exact path="/sport" element={<News key="sport" pageSize={55} category="sport" />} />
            <Route exact path="/business" element={<News key="business" pageSize={55} category="business" />} />
               <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} category="entertainment" />} />
            {/* <Route exact path="/general" element={<News key="general" pageSize={5} category="general" />} /> */}
            <Route exact path="/health" element={<News key="health" pageSize={55} category="health" />} />
            <Route exact path="/science" element={<News key="science" pageSize={55} category="science" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
