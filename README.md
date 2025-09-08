# Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Features a clean design, smooth animations, and optimized performance.

## Features

- 🎨 **Modern Design**: Clean, professional layout with customizable colors and fonts
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized with Vite for lightning-fast loading
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- ♿ **Accessible**: Built with accessibility best practices
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data
- 🎯 **Customizable**: Easy to customize colors, content, and styling

## Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Personal story, values, and background
- **Skills**: Technical skills with progress indicators
- **Projects**: Portfolio showcase with filtering
- **Experience**: Work history and education
- **Contact**: Contact form and social links

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Name, title, and social links
- `src/components/About.jsx` - Personal story and background
- `src/components/Experience.jsx` - Work experience and education
- `src/components/Projects.jsx` - Portfolio projects
- `src/components/Contact.jsx` - Contact information
- `index.html` - SEO meta tags and title

### Colors and Styling

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Images

Replace placeholder images in the projects section with your own. Update the `image` property in the projects array in `src/components/Projects.jsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Other Platforms

The built files in the `dist` directory can be deployed to any static hosting service.

## Performance

This portfolio is optimized for performance:

- Code splitting with dynamic imports
- Image optimization
- Lazy loading
- Minified CSS and JavaScript
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ and React
