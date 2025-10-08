// ============================================
// PROJECT DETAIL PAGE HANDLER
// ============================================

// Get project ID from URL parameter
function getProjectIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load and display project details
function loadProjectDetail() {
    const projectId = getProjectIdFromURL();
    
    if (!projectId || !projectDetailsData[projectId]) {
        // If no valid project ID, redirect to home
        window.location.href = 'index.html#projects';
        return;
    }
    
    const project = projectDetailsData[projectId];
    const container = document.getElementById('project-detail-content');
    
    // Determine hero background (image or gradient)
    const heroBackground = project.heroImage 
        ? `background-image: url('${project.heroImage}');`
        : `background: ${project.heroGradient};`;
    
    // Build technologies HTML
    const techTags = project.technologies.map(tech => 
        `<span class="tech-tag-detail">${tech}</span>`
    ).join('');
    
    // Build key features HTML
    const featuresHTML = project.keyFeatures.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    // Build the complete project detail page
    container.innerHTML = `
        <!-- Project Hero -->
        <div class="project-hero" style="${heroBackground}">
            <div class="project-hero-content">
                <span class="project-badge-detail">${project.badgeText}</span>
                <h1>${project.title}</h1>
                <h2>${project.company}</h2>
            </div>
        </div>
        
        <!-- Project Content -->
        <div class="project-content-wrapper">
            <!-- Action Buttons -->
            <div class="project-actions">
                <a href="${project.demoLink}" class="btn-demo"  target='_blank'>
                    🔗 Live Demo
                </a>
            </div>
            
            <!-- Technologies Used -->
            <div class="technologies-section">
                <h3>🔧 Technologies Used</h3>
                <div class="tech-tags-detail">
                    ${techTags}
                </div>
            </div>
            
            <!-- Project Metadata -->
            <div class="project-metadata">
                <div class="project-metadata-item">
                    <span class="metadata-icon">📅</span>
                    <div class="metadata-content">
                        <strong>Duration</strong>
                        <span>${project.duration}</span>
                    </div>
                </div>
                <div class="project-metadata-item">
                    <span class="metadata-icon">👥</span>
                    <div class="metadata-content">
                        <strong>Team</strong>
                        <span>${project.team}</span>
                    </div>
                </div>
            </div>
            
            <!-- Project Overview -->
            <div class="project-section">
                <h2>Project Overview</h2>
                <p>${project.overview}</p>
            </div>
            
            <!-- The Challenge -->
            <div class="project-section">
                <h2>The Challenge</h2>
                <p>${project.challenge}</p>
            </div>
            
            <!-- Solution -->
            <div class="project-section">
                <h2>Solution</h2>
                <p>${project.solution}</p>
            </div>
            
            <!-- Approach & Methodology -->
            <div class="project-section">
                <h2>Approach & Methodology</h2>
                <p>${project.approach}</p>
            </div>
            
            <!-- Key Features -->
            <div class="project-section">
                <h2>Key Features</h2>
                <ul>
                    ${featuresHTML}
                </ul>
            </div>
            
            <!-- Results & Impact -->
            <div class="project-section">
                <h2>Results & Impact</h2>
                <p>${project.results}</p>
            </div>
        </div>
    `;
    
    // Update page title
    document.title = `${project.title} - Thiekshana Soysa`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjectDetail();
});