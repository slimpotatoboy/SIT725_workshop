const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

var port = process.env.port || 3001;
// mongodb url
const url =
  "mongodb+srv://s224414278:F6GOuxlYOrUxuW5F@cluster0.poa5u3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let collection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connecting to the mongodb client
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// running the database
async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db().collection("Leads");
    // console.log(collection);
  } catch (ex) {
    console.error(ex);
  }
}

// const addTwoNumber = (n1, n2) => {
//   return n1 + n2;
// };

// // contact page
// app.get("/contact", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });
// app.get("/calculator", (req, res) => {
//   res.sendFile(__dirname + "/public/calculator.html");
// });

// app.get("/addTwoNumber", (req, res) => {
//   const n1 = parseInt(req.query.n1);
//   const n2 = parseInt(req.query.n2);
//   const result = addTwoNumber(n1, n2);
//   res.json({ statuscocde: 200, data: result });
// });

// app.get("/minusTwoNumber", (req, res) => {
//   const n1 = parseInt(req.query.n1);
//   const n2 = parseInt(req.query.n2);
//   const result = n1 - n2;
//   res.json({ statuscocde: 200, data: result });
// });

// app.get("/multiplyTwoNumber", (req, res) => {
//   const n1 = parseInt(req.query.n1);
//   const n2 = parseInt(req.query.n2);
//   const result = n1 * n2;
//   res.json({ statuscocde: 200, data: result });
// });

// app.get("/divideTwoNumber", (req, res) => {
//   const n1 = parseInt(req.query.n1);
//   const n2 = parseInt(req.query.n2);
//   const result = n1 / n2;
//   res.json({ statuscocde: 200, data: result });
// });

// app.get("/Display", (req, res) => {
//   const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
//   res.set("Content-Type", "text/html");
//   res.send(Buffer.from(n1));
// });

// app.post("/submit", (req, res) => {
//   // get the contact.html form value and return it
//   const first_name = req.query.first_name;
//   const last_name = req.query.last_name;
//   const email = req.query.email;
//   const message = req.query.message;

//   res.redirect(`/contact?first_name=${first_name}`);
// });

app.get("/", function (req, res) {
  res.render("page2.html");
});

app.listen(port, () => {
  runDBConnection();
  console.log("Your website started on port http://localhost:" + port);
});

