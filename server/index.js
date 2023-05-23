const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD;
mongoose
    .connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("Mongo DB Connected!"));


const RobotSchema = new mongoose.Schema({
    image: String,
    title: String,
    desc: String
});

const RobotModel = mongoose.model("robots", RobotSchema);

//get all
app.get("/robots", async (req, res) => {
    const { title } = req.query;
    const robots = await RobotModel.find();
    if (title === undefined) {
        res.status(200).send(robots);
    } else {
        res
            .status(200)
            .send(
                robots.filter((x) =>
                    x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
                )
            );
    }
});


// get by id
app.get("/robots/:id", async (req, res) => {
    const id = req.params.id;
    const robot = await RobotModel.findById(id);
    if (!robot) {
        res.status(204).send("item not found!");
    } else {
        res.status(200).send(robot);
    }
});

//delete
app.delete("/robots/:id", async (req, res) => {
    const id = req.params.id;
    const robot = await RobotModel.findByIdAndDelete(id);
    if (robot === undefined) {
        res.status(404).send("item not found");
    } else {
        res.status(203).send(robot);
    }
},)

//  post
app.post("/robots", async (req, res) => {
    const { image, title, desc } = req.body;
    const newRobot = new RobotModel({
        image: image,
        title: title,
        desc: desc
    });
    await newRobot.save();
    res.status(201).send("created");
});

// put
app.put("/robots/:id", async (req, res) => {
    const id = req.params.id;
    const { image, title, desc } = req.body;
    const existedRobot = await RobotModel.findByIdAndUpdate(id, {
        image: image,
        title: title,
        desc: desc
    });
    if (existedRobot == undefined) {
        res.status(404).send("item not found!");
    } else {
        res.status(200).send(`${title} updated successfully!`);
    }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});