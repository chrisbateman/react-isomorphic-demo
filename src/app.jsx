import React from 'react';
import {RouteHandler, Link} from 'react-router';


export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>React Isomorphic Demo</h1>
                <nav>
                    <div>Route navigation:</div>
                    <Link to="home">Home</Link> | <Link to="about">About</Link>
                </nav>
                <RouteHandler/>
            </div>
        );
    }
}
