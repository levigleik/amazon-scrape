# Amazon Scraper Backend

Backend service for the Amazon Product Scraper application, built with Bun.js, Express, and Puppeteer*.

*It's not possible to use JSDOM because of Amazon policy.

## Setup

1. Install dependencies:
```bash
bun install
```

2. Make sure Google Chrome is installed on your system (required for Puppeteer)

3. Start the development server:
```bash
bun run dev
```

4. (optional): if you want to customize the server port, use the PORT environment variable.
* You can create a .env file (or rename .env.example to .env)
* Or use (4000 as example) 
```bash
PORT=4000 bun run dev
```

The server will start on http://localhost:3000 if not set the PORT environment variable.

## API Endpoints

### GET /api/scrape

Scrapes Amazon product listings for a given search keyword.

**Query Parameters:**
- `keyword` (required): The search term to look up on Amazon

**Response:**
```json
[
  {
    "title": "Product Title",
    "rating": "4.5 out of 5 stars",
    "reviews": "1,234",
    "image": "https://example.com/image.jpg"
  }
]
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

## Project Structure

- `src/` - Source code directory
  - `app.ts` - Express application setup
  - `index.ts` - Server entry point
  - `routes.ts` - Route definitions
  - `modules/` - Feature modules
    - `scrape/` - Scraping module
      - `scrape.controller.ts` - Request handling
      - `scrape.route.ts` - Route configuration
      - `scrape.service.ts` - Scraping logic

## Error Handling

The application includes error handling for:
- Invalid or missing keywords
- Failed scraping attempts
- Network issues
- Rate limiting
