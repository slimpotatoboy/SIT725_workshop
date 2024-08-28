var expect = require("chai").expect;
var request = require("request");

describe("Submit Contact Form", function () {
  var url = "http://localhost:3001/contact";

  // Test if the contact form page loads successfully
  it("should load the contact form page", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test if submitting the contact form with valid data returns a success message
  it("should submit the contact form with valid data", function (done) {
    var options = {
      url: "http://localhost:3001/api/contact",
      method: "POST",
      json: {
        name: "John Doe",
        email: "john.doe@example.com",
        message: "Hello, this is a test message.",
      },
    };
    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body.message).to.equal("Contact form submitted successfully");
      done();
    });
  });

  // Test if submitting the contact form with invalid data returns an error message
  it("should return an error for invalid data", function (done) {
    var options = {
      url: "http://localhost:3001/api/contact",
      method: "POST",
      json: {
        name: "",
        email: "invalid-email",
        message: "",
      },
    };
    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body.message).to.equal("Invalid input data");
      done();
    });
  });
});
