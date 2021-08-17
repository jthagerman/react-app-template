const PORT = pricess.env.PORT || 8080;
const app = require("./app");

const server = app.listen(PORT, () =>
  console.log(`Listening at port number: ${PORT}`)
);
