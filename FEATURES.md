# Mayur Khekare - Modern Portfolio Website

A stunning, modern portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features advanced animations, real-time widgets, dark mode, and an intelligent chat bot.

## 🌟 Features

### 1. **Aesthetic Design & Theming**
- **Modern Color Scheme**: Blue, black, white, and contrasting colors
- **Day/Night Mode**: Toggle between light and dark themes (stored in localStorage)
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and interactions throughout

### 2. **Interactive Chat Bot**
- **40+ Predefined Q&As**: Covers all aspects of Mayur's experience and expertise
- **Smart Categories**: 
  - Greetings
  - Skills & Technologies
  - Experience & Background
  - Services Offered
  - Projects & Portfolio
  - Achievements & Awards
  - Contact Information
  - Hobbies & Interests
  - And more...
- **Witty Responses**: Humorous fallback responses for unknown questions
- **Smooth UI**: Animated messages, suggestion buttons, and intuitive chat interface
- **Toggle Widget**: Easy-to-access chat bubble with notification badge

### 3. **Real-time Location Widget**
- **Live Time**: Current time in Bengaluru
- **Weather Info**: Temperature, humidity, and wind speed
- **Embedded Map**: Google Maps showing Bengaluru location
- **Auto-Update**: Updates every minute (weather every 10 minutes in production)

### 4. **Projects Showcase**
- **11 Featured Projects** with:
  - Project titles and descriptions
  - Technology stacks
  - Direct links to GitHub and Hugging Face
  - Filter functionality (All, AI/ML, Data, Web)
- **Organized Categories**: Easy navigation through different project types

### 5. **Advanced Motion Graphics**
- **Particle System**: Animated particles with connections creating a network effect
- **Scroll Animations**: 
  - Character-by-character title animations
  - Card entrance animations on scroll
  - Parallax effects
- **Floating Elements**: Icon animations that float subtly
- **Mouse Glow Effect**: Interactive glow that follows the mouse cursor
- **3D Background**: Three.js powered background with particle effects

### 6. **Smooth User Experience**
- **Loading Screen**: Animated loading progress bar with branding
- **Mouse Follower**: Interactive mouse cursor follower with ripple effects
- **Back to Top Button**: Smooth scroll to top
- **Mobile Menu**: Responsive hamburger menu with smooth animations
- **Form Validation**: Contact form with validation and notifications

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles including day/night mode
│   ├── js/
│   │   └── scripts.js      # Main JavaScript with all functionality
│   └── motion/
│       ├── background.js   # Original background animations
│       └── background-enhanced.js  # Advanced motion graphics
└── README.md              # This file
```

## 🎨 Color Theme

- **Primary**: #3b82f6 (Blue)
- **Secondary**: #06b6d4 (Cyan)
- **Accent**: #8b5cf6 (Purple)
- **Dark**: #1e293b
- **Light**: #f0f9ff
- **White**: #ffffff
- **Dark Mode Background**: #0f172a

## 🚀 Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external libraries and APIs)

### Installation

1. Clone or download the repository
2. Open `index.html` in your browser
3. That's it! No build process required.

### Optional: Local Server
For best results with certain features, serve from a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## ✨ Usage Guide

### Theme Toggle
- Click the moon/sun icon in the top-right header
- Theme preference is saved in browser localStorage

### Chat Bot
- Click the chat bubble button in the bottom-right
- Type questions or use suggestion buttons
- Try questions like:
  - "What's your experience?"
  - "Tell me about your skills"
  - "How can I contact you?"
  - "What projects have you built?"

### Navigation
- Use the top navigation menu to jump to sections
- Smooth scrolling is enabled by default
- Mobile menu available on smaller screens

### Projects Section
- Browse all 11 featured projects
- Filter by category: All, AI/ML, Data, Web
- Click "View Project" to visit GitHub or Hugging Face

### Location Widget
- Located in the bottom-left corner
- Shows real-time information for Bengaluru
- Displays current time, temperature, humidity, and wind speed
- Interactive embedded map

## 🔧 Customization

### Change Colors
Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #06b6d4;
    /* ... more colors ... */
}
```

### Add More Chat Questions
In `scripts.js`, find the `chatData` array in `initChatBot()` and add new Q&A pairs:

```javascript
{
    keywords: ['your', 'keywords', 'here'],
    response: 'Your response text here',
    category: 'category_name'
}
```

### Update Projects
In `initProjects()` function, add or modify project objects:

```javascript
{
    title: 'Project Name',
    description: 'Brief description',
    tags: ['Tag1', 'Tag2'],
    link: 'https://github.com/...',
    category: 'ai' // or 'data', 'web'
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 992px - 1199px
- **Small Tablet**: 768px - 991px
- **Mobile**: Below 768px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance
- Alt text for images

## 🎬 Animation Features

1. **Loading Screen**: Progress bar animation
2. **Mouse Follower**: Smooth cursor tracking with ripple effects
3. **Particle System**: Network of animated particles
4. **Scroll Animations**: Cards and titles animate as you scroll
5. **Hover Effects**: 3D perspective transforms on cards
6. **Icon Animations**: Floating effects on icons
7. **Button Effects**: Shimmer and glow on interaction
8. **Parallax**: Elements move at different speeds during scroll

## 📊 Performance

- Optimized animations using requestAnimationFrame
- Debounced and throttled event handlers
- Lazy loading for images
- Minimal dependencies (mostly vanilla JS)
- CSS animations for better performance
- Efficient particle rendering with canvas

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

## 🔒 Privacy

- No data collection or tracking
- Chat data is not stored (only in session)
- Location widget uses public APIs
- No cookies or local storage abuse

## 📝 Content Sections

1. **Hero**: Introduction with animated profile image
2. **About**: Professional summary with highlights
3. **Services**: 6 key service offerings
4. **Experience**: Timeline of professional roles
5. **Skills**: Technology skills with proficiency levels
6. **Projects**: 11 featured projects with filtering
7. **Achievements**: Awards and accomplishments
8. **Contact**: Contact form and information
9. **Chat Bot**: Interactive AI assistant
10. **Location Widget**: Real-time Bengaluru information

## 🎯 Key Features Highlight

### Day/Night Mode
- Automatic detection and smooth transition
- Persistent across sessions
- Accessible toggle in header

### Chat Bot Intelligence
- 40+ predefined responses
- Smart keyword matching
- Witty fallback messages
- Suggestion buttons for quick access
- Smooth message animations

### Real-time Widgets
- Live clock
- Current weather data
- Location map
- Auto-updating information

### Motion Graphics
- Non-intrusive background animations
- Performance-optimized particle system
- Scroll-triggered element animations
- Interactive mouse effects

## 🚀 Future Enhancements

Potential additions:
- Integration with real weather API (OpenWeatherMap, WeatherAPI)
- Backend for chat history
- Database for contact form submissions
- Blog section
- More detailed project case studies
- Video demonstrations
- Testimonials section

## 📞 Contact

For questions about this portfolio template:
- Email: mkhekare@gmail.com
- LinkedIn: linkedin.com/in/mayur-khekare
- GitHub: github.com/mkhekare

## 📄 License

This portfolio template is provided as-is for personal use.

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**

✨ Happy scrolling! Explore all the features and animations throughout the site.
