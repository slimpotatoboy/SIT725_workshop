let collection = require("../models/leads");

const getAllContacts = (req, res) => {
  collection.getAllContacts((err, result) => {
    if (!err) {
      res.json({
        statusCode: 200,
        data: result,
        message: "get all contacts successful",
      });
    }
  });
};

const postContact = (req, res) => {
  let con = req.body;
  collection.postContact(con, (err, result) => {
    if (err) {
      return res.json({ statusCode: 500, message: err.message });
    }
    const response = res.json({
      statusCode: 201,
      data: result,
      message: "success",
    });
    return response;
  });
};

module.exports = { getAllContacts, postContact };
