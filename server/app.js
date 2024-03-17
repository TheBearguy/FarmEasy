//IMPORTS :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const dotenv = require("dotenv");

// MANUAL FILE IMPORTS :
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const prodRoutes = require("./routes/prodRoutes");
const fertilizerRoutes = require("./routes/fertilizerRoute");


// INSTANCE OF EXPRESS :
const app = express();
app.use(morgan("dev"));
dotenv.config({ path: "/env" });

// Security HTTP Header:
// app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Body Parser, reading data from req.body :
app.use(express.json());
app.use("/", express.static("uploads"));

// Data Sanitization : "email : { $gt: ' ' } --> Gets accepted.
app.use(mongoSanitize());

// Backend - FrontEnd connections :
app.use(cors());

// >> CUSTOM MIDDLEWARE :
// app.use((req, res, next) => {
//   console.log("Hello from Middleware 🫂");
//   console.log(req.headers);
//   next();
// });

// /test ROUTE :
app.get("/", (req, res) => {
  return res.json("Home route");
});

app.get("/admin", (req, res) => {
  return res.json("Home");
});

// app.get("/test", (req, res) => {
//   return res.json("Test");
// });

// ROUTE HANDLERS ==> MOUNTING THE ROUTER :
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/users", adminRoutes);
app.use("/api/v1/users", prodRoutes);
app.use("/api/v1/users", fertilizerRoutes);

// ANY UNHANDLED ROUTE :
// app.all("*", (req, res, next) => {
//   next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
// });

module.exports = app;
