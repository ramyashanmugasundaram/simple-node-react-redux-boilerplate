'use strict';

import express from 'express';
import path from 'path';
const app = express();
const port = process.env.PORT || 5000;
app.use('/dist', express.static('dist'));


// create a GET route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
    // res.send({});
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
