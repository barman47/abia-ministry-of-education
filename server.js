const express = require('express');
const path = require('path');

const app = express();

const port = process.env.port || 5000;
const publicPath = path.resolve(__dirname, 'client', 'public', 'build');

app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}. . .`));