# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Color Switcher
A simple React application that allows users to dynamically change the background color by selecting from a palette of colors. This project showcases basic use of React hooks (useState) and simple UI styling with Tailwind CSS.

# Features
Select from a variety of colors to change the background color of the app.
Smooth background color transition on change.
Simple and responsive design.

# Tech Stack
React: For building the user interface and managing state.
Tailwind CSS: For styling and layout.

# Installation
To run this project locally, follow these steps:

# Clone the repository:
git remote add origin https://github.com/MDMEHTABKHAN/color-switcher.git


# Code Overview
Changer Component: The main component that renders the color buttons and handles state changes for the background color.
State: Manages the background color using useState.
Color Palette: An array of color objects containing names and hex values.
Event Handling: Each button has an onClick event to update the background color.