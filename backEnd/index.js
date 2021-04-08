// call express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyPerser = require("body-parser");
const multer = require("multer");

const app = express();

// connect to db
mongoose.connect(
    "mongodb+srv://bd-tour:bd-tour-54321@cluster0.4kwjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to db");
    }
)

// Import routes
const userRoutes = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());

// route middlewares
app.use("/api/user", userRoutes); 


let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

let upload = multer({ storage: storage });

app.post("/file", upload.single("file"), (req, res) => {
    let file = req.file;
    let filename = file.filename;
    console.log(file);
    if (file) {
        res.send("File upload successful");
    }
    else {
        throw new Error("File not found.")
    }
})

app.post("/multipleFiles", upload.array("files"), (req, res) => {
    const files = req.files;
    console.log(files);
    if (Array.isArray(files) && files.length > 0) {
        res.json(files);
    }
    else {
        throw new Error("Upload unsuccessful");
    }
});


let port = 3000;
app.listen(port, () => {
    console.log(`App is up and running on ${port}`);
});

