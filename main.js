const express = require("express");
require("dotenv").config();
const http = require("http");
const swaggerConfig = require("./src/config/swagger.config");

async function main() {
  const app = express();
  const PORT = process.env.PORT;
  require('./src/config/mongoose.config');
  swaggerConfig(app);
  
  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)); 
  }
main();
