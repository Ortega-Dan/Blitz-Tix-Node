import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import AppRoutes from "./views/components/routes";
import AppContactUs from "./views/pages/contactus";
import ReactTemplate from "./views/pages/reactTemplate";


function App() {
  return (
    
    <div className="App">
      
      <AppContactUs/>
      
    </div>
    
  );
}


export default App;
