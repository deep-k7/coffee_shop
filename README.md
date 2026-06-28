(# Coffee Shop — Project README)
![Static Badge](https://img.shields.io/badge/html-orange)
![Static Badge](https://img.shields.io/badge/css-blue)
![Static Badge](https://img.shields.io/badge/javascript-yellow)

## Project Overview

This is a small interactive front-end demo called "Coffee Shop" that lets users build a coffee order visually. It demonstrates HTML structure, CSS styling (visual cup + responsive layout), and a small JavaScript state layer that keeps UI and visual representation in sync.

Key behaviours:
- Choose a drink type, size, milk option, and extras.
- The cup visualization updates its fill colour and height based on selection.
- Badges appear for selected extras.
- An order summary is rendered with itemised costs and a total.

## User Actions (what the app does)

- Select a drink (`Espresso`, `Latte`, `Cappuccino`, `Mocha`, `Chai`).
- Select a size (`Small`, `Medium`, `Large`) which changes cup fill height.
- Select a milk option (`Regular`, `Oat`, `Almond`, `Soy`, `No Milk`).
- Toggle extras (`Extra Shot`, `Vanilla Syrup`, `Caramel Syrup`, `Whipped Cream`), which:
	- Show/hide badges next to the cup.
	- Add their price to the order total.
- The app updates immediately on user input (no page reload required).



## File Map (what each file does)

- `index.html` — App markup and input elements. Important IDs/classes: `cup`, `cup-fill`, `badges`, `badge-*`, and `summarya`.
- `style.css` — Visual styling, responsive layout, CSS variables and transitions for the cup and badges.
- `script.js` — App logic: state model, DOM lookups, event handlers, UI update functions.

## How to Run & Test Locally

Recommended: run a simple local server to avoid `file://` origin issues.

1. From the project folder run (Python):

```bash
python -m http.server 8000
```

2. Open http://localhost:8000 in your browser.

3. Dev tips:
- Open DevTools → Console: watch for JS errors (e.g., missing element IDs).
- Network tab: verify `style.css` loads with 200 (or disable cache while devtools open).


 manipulating DOM, and safe array operations when removing extras.


## Contact / Next Steps

- If you want, I can:
	- Update `index.html` to make input `value` attributes match internal keys to reduce JS mapping.
	- Add `localStorage` persistence example.
	- Add unit tests for the price calculation logic.

---
This README is written to be explains what the app does, why key implementation choices were made, how to test and debug, and presents extensions that show design thinking.
