const express = require("express");
const app = express();
// importing the database connection
require("./connect_db.js");
// importing the router
let router = require("./routers/routes");
var port = process.env.port || 3001;
const { Socket } = require("socket.io");
let http = require("http").createServer(app);
let io = require("socket.io")(http);

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use of router in express
app.use("/", router);

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  setInterval(() => {
    // get the random testimonials from the customers to display as a toast on the website page.
    let randomTestimonialArray = [
      "Transformed our online presence with a stunning and functional site—highly recommend",
      "Exceptional service and innovative designs that exceeded our expectations!",
      "The team delivered on time and created a website that truly represents our brand.",
      "Professional, creative, and responsive—our new site is better than we imagined",
      "From concept to launch, they made the whole process seamless and stress-free.",
      "They brought our vision to life with a sleek, user-friendly design.",
      "Their innovative approach and dedication made our website project a huge success.",
    ];
    // generate the random index within the limit of random testimonial array
    let randomIndex = Math.floor(Math.random() * randomArray.length);
    // emit to the socket and display the random testimonial
    socket.emit("customer", randomTestimonialArray[randomIndex]);
  }, 2500);
});

http.listen(port, () => {
  console.log("Server started at: http://localhost:" + port);
});
