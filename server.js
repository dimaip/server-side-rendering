import express from 'express';
import path from 'path';
import handleRender from './built/server.js';

const app = express();
// Serve built files with express static files middleware
app.use('/built', express.static(path.join(__dirname, 'built')));
// Serve normal requests with our handleRender function
app.use('/static', express.static(path.join(__dirname, 'static')));
app.get('*', handleRender);
app.listen(3000);
console.log('=== Go to http://localhost:3000 ===');
