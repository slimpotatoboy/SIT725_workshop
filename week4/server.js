let express = require("express");
let app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = "mongodb://localhost:27017";
const uri =
  "mongodb+srv://s224414278:F6GOuxlYOrUxuW5F@cluster0.poa5u3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db().collection("Leads");
  } catch (ex) {
    console.error(ex);
  }
}

// load home page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// load contact page
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/public/contact.html");
});

// load calculator page
app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/public/calculator.html");
});

//  contact page GET API
app.get("/api/contacts", (req, res) => {
  getAllContacts((err, result) => {
    if (!err) {
      res.json({
        statusCode: 200,
        data: result,
        message: "get all contacts successful",
      });
    }
  });

  //   getAllContacts();
});

// contact page POST API
app.post("/api/contact", (req, res) => {
  let con = req.body;
  console.log(con);
  postContact(con, (err, result) => {
    if (err) {
      return res.json({ statusCode: 500, message: err.message });
    }
    const response = res.json({
      statusCode: 201,
      data: result,
      message: "success",
    });
    console.log(response);
    return response;
  });
});

//
function postContact(contact, callback) {
  collection.insertOne(contact, callback);
}

function getAllContacts(callback) {
  collection.find({}).toArray(callback);
}

app.listen(port, () => {
  console.log("express server started");
  runDBConnection();
});
