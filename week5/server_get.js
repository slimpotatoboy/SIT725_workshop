const express = require("express");
const app = express();
// importing the database connection
require("./connect_db.");
// importing the router
let router = require("./routers/routes");
var port = process.env.port || 3001;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use of router in express
app.use("/", router);

app.listen(port, () => {
  console.log("Server started at: http://localhost:" + port);
});
