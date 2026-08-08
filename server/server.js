const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
