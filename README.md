# Sean Hodges - Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, Vite, and Tailwind CSS, showcasing my professional experience as a Lead Software Engineer.

## 🚀 Features

- **Modern Tech Stack**: Built with Vue 3 (Composition API), Vite, and Tailwind CSS
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **Smooth Animations**: Engaging hover effects and smooth scrolling navigation
- **Component Architecture**: Modular Vue components for easy maintenance
- **Centralized Data Management**: All content managed in a single `data.js` file
- **Professional Theme**: Clean design with custom red (#cc0000) accent color
- **Performance Optimized**: Fast loading with Vite's optimized build process

## 🛠️ Technologies Used

- **Frontend**: Vue.js 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons SVG icons
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
src/
├── assets/                 # Static assets
├── components/            # Vue components
│   ├── TheHeader.vue     # Navigation header
│   ├── MeSection.vue     # Hero/intro section
│   ├── SkillsSection.vue # Skills grid
│   ├── ExperienceSection.vue # Work timeline
│   ├── ProjectsSection.vue   # Project showcase
│   ├── PhilosophySection.vue # Development philosophy
│   ├── InterestsSection.vue  # Personal interests
│   └── TheFooter.vue     # Footer with links
├── App.vue               # Main app component
├── main.js              # App entry point
├── index.css            # Global styles & Tailwind
└── data.js              # Centralized content data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/seanhodges-website.git
cd seanhodges-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Customization

### Content Management

All website content is centralized in `src/data.js`. Update this file to modify:

- Personal information and social links
- Skills and technologies
- Work experience
- Project details
- Philosophy and interests

### Styling

The project uses Tailwind CSS with a custom theme:

- **Primary Color**: `#cc0000` (configured as `primary-red`)
- **Font**: Inter from Google Fonts
- **Responsive Breakpoints**: Tailwind's default breakpoints

To modify the theme, edit `tailwind.config.js`.

### Components

Each section is a separate Vue component. Components are:

- **Fully responsive** with mobile-first design
- **Prop-driven** for easy data management
- **Styled with Tailwind CSS** for consistency
- **Accessible** with proper semantic HTML

## 📱 Responsive Design

The website is optimized for all screen sizes:

- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service.

### Netlify/Vercel

Connect your GitHub repository to Netlify or Vercel for automatic deployments:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Please feel free to open an issue or submit a pull request.

## 📧 Contact

- **LinkedIn**: [linkedin.com/in/sean-hodges](https://www.linkedin.com/in/sean-hodges/)
- **GitHub**: [github.com/your-profile](https://github.com/your-profile)

---

Built with ❤️ by Sean Hodges