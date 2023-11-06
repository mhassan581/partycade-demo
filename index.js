import express from "express";
import ServerConfig from "./src/config/serverConfig.js";
import { app } from "./app.js";
const SERVER_PORT = ServerConfig.SERVER_PORT;

// Local
import { createServer } from "http";
import { connectDB } from "./src/utils/connectDB.js";
const httpServer = createServer(app);

// Connect To Database then Connect Server
connectDB()
  .then(async (result) => {
    // Promise.all([socketWrapper(), redisWrapper()]);
    httpServer.listen(SERVER_PORT, async () => {
      console.log("Server listening on port http://localhost:" + SERVER_PORT);
    });
  })
  .catch((err) => {
    console.error("Server Crash due to mongoose not connected", err.message);
  });
