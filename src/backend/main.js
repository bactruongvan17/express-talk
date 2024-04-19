const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/ping', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`ExpressTalk API is running on 0.0.0.0:${port}`);
});