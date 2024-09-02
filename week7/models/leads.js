let client = require("../connect_db");
let collection = client.db().collection("Leads");

function postContact(contact, callback) {
  collection.insertOne(contact, callback);
}

function getAllContacts(callback) {
  collection.find({}).toArray(callback);
}

module.exports = { postContact, getAllContacts };
