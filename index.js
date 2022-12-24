import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";

await mongoose.connect(
  "mongodb+srv://Amirabotaref:Amirabotaref@cluster0.ubdkcxb.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();
const PORT = 4000;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["https://amir-moveoproject.netlify.app/"],
  },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   res.json({ test: "test" });
});

io.on("connection", (socket) => {
  //console.log("Connection is ready");
  socket.on("send-code", (data) => {
    socket.broadcast.emit("code-from-server", data);
  });
  socket.on("disconnect", (socket) => {
    console.log("user left");
  });
});

httpServer.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
