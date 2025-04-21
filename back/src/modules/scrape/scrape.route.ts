import { Router } from "express";
import { scrapeController } from "./scrape.controller";

const scrapeRouter = Router();

scrapeRouter.get("/", (req, res) => scrapeController.scrape(req, res));

export default scrapeRouter;
