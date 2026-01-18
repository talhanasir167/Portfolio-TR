# Ashwin Portfolio

A modern, clean portfolio website built with React, showcasing projects, skills, and contact information.

## Features

- **Home Page**: Hero section with introduction, about section, and project showcase
- **Projects Page**: Dedicated page showcasing all projects
- **Skills Page**: Comprehensive display of technical skills and expertise
- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, minimalist design with smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ContactSection.jsx
│   ├── ProjectCard.jsx
│   └── SkillCard.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3

## Customization

To customize the portfolio:

1. Update project information in `src/pages/Home.jsx` and `src/pages/Projects.jsx`
2. Modify skills in `src/pages/Skills.jsx`
3. Update contact information in `src/components/ContactSection.jsx`
4. Adjust colors and styling in the respective CSS files

## License

MIT

