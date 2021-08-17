const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.export = app;

//logs
app.use(morgan("dev"));

//parses middles
app.use(express.json());
//serves static files .css and images
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "public/images")));


//sends the main html file
app.get("*", (req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

app.use((req, res, next) => {
  const err = Error('404: page not found');
  err.status = 404;
  next(err);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "500: Internal server error.");
});
