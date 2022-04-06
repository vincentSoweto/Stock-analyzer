//*pg for PostgreSQL and pg-hstore for converting data into the PostgreSQL hstore format.
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};

// You can see that we use a controller from /controllers/tutorial.controller.js.
// We also need to include routes in server.js (right before app.listen()):
require("./app/routes/stockanalyzer.routes")(app);


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync({force:true}).then(() => {
    console.log("Drop and re-sync db.");
});

app.get("/", (req, res) =>{
    res.json({message: "Welcome to the stock analyzer app"});
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.` );
});


///////////
