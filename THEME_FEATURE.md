# Light/Dark Mode Theme Feature

## Overview
This GDG website now supports both Light and Dark themes with seamless switching and persistent storage.

## Features Implemented

### ✅ Theme Toggle System
- **Toggle Button**: Sun/Moon icon in the navbar
- **Default Theme**: Light mode
- **Smooth Transitions**: 0.3s ease transitions between themes
- **Persistent Storage**: Theme preference saved in localStorage

### ✅ Theme Colors

#### Light Mode (Default)
- Background: White (#ffffff)
- Text: Dark (#1a1a1a)
- Secondary Background: Light gray (#f8f9fa)
- Cards: White with subtle shadows

#### Dark Mode
- Background: Dark gray (#0f0f0f)
- Text: White (#ffffff)
- Secondary Background: Dark (#1a1a1a)
- Cards: Dark with enhanced contrast

### ✅ Implementation Details

#### Files Created
- `src/context/ThemeContext.jsx` - React Context for theme management

#### Files Modified
- `src/App.jsx` - Wrapped with ThemeProvider
- `src/index.css` - Added CSS variables and theme system
- `src/components/Navbar.jsx` - Added theme toggle button
- `src/components/Navbar.css` - Styled toggle button
- `src/components/Home.css` - Theme variable support
- `src/components/About.css` - Theme variable support
- `src/components/Events.css` - Theme variable support
- `src/components/Team.css` - Theme variable support
- `src/components/Contact.css` - Theme variable support
- `src/components/Footer.css` - Theme variable support
- `src/components/EventDetail.css` - Theme variable support

#### CSS Variables
All theme colors are defined in `:root` and `[data-theme='dark']` selectors in `index.css`:
- `--bg-primary`, `--bg-secondary`, `--bg-tertiary`
- `--text-primary`, `--text-secondary`, `--text-tertiary`
- `--border-color`, `--shadow-color`
- `--navbar-bg`, `--card-bg`
- And more...

### ✅ User Experience
1. **Toggle Location**: Theme toggle button is in the navbar (right side on desktop, bottom of mobile menu)
2. **Icon Animation**: Smooth rotation and scale animation on click
3. **Instant Switch**: Theme changes immediately across all components
4. **Persistence**: User's theme choice is remembered on next visit
5. **No Layout Changes**: Only colors change, layout remains identical

### ✅ Accessibility
- Proper ARIA labels on toggle button
- Title attribute for tooltip
- High contrast in both modes
- Smooth transitions don't cause jarring changes

## Usage

### For Users
Click the sun/moon icon in the navigation bar to switch themes.

### For Developers
```jsx
// Use the theme in any component
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
- localStorage support required for persistence
- CSS custom properties support required

## Notes
- Contact section maintains its blue gradient background in both themes
- Footer remains dark in both themes (slightly adjusted for dark mode)
- Google brand colors (blue, red, yellow, green) remain consistent across themes
- All transitions are smooth (0.3s ease)
