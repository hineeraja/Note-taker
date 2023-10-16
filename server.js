// Dependencies
const express = require('express');

// Point Server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create an express server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('Toy train station is running on port 3005!');
});