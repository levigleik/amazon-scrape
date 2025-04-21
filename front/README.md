# Amazon Scraper Frontend

Frontend application for the Amazon Product Scraper, built with Vanilla TypeScript and Vite.

## Setup

1. Install dependencies:
```bash
bun install
```

2. (optional): if you want to customize any environment variables:
* You can create a .env file (or rename .env.example to .env)
* Or use them directly when running the dev server, for example:
```bash
VITE_API_URL=http://localhost:4000 bun run dev
```

3. Start the development server:
```bash
bun run dev
```

The application will be available at http://localhost:5173

## Features

- Clean and responsive user interface
- Real-time product search
- Grid layout for search results
- Loading states and error handling
- Amazon-inspired styling

## Project Structure

- `src/` - Source code directory
  - `main.ts` - Application entry point
  - `style.css` - Global styles
- `public/` - Static assets
- `index.html` - Main HTML file

## Styling

The application uses modern CSS features including:
- CSS Grid for responsive product layout
- Flexbox for search container
- CSS Variables for theming
- Mobile-responsive design

## User Interface Components

- Search container with input field and button
- Product grid displaying:
  - Product images
  - Titles
  - Ratings
  - Review counts
- Loading indicator
- Error message display

## Browser Support

The application is built with modern web technologies and is compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development

To modify the application:
1. Make changes to the TypeScript files in `src/`
2. The development server will automatically reload
3. Build for production with `bun run build`