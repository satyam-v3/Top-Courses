<h1 align="center">🎓 Top Courses Explorer</h1>

<p align="center">
  <em>A dynamic, responsive React application for browsing and filtering educational courses.</em>
</p>

---

## 📖 About The Project

**Top Courses Explorer** is a modern React web application that fetches course data from an external REST API and presents it in a clean, interactive UI. 

This project was built to demonstrate proficiency in React component architecture, state management (Hooks), asynchronous data fetching, and conditional rendering. It provides a seamless user experience with fast category filtering, engaging loading states, and persistent interactive features like "liking" a course.

## ✨ Key Features

* **Dynamic Filtering:** Users can instantly filter courses by category (Development, Business, Design, Lifestyle) or view all combined. The filtering logic gracefully handles flattening nested JSON data from the API.
* **Interactive UI States:** * Features a custom CSS-animated loading spinner while data is being fetched.
  * Implements interactive "Like/Unlike" toggle buttons on course cards.
* **Toast Notifications:** Integrates `react-toastify` to provide immediate, elegant visual feedback when a user interacts with the API or likes/unlikes a course.
* **Text Truncation:** Automatically truncates overly long course descriptions to maintain uniform card heights and a clean grid layout.
* **Modern Styling:** Designed using the newly released **Tailwind CSS v4**, utilizing the `@theme` directive for custom design tokens and highly responsive flexbox/grid layouts.

## 🛠️ Built With

* **React (Vite):** Core framework for building the user interface.
* **Tailwind CSS v4:** Utility-first framework for rapid, responsive styling.
* **React Toastify:** For lightweight, customizable alert notifications.
* **React Icons:** Scalable vector icons for the UI components.
* **Fetch API:** Native JavaScript API for asynchronous data retrieval.

## 🚀 Getting Started

To run this project locally on your machine:

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/top-courses.git](https://github.com/your-username/top-courses.git)

2. Navigate into the project directory:
    ```Bash
    cd top-courses

3. Install the dependencies:
    ```Bash
    npm install

4. Start the Vite development server:
    ```Bash
    npm run dev


## 📁 Project Architecture: <br/>
The application relies on a modular component structure, lifting state up to App.jsx where necessary to allow sibling components to communicate effectively.

```text
src/
├── components/
│   ├── Card.jsx          # Individual course presentation and Like toggle logic
│   ├── Cards.jsx         # Renders the grid and handles the category filtering logic
│   ├── Filter.jsx        # Category selection buttons
│   ├── Navbar.jsx        # Header component
│   └── Spinner.jsx       # Custom CSS loading animation
├── data.js               # Static category data and API endpoint configuration
├── App.jsx               # Core state management and API fetching
└── main.jsx              # React DOM mounting