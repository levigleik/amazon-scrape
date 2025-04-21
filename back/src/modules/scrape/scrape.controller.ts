import type { Request, Response } from "express";
import { scrapeService } from "./scrape.service";

/**
 * Controller to handle scraping requests.
 * Extracts and validates the 'keyword' query parameter.
 *
 * @param req - Express Request object, expecting a 'keyword' query parameter.
 * @param res - Express Response object.
 */
const scrape = async (req: Request, res: Response) => {
	const { keyword } = req.query;

	if (!keyword || typeof keyword !== "string" || keyword.trim() === "") {
		return res
			.status(400)
			.json({ error: "Missing or invalid 'keyword' query parameter." });
	}
	try {
		const results = await scrapeService.scrapeAmazon(keyword);
		res.status(200).json(results);
	} catch (error) {
		console.error("Scraping failed:", error);
		res.status(500).json({ error: "Scraping failed." });
	}
};

export const scrapeController = {
	scrape,
};
