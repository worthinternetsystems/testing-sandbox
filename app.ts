import express from "express";
import { InjectedTimeService } from "./service/injectedTimeService";

const app = express();
const port = 3000;

app.get("/untested", (req, res) => {
  res.send(new Date().toISOString());
});

app.get("/noninjected", (req, res) => {
  res.send(new Date().getTime().toString());
});

app.get("/injected", (req, res) => {
  const injected = new InjectedTimeService(new Date());
  res.send(injected.getCurrentIsoString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
