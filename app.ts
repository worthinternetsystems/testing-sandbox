import express from "express";
import { InjectedTimeService } from "./service/injectedTimeService";
import { TimeService } from "./service/nonInjectedTimeService";

const app = express();
const port = 3123;

app.get("/untested", (req, res) => {
  res.send(new Date().toISOString());
});

app.get("/noninjected", (req, res) => {
  const noninjected = new TimeService();
  res.send(noninjected.getCurrentIsoString());
});

app.get("/injected", (req, res) => {
  const injected = new InjectedTimeService(new Date());
  res.send(injected.getCurrentIsoString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
