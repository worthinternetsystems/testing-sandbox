import { RequestHandler } from "express";
import { InjectedTimeService } from "./service/injectedTimeService";

export const createInjectedTimeHandler =
  (injectedTimeService: InjectedTimeService): RequestHandler =>
  (req, res) => {
    res.send(injectedTimeService.getThing());
  };

interface InjectedTimeService {
  getThing: () => string;
}
