import fs from 'fs';
import React from 'react';
import Transmit from 'react-transmit';
import Hello from './Hello.js';

function handleRender(req, res) {
    Transmit.renderToString(Hello, {name: 'World'})
        .then(({reactString, reactData}) => {
            fs.readFile('./index.html', 'utf8', function (err, file) {
                if (err) {
                  return console.log(err);
                }
                const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${reactString}</div>`);
                const output = Transmit.injectIntoMarkup(document, reactData, ['/built/client.js']);
                res.send(output);
            });

        })
        .catch(e => console.log(e));
}

export default handleRender;
