# Project Documentation

## Technologies Used

### Core Technologies

### Frontend Framework & Library
React.js (v18.3.1) - Main frontend framework

    "react": "^18.3.1",
    "react-dom": "^18.3.1",

### Build Tool
Vite (v6.0.5) - Build tool and development server

    "vite": "^6.0.5"

### Styling
Tailwind CSS (v3.4.17) - Utility-first CSS framework

    "tailwindcss": "^3.4.17",

### Custom CSS modules
Animation
Framer Motion - For animations and transitions

    "framer-motion": "^11.16.1",

### Routing
React Router DOM (v7.1.1) - For client-side routing

    "react-router-dom": "^7.1.1"

### Data Fetching
Axios (v1.7.9) - HTTP client
TanStack Query (React Query v5.63.0) - For data fetching and state management

    "@tanstack/react-query": "^5.63.0",
    "axios": "^1.7.9",

### Development Tools
ESLint - For code linting
PostCSS - For CSS processing
Autoprefixer - For CSS vendor prefixing

    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",

### Icons
HeroIcons - For UI icons

    "@heroicons/react": "^2.2.0",

### Additional Features
React Intersection Observer - For scroll-based animations


    "react-intersection-observer": "^9.14.1",



## Project Structure

```
src/
├── assets/              # Static assets (images, videos)
├── components/
│   ├── common/         # Reusable components
│   ├── home/          # Home page specific components
│   └── layout/        # Layout components (Header, Footer)
├── pages/             # Page components
└── styles/           # CSS styles
    ├── components/   # Component-specific styles
    └── pages/       # Page-specific styles
```

## Component Flow

1. **Layout Structure**
   - `Layout.jsx`: Main wrapper component
     - Contains `Header` and `Footer`
     - Wraps all page content

2. **Page Hierarchy**
   ```
   Layout
   ├── Header (Navigation)
   ├── Page Content
   │   ├── Hero Section
   │   └── Page-specific sections
   └── Footer
   ```

3. **Navigation Flow**
   - Header remains fixed at top
   - Smooth transitions between pages
   - Dropdown menus for Services and Industries

## Key Features

1. **Hero Sections**
   - Each page has a hero section with:
     - Background gradient
     - Overlay for better text visibility
     - Animated content entry

2. **Responsive Design**
   - Mobile-first approach
   - Breakpoints:
     - Mobile: < 768px
     - Tablet: 768px - 1024px
     - Desktop: > 1024px

3. **Animation System**
   - Entry animations for sections
   - Hover effects on buttons and cards
   - Scroll-triggered animations

## Replacing Emojis with Images

To replace emojis with custom images throughout the application, follow these steps:

1. **Image Preparation**
   - Prepare images in PNG or SVG format
   - Recommended size: 32x32px for icons
   - Store in `src/assets/icons/`

2. **Image Import**
   ```javascript
   import iconName from '../../assets/icons/icon-name.png';
   ```

3. **Locations to Replace Emojis**

   a. **Services Page** (`src/pages/Services.jsx`):
   ```javascript
   // Replace emoji icons in services array
   const services = [
     {
       title: 'Mobile and Desktop Applications',
       path: '/services/applications',
       description: '...',
       icon: <img src={mobileAppIcon} alt="Mobile App" className="w-8 h-8" />
     },
     // ... other services
   ];
   ```

   b. **Company Profile** (`src/components/home/CompanyProfile.jsx`):
   ```javascript
   // Replace emoji icons in profile cards
   <div className="company-profile-card-icon">
     <img src={innovationIcon} alt="Innovation" className="w-10 h-10" />
   </div>
   ```

   c. **Career Page** (`src/pages/Career.jsx`):
   ```javascript
   // Replace emoji icons in benefit cards
   <div className="text-purple-600 text-4xl mb-4">
     <img src={growthIcon} alt="Growth" className="w-12 h-12 mx-auto" />
   </div>
   ```

4. **CSS Adjustments**
   ```css
   /* Add these classes to your respective CSS files */
   .icon-image {
     width: 2rem;
     height: 2rem;
     object-fit: contain;
   }

   .icon-image-large {
     width: 3rem;
     height: 3rem;
     object-fit: contain;
   }
   ```

## Best Practices for Images

1. **Image Optimization**
   - Compress images before use
   - Use WebP format with PNG fallback
   - Implement lazy loading for images

2. **Accessibility**
   - Always include alt text
   - Maintain proper contrast ratios
   - Ensure icons are recognizable

3. **Responsive Images**
   ```javascript
   <img 
     src={smallImage} 
     srcSet={`${smallImage} 300w, ${mediumImage} 600w, ${largeImage} 900w`}
     sizes="(max-width: 768px) 300px, (max-width: 1024px) 600px, 900px"
     alt="Description"
   />
   ```

## Project Setup

1. **Installation (Clone the Repository first)**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

## Adding New Pages

1. Create new page component in `src/pages/`
2. Add corresponding styles in `src/styles/pages/`
3. Add route in navigation
4. Create necessary components in `src/components/`

## Performance Considerations

1. Use lazy loading for images
2. Implement code splitting for routes
3. Optimize animations for performance
4. Minimize bundle size 