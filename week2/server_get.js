const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const addTwoNumber = (n1, n2) => {
  return n1 + n2;
};

// contact page
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.get("/calculator", (req, res) => {
  res.sendFile(__dirname + "/public/calculator.html");
});

app.get("/addTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = addTwoNumber(n1, n2);
  res.json({ statuscocde: 200, data: result });
});

app.get("/minusTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = n1 - n2;
  res.json({ statuscocde: 200, data: result });
});

app.get("/multiplyTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = n1 * n2;
  res.json({ statuscocde: 200, data: result });
});

app.get("/divideTwoNumber", (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const result = n1 / n2;
  res.json({ statuscocde: 200, data: result });
});

app.get("/Display", (req, res) => {
  const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(n1));
});

app.post("/submit", (req, res) => {
  // get the contact.html form value and return it
  const first_name = req.query.first_name;
  const last_name = req.query.last_name;
  const email = req.query.email;
  const message = req.query.message;

  res.redirect(`/contact?first_name=${first_name}`);
});

const port = 3040;
app.listen(port, () => {
  console.log("hello i'm listening to port http://localhost:" + port);
});
