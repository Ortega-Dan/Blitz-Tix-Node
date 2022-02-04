import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import AppRoutes from "./views/components/routes";
import AppHome from "./views/pages/home";
import ReactTemplate from "./views/pages/reactTemplate";


function App() {
  return (
    
    <div className="App">
      
      <AppHome/>
      
    </div>
    
  );
}


export default App;
