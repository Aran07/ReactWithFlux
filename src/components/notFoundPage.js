"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Requested Page Not Found</h1>
                <p>Whoops! Sorry, there is nothing to see here.</p>
                <Link to="app">Back to Home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;
