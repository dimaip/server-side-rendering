import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './Hello.js';

function handleRender(req, res) {
    const html = ReactDOMServer.renderToString(
        <Hello name="World" />
    );
    fs.readFile('./index.html', 'utf8', function (err, file) {
        if (err) {
        return console.log(err);
        }
        const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
        res.send(document);
    });
}

export default handleRender;
