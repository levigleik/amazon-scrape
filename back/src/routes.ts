import { Router } from "express";
import scrapeRouter from "./modules/scrape/scrape.route";

const router = Router();

router.use("/scrape", scrapeRouter);

export default router;
