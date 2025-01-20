const express = require ('express')
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(5500, () => {
    console.log('Game is running at https://localhost:5500');
});
