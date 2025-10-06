# Minimalistic Portfolio Website

A beautiful, modern portfolio website built with ReactJS featuring a clean design, smooth animations, and fully responsive layout.

## 🎨 Features

- **Modern Design**: Clean, minimalistic interface with carefully chosen typography and color palette
- **Smooth Animations**: Fade-in effects on scroll, hover interactions, and seamless transitions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**: 
  - Fixed navigation bar with smooth scroll
  - Hero section with call-to-action
  - About Me section with skills showcase
  - Portfolio grid with project cards
  - Contact form with validation
  - Social media links

## 🎯 Color Palette

- Background: `#F9F5F0`
- Secondary Background: `#F2EAD3`
- Accent (Orange): `#F4991A`
- Text/Dark: `#344F1F`

## 🔤 Typography

- **Main Font**: M PLUS Rounded 1c (headings, body text, navigation)
- **Secondary Font**: Dancing Script (special text when specified)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Work.js
│   │   ├── Work.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Customization

### Update Profile Image

Replace the placeholder image URL in `src/components/About.js`:
```javascript
<img src="YOUR_IMAGE_URL" alt="Profile" />
```

### Add/Edit Projects

Edit the projects array in `src/components/Work.js`:
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    link: 'https://project-url.com',
    category: 'Category'
  },
  // Add more projects...
];
```

### Update Social Links

Edit the social links in `src/components/Contact.js`:
```javascript
<a href="YOUR_GITHUB_URL" target="_blank" rel="noopener noreferrer">
```

### Customize Content

- **Hero Section**: Edit text in `src/components/Hero.js`
- **About Me**: Update bio and skills in `src/components/About.js`
- **Contact Form**: Modify form fields in `src/components/Contact.js`

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🛠️ Technologies Used

- React 18.2
- CSS3 with CSS Variables
- Google Fonts (M PLUS Rounded 1c, Dancing Script)
- Intersection Observer API for scroll animations

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or support, please reach out through the contact form on the website.

---

Built with ❤️ and React

