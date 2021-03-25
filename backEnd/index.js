// call express
const express = require("express");
const app = express();

const mongoose = require("mongoose");

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

// route middlewares
app.use("/api/user", userRoutes); 

app.listen(3000, () => {
    
    console.log("App is up & running on server 3000.");
});
