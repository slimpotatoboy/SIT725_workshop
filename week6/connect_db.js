const { MongoClient, ServerApiVersion } = require("mongodb");
// mongodb url
const url =
  "mongodb+srv://s224414278:F6GOuxlYOrUxuW5F@cluster0.poa5u3y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connecting to the mongodb client
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
client.connect();

module.exports = client;
