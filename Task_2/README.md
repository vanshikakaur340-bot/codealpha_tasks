# 🖼️ Gallery

A responsive image gallery with category filtering and a built-in lightbox viewer. Built with  HTML, CSS, and JavaScript, featuring a sleek dark theme with a gradient background.

## Features

- **Category filtering** — switch between All, Nature, Aurora, and Animals
- **Lightbox viewer** — click any image to view it full-size with next/previous navigation
- **Responsive grid** — adapts from 4 columns down to a single column on mobile
- **Bottom navigation bar** with Font Awesome icons (Home, Gallery, Favorites, Profile)
- Smooth hover and zoom animations on gallery cards

## Demo

Simply open `index.html` in your browser — no build steps or dependencies required. Images are loaded directly from external URLs (Unsplash, Pexels, etc.), so an internet connection is needed to view them.

## Project Structure

```
.
├── index.html      # Markup, gallery cards, lightbox, and footer nav
├── style.css       # Styling, theme, grid layout, and responsive breakpoints
└── script.js       # Filtering logic and lightbox functionality
```

## Getting Started

### Option 1: Open directly
Double-click `index.html` or open it in your browser of choice.

### Option 2: Use a local server
For the best experience (and to avoid any browser restrictions on local files), serve the folder with any static server, e.g. VS Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

## How It Works

- **Filtering**: Each filter button has a `data-filter` attribute. Clicking a button toggles the `active` class and shows/hides `.card` elements based on whether they have a matching category class (`nature`, `aurora`, `animals`).
- **Lightbox**: Clicking any gallery image opens a fullscreen overlay showing the enlarged image. The `next`/`prev` buttons cycle through all images, and clicking outside the image or the `×` button closes it.

## Tech Stack

- **HTML5** — structure
- **CSS3** — grid layout, gradients, media queries, transitions
- **JavaScript (vanilla)** — DOM manipulation, event handling
- **[Font Awesome](https://fontawesome.com/)** — icons (via CDN)

## Known Limitations

- Images are hotlinked from external sources, so availability depends on those hosts.
- No lazy-loading — all images load on page load.
- Footer nav items (Home, Favorites, Profile) are placeholders with no linked functionality.

## Contributing

Feel free to fork this repo and submit a pull request — local image hosting, lazy loading, and additional categories would all be great additions.

## License

This project is open source and available under the [MIT License](LICENSE).