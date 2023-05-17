import express from "express";

const app = express();
const port = 3000;

app.get("/untested", (req, res) => {
  res.send(new Date().toISOString());
});


app.get("/noninjected", (req, res) => {
  res.send(new Date().getTime().toString());
});

app.get("/injected", (req, res) => {
  res.send(new Date().getTime().toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
