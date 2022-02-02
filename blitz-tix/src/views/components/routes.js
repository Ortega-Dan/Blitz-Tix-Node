import React from 'react';
import { Router , Route } from 'react-router';

import defaultPage from '../pages/defaultPage';

// WORK IN PROGRESS
const appRoutes = () => (
    <Route exact path="/test" component={defaultPage}/>
    
);

export default appRoutes;