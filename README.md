# Sean Hodges - Portfolio Website

A modern, responsive website built with Vue.js 3, Vite, and Tailwind CSS.

## 🛠️ Technologies Used

- **Frontend**: Vue.js 3 (Composition API with `<script setup>`)
- **Build Tool**: Vite 6.0
- **Styling**: Tailwind CSS 3.4
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons SVG icons
- **Deployment**: GitHub Pages ready

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

All website content is centralized in `src/data.js`.

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

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome! Please feel free to open an issue or submit a pull request.