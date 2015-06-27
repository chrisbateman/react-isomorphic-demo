import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './app';
import Index from './routes/index';
import About from './routes/about';


export default (
    <Route handler={App}>
        <DefaultRoute name="home" handler={Index} />
        <Route name="about" handler={About} />
    </Route>
);
