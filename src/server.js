const { app } = require("./app.js");
const { connectToDB } = require("./db/connection.js");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running. Start listening port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(`Server isn't running. Error message: ${err.message}`);
    process.exit(1);
  });
