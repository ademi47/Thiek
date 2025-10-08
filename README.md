# Portfolio Website of Thiek

A modern, responsive portfolio website showcasing professional experience, projects, and skills.

## 📁 File Structure

```
thiekshana-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   ├── main.js            # Interactive functionality
│   ├── data-projects.js   # Projects data (EDIT THIS)
│   └── data-experience.js # Work experience data (EDIT THIS)
├── images/
│   ├── profile.jpg        # Your profile photo
│   └── about.jpg          # About section image
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Set Up Your Files

1. Create the folder structure as shown above
2. Copy all the code files into their respective folders
3. Add your images to the `images/` folder:
   - `profile.jpg` - Your main profile photo (recommended: 400x400px)
   - `about.jpg` - About section image (recommended: 300x400px)

### 2. Edit Your Content

#### Update Projects (`js/data-projects.js`)

Open `js/data-projects.js` and modify the `projectsData` array:

```javascript
{
    title: "Your Project Title",
    company: "(Company Name)",
    category: "web", // Options: "web", "api", or "other"
    badgeText: "Web Development",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    description: "Your project description here...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    link: "https://your-project-link.com"
}
```

#### Update Work Experience (`js/data-experience.js`)

Open `js/data-experience.js` and modify the `experienceData` array:

```javascript
{
    title: "Your Job Title",
    company: "Company Name, Location",
    dateRange: "Start Date - End Date",
    dateColor: "#0ea5e9", // Choose a color
    description: "Your role description...",
    technologies: ["Tech1", "Tech2", "Tech3"]
}
```

#### Update Personal Information

Edit `index.html` to update:
- Hero section text (lines 28-34)
- About Me section (lines 50-75)
- Skills (lines 77-95)
- Contact email (line 130)

### 3. Test Locally

Open `index.html` in your web browser to preview your portfolio.

## 📤 Deploy to GitHub

```bash
# Navigate to your project folder
cd thiekshana-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deploy to Hostinger

### Method 1: File Manager (Easiest)

1. Log in to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html`
4. Upload all your files (maintaining folder structure)
5. Your site will be live at your domain!

### Method 2: FTP

1. Get FTP credentials from Hostinger (hPanel → FTP Accounts)
2. Use FileZilla or any FTP client
3. Connect and upload files to `public_html`

### Method 3: Git Deploy (Recommended for updates)

1. In Hostinger hPanel, go to **Git** section
2. Click **Create new repository**
3. Connect to your GitHub repository
4. Set deployment path to `public_html`
5. Enable auto-deploy for automatic updates

## 🎨 Customization

### Change Colors

Edit `css/style.css` and search for `#0ea5e9` (blue) to change the primary color:
- Replace with your preferred color code
- Update gradient colors in the Contact section

### Add More Sections

1. Add HTML structure in `index.html`
2. Style in `css/style.css`
3. Add interactivity in `js/main.js` if needed

### Change Fonts

Add Google Fonts in the `<head>` of `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update `font-family` in `css/style.css`.

## 📝 Tips for Adding Content

### Projects

- Use clear, action-oriented descriptions
- Highlight your specific role and contributions
- List technologies in order of importance
- Add working links when possible

### Experience

- Focus on achievements, not just responsibilities
- Use numbers and metrics when possible
- Keep descriptions concise but impactful
- Maintain chronological order (newest first)

### Images

- Use high-quality images
- Optimize file sizes (use tools like TinyPNG)
- Maintain consistent aspect ratios
- Use professional photos

## 🔧 Troubleshooting

### Projects/Experience Not Showing

- Check browser console for errors (F12)
- Ensure all JS files are loaded in correct order
- Verify data syntax in `data-projects.js` and `data-experience.js`

### Styling Issues

- Clear browser cache (Ctrl+Shift+R)
- Check that `style.css` path is correct
- Verify CSS file uploaded to server

### Images Not Loading

- Check file paths in `index.html`
- Verify images uploaded to `images/` folder
- Ensure correct file extensions (.jpg, .png, etc.)

## 📞 Support

For issues or questions:
- Check the code comments in each file
- Review this README carefully
- Test locally before deploying

## ✅ Pre-Deployment Checklist

- [ ] Updated projects in `data-projects.js`
- [ ] Updated experience in `data-experience.js`
- [ ] Replaced placeholder images
- [ ] Updated personal information in `index.html`
- [ ] Updated contact email
- [ ] Tested locally in browser
- [ ] Checked all links work
- [ ] Optimized images
- [ ] Reviewed content for typos

## 📄 License

© 2025 Thiekshana Soysa. All rights reserved.

---

**Made with ❤️ for easy customization and deployment**