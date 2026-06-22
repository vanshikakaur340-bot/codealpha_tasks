
#  Calculator

A simple, clean calculator built with  HTML, CSS, and JavaScript. Features a sleek dark theme with a gradient background and smooth hover animations.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Clear (`AC`) and backspace (`⌫`) functionality
- Decimal point support
- Responsive button grid layout
- Dark, modern UI with gradient background and color-coded buttons

## Demo

Simply open `index.html` in your browser — no build steps or dependencies required.

## Project Structure

```
.
├── index.html      # Markup and layout for the calculator
├── style.css       # Styling, theme, and animations
├── script.js       # Calculator logic
└── settings.json   # Local dev settings (Live Server port)
```

## Getting Started

### Option 1: Open directly
Double-click `index.html` or open it in your browser of choice.

### Option 2: Use a local server (recommended)
If you're using VS Code with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension:

1. Open the project folder in VS Code.
2. Right-click `index.html` → **Open with Live Server**.
3. The app will run on the port configured in `settings.json` (default: `5501`).

## How It Works

- Number and operator buttons append their value to the display via `appendValue()`.
- `calculate()` evaluates the expression currently shown on the display.
- `clearDisplay()` resets the display, and `deleteLast()` removes the last character entered.

## Tech Stack

- **HTML5** — structure
- **CSS3** — styling, flexbox/grid layout, gradients, transitions
- **JavaScrip**— calculator logic, DOM manipulation

## Known Limitations

- Input validation is minimal — invalid expressions will show `Error`.
- No keyboard input support yet.
- No operation history.

## Contributing

Feel free to fork this repo and submit a pull request with improvements — keyboard support, calculation history, and unit tests would all be great additions.

## License

This project is open source and available under the [MIT License](LICENSE).
