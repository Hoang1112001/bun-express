import express from "express";
// 
// # docker build --pull -t bun-express .
// # docker run -d -p 8080:8080 bun-express
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  // send a simple json response
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});