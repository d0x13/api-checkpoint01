const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()
const User = require("./models/User");
const URI = process.env.URI;
mongoose.connect(URI).then(() => console.log("connected to database")).catch((err) => console.log(err));

app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data)
    } catch (error) {
        return res.status(401).json({ status: false, error })
    }
});

app.post("/user", async (req, res) => {
    try {
    const user = await User.create(req.body);
    res.status(201).json(user);
    } catch (error) {
    return res.status(401).json({ status: false, error });
    }
  });

app.patch("/user/:id", async (req, res) => {
    try {
    let { id } = req.params;
        const user = await User.findByIdAndUpdate(id,
            {
            $set: req.body,
            },
            {
                new: true
            }
        );
    res.status(201).json(user);
    } catch (error) {
    return res.status(401).json({ status: false, error });
    }
});

app.delete("/user/:id", async (req, res) => {
    try {
    let { id } = req.params;
        const user = await User.findByIdAndDelete(id,);
    res.status(201).json(user);
    } catch (error) {
    return res.status(401).json({ status: false, error });
    }
});



app.listen(5000, (req, res) => {
    console.log("server is up and running")
})