
# To-Do List App

A responsive and visually clean To-Do List web application developed using HTML, CSS, Bootstrap, and JavaScript. The app allows users to add, complete, and delete tasks. All tasks are stored using localStorage to ensure persistence across sessions.

---

## Preview

The application features a modern UI with a centered layout and custom-styled task cards. A sample hero image is displayed above the task input area.

---

## Features

* Add new tasks with a styled input field and button
* Prevent adding empty tasks with user feedback message
* Mark tasks as completed (with visual highlight)
* Delete tasks from the list
* Save tasks in localStorage for persistence
* Responsive design with Bootstrap utilities
* Custom CSS styling with CSS variables and custom font

---

## Technologies Used

* HTML5
* CSS3 (with CSS variables and custom fonts)
* Bootstrap 5
* JavaScript (ES6)
* Font Awesome (icon buttons)
* localStorage (for saving task data)

---

## Folder Structure

```
project-folder/
│
├── css/
│   └── style.css
├── js/
│   └── index.js
├── images/
│   └── —Pngtree—to do list and eyeglass_6991427.png
├── WebFonts/
│   └── Lato-Bold.ttf
├── node_modules/
│   └── bootstrap/
│
├── index.html
├── README.md
```

---

## Setup Instructions

1. Clone or download the repository.
2. Run `npm install` to install Bootstrap via `node_modules` (if not already included).
3. Open `index.html` in your browser.
4. Tasks will be saved in localStorage, so refreshing the page will preserve your list.

---

## Customization Notes

* You can change the background gradient or button colors by editing the CSS variables inside `style.css`.
* The default font is loaded from a local `WebFonts` directory (`Lato-Bold.ttf`). Ensure it's present for consistent styling.

---
