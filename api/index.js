// const bodyParser = require('body-parser')
// const app = require('express')()
// var mongo = require('mongodb');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://root:example@localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("HP_TAT");
//     //Find the first document in the customers collection:

//     // This section will help you get a list of all the documents.
//     app.route("/list").get(async function (req, res) {
//         dbo.collection("assets").findOne({}, function(err, result) {
//             if (err) throw err;
//             res.json({"data": result});
//         });

        

//     });

//     db.close();

// });

const express = require('express');
const Model = require('./model.js');
const app = express.Router();

// //Post Method
// router.post('/post', async (req, res) => {
//     const data = new Model({
//         name: req.body.name,
//         age: req.body.age
//     })

//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// })


//Get all Method
app.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
app.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = app