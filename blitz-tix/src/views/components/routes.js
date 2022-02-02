import React from 'react';
import { Router , Route } from 'react-router';

import home from '../pages/home';

// WORK IN PROGRESS
const appRoutes = () => (
    <Route exact path="/test" component={home}/>
    
);

export default appRoutes;