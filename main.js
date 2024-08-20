const express = require("express");
require("dotenv").config();
const http = require("http");

async function main() {
  const app = express();
  const PORT = process.env.PORT;
  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)); 
  }
main();
