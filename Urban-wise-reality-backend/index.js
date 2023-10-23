require('./src/db/mongoose');
const express = require('express');
const userCredentialsRouter = require('./src/routers/userCredentials');
const propertyDetailsRouter = require('./src/routers/propertyDetails');

const app = express();
const port = 3000;

app.use(express.json());
app.use(userCredentialsRouter);
app.use(propertyDetailsRouter);

app.listen(port, () => {
    console.log('App is running on port 3000!');
});