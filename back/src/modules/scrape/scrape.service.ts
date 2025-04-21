import puppeteer from "puppeteer";

const scrapeAmazon = async (keyword: string) => {
	const browser = await puppeteer.launch({
		executablePath: "/usr/bin/google-chrome",
		headless: true as const,
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const page = await browser.newPage();

	await page.setUserAgent(
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:117.0) Gecko/20100101 Firefox/117.0",
	);

	await page.goto(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`, {
		waitUntil: "networkidle2",
	});

	const products = await page.evaluate(() => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const items: any[] = [];
		const itemElements = document.querySelectorAll(".s-result-item");
		for (const item of itemElements) {
			const titleElement = item.querySelector("h2 span");
			const ratingElement = item.querySelector(".a-icon-star-small span");
			const reviewsElement = item.querySelector(".s-link-style .a-size-base");
			const imageElement = item.querySelector(".s-image");

			const title = titleElement?.textContent?.trim() || "No title available";
			const rating = ratingElement?.textContent?.trim() || "N/A";
			const reviews = reviewsElement?.textContent?.trim() || "0";
			const imageUrl = imageElement?.getAttribute("src") || "";

			if (title && imageUrl) {
				items.push({ title, rating, reviews, image: imageUrl });
			}
		}
		return items;
	});

	await browser.close();
	return products;
};

export const scrapeService = {
	scrapeAmazon,
};
