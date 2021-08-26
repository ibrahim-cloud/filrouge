const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

const uri = "mongodb://localhost/Fil_Rouge";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection is done");
});

///routes///
const AdminRoute = require("./routes/AdminRoute")
app.use('/admin', AdminRoute)

const UserRoute = require("./routes/UserRoute")
app.use('/user', UserRoute)

// const AdminRouter = require("./routes/AdminRoute");
// app.use("/admin", AdminRouter);


app.listen(1100, () => console.log('Server started on port 1010'));