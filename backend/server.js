
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

//connecting to database
mongoose.connect("mongodb://0.0.0.0:27017").then(() => {
    console.log("Database has been connected successfully");
}).catch((error) => {
    console.log(error);
})

const studentModel = require("./models/studentModel");

app.post("/register", async (req, res) => {
    try{

        const data = studentModel({
            id: req.body.id,
            name: req.body.name,
            studentClass: req.body.studentClass,
            address: req.body.address,
            guardian: req.body.guardian,
            number: req.body.number,
        });

        const saveData = await data.save();

        res.send(saveData);
    }catch (error){

        console.log(error);
    }
})

//displaying all data from the database.

app.get("/students", async (req, res) => {

    try {
        const data = await studentModel.find();
        res.send(data);

    }catch(error){
        console.log(error);
    }

})



app.get("/", (req, res) => {
    res.send("Hi from node js")
})


app.listen(1000, () => {
    console.log("Server is running on port 1000 smoothly")
})