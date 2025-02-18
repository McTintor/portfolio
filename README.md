# Personal Portfolio Website

This is a modern, fully responsive personal portfolio website built with **React** designed to showcase my work, CV, and provide contact information. It features a clean and professional design with dark/light theme support and language switching functionality (English and Serbian).

### Live Demo

[Live Website]()

## Features

- **Home Page:** A welcoming introduction with a brief overview.
- **About Me Page:** Detailed information about your skills, background, and experiences.
- **Projects Page:** Showcases your development projects with descriptions and links.
- **Contact Page:** Contact form and social media links for easy reach-out.
- **Dark/Light Theme Toggle:** Allows users to switch between light and dark modes.
- **Language Switcher:** Supports English and Serbian language switching, with state persistence after page refresh.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.

## Tech Stack

- **React** (with Vite for fast development)
- **Redux Toolkit** (for global state management, including theme and language)
- **Custom CSS** (modern styling with attention to accessibility and user experience)

## Folder Structure
```
src
│
├── assets            # Images and other static assets
├── components        # Reusable React components
├── pages             # Page components (Home, About Me, Projects, CV, Contact)
├── store             # Redux setup for theme and language
├── translations      # Language files for English and Serbian
└── App.jsx           # Main React component
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project folder:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

- Visit `http://localhost:5173/` in your browser.
- Navigate between the **Home**, **About Me**, **Projects**, and **Contact** pages.
- Toggle between **Dark/Light Mode** using the switch in the navbar.
- Switch between **English/Serbian Language** using the language toggle.
- Upload and view your **CV** with a download button.
- Fill out and submit the **Contact Form** or click social media icons for quick access.
