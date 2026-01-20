# Personal Portfolio Website

A modern, responsive, and visually stunning personal portfolio website built to showcase skills, projects, and services. this project leverages the power of **React**, **Vite**, and **Tailwind CSS** to deliver a fast and seamless user experience with valid dark mode aesthetics.

## 🚀 Features

-   **Modern UI/UX**: clean, dark-themed design (`#0b1018`) with a focus on visual hierarchy and readability.
-   **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
-   **Smooth Animations**: Integrated **Framer Motion** and **AOS** (Animate On Scroll) for engaging transitions and scroll effects.
-   **Interactive Components**:
    -   **Hero Section**: captivating introduction.
    -   **Skills Showcase**: Visual representation of technical expertise.
    -   **Project Gallery**: showcasing work with filtering or carousel features (using **Swiper** / **React Slick**).
    -   **Services**: Highlighting professional services offered.
    -   **Blog**: Section for sharing thoughts and articles.
    -   **Contact Form**: Easy way for visitors to get in touch.
-   **Dynamic Routing**: Seamless navigation using **React Router**.
-   **Fast Performance**: Powered by **Vite** for lightning-fast development and production builds.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/)
-   **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
-   **Carousels**: [React Slick](https://react-slick.neostack.com/), [Swiper](https://swiperjs.com/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)


## 📜 Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the app for production.
-   `npm run lint`: Runs ESLint to check for code quality.
-   `npm run preview`: Previews the production build locally.
-   `npm run deploy`: Deploys the project to GitHub Pages.

## 📂 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable React components (Navbar, Footer, creating sections)
├── data/           # Static data files (projects, skills, services info)
├── pages/          # Main page views
├── App.jsx         # Main application component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles and Tailwind directives
`