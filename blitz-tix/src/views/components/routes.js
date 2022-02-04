import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import AppHome from '../pages/home';
import ReactTemplate from '../pages/reactTemplate';

// WORK IN PROGRESS
function AppRoutes () {
    return (
    <Router>
        <Routes>
          <Route exact path="/">
            <ReactTemplate/>
          </Route>
          <Route path="/home">
            <AppHome />
          </Route>
        </Routes>
    </Router>
    );
}

export default AppRoutes;