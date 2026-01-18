# Portfolio Minimal

A **Minimal, Fresh, and Clean** personal portfolio website built with React, Vite, and Tailwind CSS. It features a dual-interface design: a stunning standard scroll view and a geeky **Terminal Mode** for CLI enthusiasts.

[Portfolio Preview](https://rohithv07.github.io/Tryouts/)

## ✨ Features

-   **Dual View Modes**:
    -   **Standard**: Clean typography, smooth scrolling, and responsive layout.
    -   **Terminal Mode**: A simulated MacBook terminal environment. Type commands like `/experience` or `/help` to navigate.
-   **Smart Navigation**:
    -   **ChatBot**: An AI-style assistant that scrolls you to sections (e.g., "Show me your skills").
    -   **Smooth Scroll**: Polished scroll interactions.
    -   **Live Blog Feed**: Connects to the Dev.to API to display latest articles dynamically.
-   **Theming**:
    -   **Dark/Light Toggle**: Seamless switching between light (fresh) and dark (sleek) themes.
-   **Modern Tech Stack**:
    -   **React + Vite**: Chosen for lightning-fast HMR and component-based architecture.
    -   **Tailwind CSS**: Utility-first styling for consistent design tokens and dark mode support.
    -   **Framer Motion**: Smooth, spring-physics based animations for entrance effects and interactions.
    -   **Lucide React**: Clean, lightweight SVG icons that match the minimal aesthetic.

## ? Design Philosophy
The goal was to build a portfolio that stands out by doing *less*. 
-   **Minimalism**: We stripped away heavy backgrounds and complex layouts in favor of whitespace, typography, and content.
-   **Freshness**: The "Standard" view is designed to feel like a breath of fresh air—smooth scrolling, pill-shaped interactions, and subtle motion.
-   **Geek Mode**: For the developers and CLI lovers, we included a **Terminal Mode** and **ChatBot**. It's a nod to our roots—sometimes the command line is just faster (and cooler) than a GUI.

## ? Layout & Sections
-   **Hero**: Minimal introduction with resume download and social links.
-   **Experience**: Time-line style work history.
-   **Highlights**: "Most Proud Of" section with card layouts.
-   **Latest Writing**: Dynamic feed of recent blog posts from Dev.to.
-   **Skills**: Technical stack showcase.
-   **Contact**: Pill-shaped interactive contact links.

---

## ? Getting Started

### Prerequisites
-   Node.js (v14 or higher)
-   npm or yarn

### 1. Fork & Clone
To make this project your own, fork the repository to your GitHub account:
1.  Click the **Fork** button at the top right of this page.
2.  Clone your forked repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/portfolio-minimal.git
    cd portfolio-minimal
    ```

### 2. Install Dependencies
Install the required packages:
```bash
npm install
```

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

### 4. Build for Production
To create an optimized build for deployment:
```bash
npm run build
```

---

## ? Terminal Commands (MacBook View)
Switch to Terminal Mode by clicking the **Laptop Icon** in the navbar.
-   `/help` - List all commands
-   `/experience` - View work history
-   `/skill` - List technical skills
-   `/proud` - View highlights
-   `/contact` - Show contact info
-   `exit` - Return to standard view

## ? License
Distribute freely. Credit is appreciated!
