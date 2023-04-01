const { app } = require("./app.js");
const { config } = require("dotenv");

config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Start listening port ${PORT}...`);
});
