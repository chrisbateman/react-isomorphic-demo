var React = require('react');
var Router = require('react-router');
var fs = require('fs');

require('babel/register'); // causes subsequent requires to be transpiled
var routes = require('./src/routes');



function renderRoute(routePath, filePath) {
    Router.run(routes, routePath, function(Root, state) {
        var appHtml = React.renderToStaticMarkup(React.createElement(Root));
        fs.writeFile(filePath, '<!doctype html><title>React Demo - Server</title>' + appHtml);
    });
}

renderRoute('/', 'dist/server-index.htm');
renderRoute('/about', 'dist/server-about.htm');
