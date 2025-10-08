// ============================================
// PROJECTS DATA
// ============================================
// Edit this file to update your projects
// Simply modify the objects below with your information

const projectsData = [
    {
        id: 'amend-revise',
        title: "Amend-Revise comparison module",
        company: "(Accenture)",
        category: "web", // Options: "web", "api", or "other"
        badgeText: "Web Development",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        image: "images/projects/deepComparer-DdELQCoN.jpg", // Add your project image here (optional)
        description: "This project involved leading a 4-member team in the development of a complex module designed for comparing and revising deep objects across various forms within a .NET Core environment. It was a critical component for ensuring data integrity and streamlining user workflows.",
        technologies: [
            ".NET Core",
            "Entity Framework",
            "Reflection",
            "Redis Caching",
            "API Design",
            "Microservices"
        ],
        link: "project-detail.html?id=amend-revise"
    },
    {
        id: 'audit-history',
        title: "Audit History Module",
        company: "(Accenture)",
        category: "web",
        badgeText: "Web Development",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        image: "images/projects/AuditHistory-Dr69-ILR.jpg", // Add your project image here (optional)
        description: "I led a 3-member team responsible for developing the backend infrastructure for a comprehensive audit history module. This module was essential for tracking and logging all significant system events, providing crucial data for compliance and traceability.",
        technologies: [
            ".NET Core",
            "SQL Server",
            "Entity Framework",
            "API Design",
            "Event Sourcing"
        ],
        link: "project-detail.html?id=audit-history"
    },
    {
        id: 'property-tax-api',
        title: "Property Tax API Design & Development",
        company: "(Accenture)",
        category: "api",
        badgeText: "API Design",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        image: "images/projects/propertyTax-mquPtmi2.jpg", // Add your project image here (optional)
        description: "This was an end-to-end development initiative focused on building a robust API solution for the Property Tax domain. This project involved designing and implementing a comprehensive set of APIs to manage various aspects of property tax, from assessment to payment functionalities.",
        technologies: [
            ".NET Core",
            "RESTful API",
            "Swagger/OpenAPI",
            "Microservices",
            "Domain-Driven Design"
        ],
        link: "project-detail.html?id=property-tax-api"
    },
    {
        id: 'security-incident',
        title: "Security Incident Reporting Automation",
        company: "(Defence Science and Technology Agency)",
        category: "web",
        badgeText: "Web Development",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        image: "images/projects/dsta-CM9GrJSm.jpg", // Add your project image here (optional)
        description: "I developed the full-cycle application development for a SharePoint-based solution with the team members initiated by the security team. Also carried out weekly patching for sharepoint server. The primary goal was to automate the process of reporting security incidents, enhancing efficiency and response times.",
        technologies: [
            "SharePoint",
            "C#",
            "ASP.NET",
            "jQuery",
            "PowerShell",
            "Workflow Automation"
        ],
        link: "project-detail.html?id=security-incident"
    },
    {
        id: 'legacy-migration',
        title: "Legacy System Migration & Enhancement",
        company: "(NCS Pte LTD)",
        category: "other",
        badgeText: "System Migration",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        image: "images/projects/ncs-CBRhBZMq.jpg", // Add your project image here (optional)
        description: "This project involved a critical initiative to migrate a legacy system to a new platform, alongside developing enhancements and organizing User Acceptance Tests (UAT) for various insurance companies (Aviva Ltd, AXA, NTUC Income, Prudential) and IHIS. The client of this project is MOH, Singapore.",
        technologies: [
            ".NET Framework",
            "SQL Server",
            "Legacy System Migration",
            "Business Process Analysis",
            "UAT Management"
        ],
        link: "project-detail.html?id=legacy-migration"
    }
];

// ============================================
// HOW TO ADD NEW PROJECTS:
// ============================================
// Copy the template below and add it to the projectsData array above:
/*
{
    title: "Your Project Title",
    company: "(Company Name)",
    category: "web", // Options: "web", "api", or "other"
    badgeText: "Web Development", // Or "API Design", "Mobile App", etc.
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Pick a gradient you like
    image: "images/projects/your-project.jpg", // OPTIONAL: Add project screenshot/image
    description: "Describe your project here. What did you build? What was the impact?",
    technologies: [
        "Technology 1",
        "Technology 2",
        "Technology 3"
    ],
    link: "#" // Add your project link or GitHub repo
}
*/

// ============================================
// GRADIENT OPTIONS (Copy one of these):
// ============================================
// Purple: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
// Pink: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
// Blue: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
// Green: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
// Orange: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
// Teal: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)"
// Red: "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)"