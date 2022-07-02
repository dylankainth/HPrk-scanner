const express = require('express');

const app = express.Router();

//Get all Method
app.get('/getAll', async (req, res) => {
    res.json({"test":"TESt"})
})


module.exports = app