// ============================================
// MAIN JAVASCRIPT
// ============================================
// This file handles all the interactive functionality
// You don't need to edit this file unless you want to change functionality

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// LOAD EXPERIENCE DATA
// ============================================
function loadExperience() {
    const container = document.getElementById('timeline-container');
    
    experienceData.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Create technologies HTML
        const techTags = exp.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-header">
                <div>
                    <h3>${exp.title}</h3>
                    <h4>${exp.company}</h4>
                </div>
                <span class="timeline-date" style="background: ${exp.dateColor};">${exp.dateRange}</span>
            </div>
            <p>${exp.description}</p>
            <div class="tech-tags">
                ${techTags}
            </div>
        `;
        
        container.appendChild(timelineItem);
    });
}

// ============================================
// LOAD PROJECTS DATA
// ============================================
function loadProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear existing projects
    
    // Filter projects based on category
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Create technologies HTML
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Determine if we should use an image or gradient background
        const imageStyle = project.image 
            ? `background-image: url('${project.image}'); background-size: cover; background-position: center;`
            : `background: ${project.gradient};`;
        
        projectCard.innerHTML = `
            <div class="project-image" style="${imageStyle}">
                <span class="project-badge">${project.badgeText}</span>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <h4>${project.company}</h4>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${techTags}
                </div>
                <a href="${project.link}" class="project-link">View Project →</a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// ============================================
// PROJECT FILTER FUNCTIONALITY
// ============================================
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value and load projects
        const filter = this.getAttribute('data-filter');
        loadProjects(filter);
    });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadExperience();
    loadProjects('all'); // Load all projects initially
    setupContactForm(); // Setup contact form
    
    console.log('Portfolio loaded successfully!');
    console.log('Experience items:', experienceData.length);
    console.log('Project items:', projectsData.length);
});

// ============================================
// CONTACT FORM HANDLING (HOSTINGER VERSION)
// ============================================
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Get form data
        const formData = new FormData(form);
        
        try {
            // Send to your PHP handler
            const response = await fetch('contact.php', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            
            if (result.success) {
                // Success
                alert(result.message);
                form.reset();
            } else {
                // Server returned error
                alert(result.message);
            }
        } catch (error) {
            // Network or other error
            console.error('Error:', error);
            alert('Oops! Something went wrong. Please try again or email me directly at admin@thiek.me');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}