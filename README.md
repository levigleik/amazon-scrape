# Amazon Product Scraper

A web application that scrapes Amazon product listings for a given search keyword. The project consists of a Bun.js backend server for scraping data and a Vanilla TypeScript frontend with Vite for displaying the results.

## Project Structure

- `/back` - Backend server built with Bun.js
- `/front` - Frontend application built with Vite and TypeScript

## Prerequisites

- [Bun](https://bun.sh/) installed for the backend
- [Node.js](https://nodejs.org/) installed for the frontend
- Google Chrome installed (used by Puppeteer for scraping)

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/levigleik/amazon-scrape
cd amazon-scrape
```

2. Start the backend server:
```bash
cd back
bun install
bun run dev
```

3. Start the frontend application:
```bash
cd front
bun install
bun run dev
```

4. Open your browser and navigate to the URL shown in the frontend terminal (typically http://localhost:5173)

## Features

- Search Amazon products by keyword
- Display product information including:
  - Title
  - Rating
  - Number of reviews
  - Product image
- Responsive grid layout
- Error handling
- Loading states

## Tech Stack

- Backend:
  - Bun.js
  - Express
  - Puppeteer
- Frontend:
  - Vanilla TypeScript
  - Vite
  - CSS Grid