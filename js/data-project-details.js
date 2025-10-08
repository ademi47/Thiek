// ============================================
// PROJECT DETAILS DATA
// ============================================
// Detailed information for each project
// The 'id' must match the project ID from data-projects.js

const projectDetailsData = {
    'amend-revise': {
        id: 'amend-revise',
        title: 'Amend-Revise comparison module',
        company: '(Accenture)',
        badgeText: 'Web Development',
        heroImage: 'images/projects/deepComparer-DdELQCoN.jpg',
        heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        demoLink: 'https://www.iras.gov.sg/taxes/stamp-duty/for-shares/other-services/amending-stamp-certificate',
        technologies: [
            '.NET Core',
            'Entity Framework',
            'Reflection',
            'Redis Caching',
            'API Design',
            'Microservices'
        ],
        duration: '6 months (2022)',
        team: '7 developers (Team Lead + 2 Back-end Engineers, 4 Front-end Engineers)',
        
        overview: `The Amend-Revise comparison module is a sophisticated component developed for the IRAS (Inland Revenue Authority of Singapore) tax system. It enables seamless comparison and revision of complex data structures across various tax forms and submissions, ensuring data consistency and accuracy throughout the system. The module serves as a critical backbone for the amendment workflow, allowing users to visualize changes and maintain historical data integrity.`,
        
        challenge: `The core challenge was implementing a highly accurate and efficient deep object comparison mechanism for complex data structures that could exist in various form layouts. This required robust logic and careful performance considerations to avoid bottlenecks.`,
        
        solution: `We engineered a highly efficient reflection-based comparison engine that could intelligently traverse object hierarchies while maintaining performance. By implementing specialized algorithms for different data types and selective deep comparison, we achieved significant performance improvements. A Redis caching layer was integrated to further optimize repeated comparisons and reduce database load during peak processing times.`,
        
        approach: `The project followed a Domain-Driven Design approach with a code-first methodology using Entity Framework. We implemented a repository pattern to abstract data access and built a comprehensive service layer for business logic. The comparison engine utilized a combination of reflection techniques and custom attributes to handle complex object traversal while maintaining performance considerations.`,
        
        keyFeatures: [
            'High-performance deep object comparison',
            'Intelligent change detection with visual differencing',
            'Redis-backed caching layer for optimized performance',
            'Type-specific comparison strategies',
            'Entity Framework 2.0 code-first approach with repository pattern'
        ],
        
        results: `The implemented solution resulted in a 75% reduction in processing time for complex form comparisons, enabling real-time visualization of differences. The system successfully handles thousands of daily amendments while maintaining sub-second response times. The module became a cornerstone for multiple other systems in the tax platform that required similar comparison capabilities.`
    },
    
    'audit-history': {
        id: 'audit-history',
        title: 'Audit History Module',
        company: '(Accenture)',
        badgeText: 'Web Development',
        heroImage: 'images/projects/AuditHistory-Dr69-ILR.jpg',
        heroGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        demoLink: '#',
        technologies: [
            '.NET Core',
            'SQL Server',
            'Entity Framework',
            'API Design',
            'Event Sourcing'
        ],
        duration: '6 months (2022)',
        team: '3 developers (Team Lead + 2 engineers)',
        overview: 'The Audit History Module serves as a critical compliance and transparency component for the tax management system in financial domain. It implements a comprehensive tracking system that captures and records all significant user actions and system changes across the platform. This creates an immutable history of all operations, enabling administrators to review the complete history of any data entity within the system.',
        challenge: 'The primary challenge was to design and implement a robust backend capable of efficiently storing, retrieving, and querying large volumes of historical audit data using complex algorithms and SQL. Ensuring data integrity and high performance under various load conditions was paramount.',
        solution: 'We designed a robust, event-driven architecture that utilized SQL for data storage combined with efficient algorithms for capturing and storing audit data. The solution implemented a partial event sourcing pattern that allowed for reconstructing the state of any entity at any point in time. We also developed a sophisticated querying mechanism to retrieve and present historical data in a meaningful and efficient manner.',
        approach: 'The implementation utilized aspect-oriented programming techniques to minimize intrusion into the core business logic. We designed a custom attribute-based system with team 0 (main library domain team) that could be applied to methods requiring audit logging, with specialized handlers for different entity types. The data storage was optimized through a combination of structured and JSON-based storage, allowing for both efficient querying and flexible schema evolution.',
        keyFeatures: [
            'Comprehensive action and change tracking',
            'Minimal performance impact on core operations',
            'Advanced temporal querying capabilities',
            'Entity state reconstruction at any point in time',
            'Flexible filtering and search mechanisms',
            'Integration with security and compliance reporting'
            
        ],
        results: 'The audit history module successfully captures millions of system events daily while maintaining minimal performance impact. Administrators can now access complete historical data for any entity, with sophisticated filtering and search capabilities. The module has become an essential tool for compliance reporting and has been instrumental in identifying and resolving data discrepancies.'
    },
    
    'property-tax-api': {
        id: 'property-tax-api',
        title: 'Property Tax API Design & Development',
        company: '(Accenture)',
        badgeText: 'API Design',
        heroImage: 'images/projects/propertyTax-mquPtmi2.jpg',
        heroGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        demoLink: '#',
        technologies: [
            '.NET Core',
            'RESTful API',
            'Swagger/OpenAPI',
            'Microservices',
            'Domain-Driven Design'
        ],
        duration: '12 months',
        team: 'Cross-functional team of more than 30 members',
        overview: 'The Property Tax API suite is a comprehensive collection of microservices designed to manage all aspects of property taxation, from property registration and valuation to tax calculation, billing, and payment processing. These APIs serve as the foundation for multiple front-end applications and third-party integrations, providing a consistent and secure interface to the property tax system.',
        challenge: 'The primary challenge was designing a cohesive API architecture that could accommodate the complex business rules and workflows of property taxation while maintaining flexibility for future enhancements. The system needed to handle millions of property records with varying taxation rules, seasonal processing peaks, and integration with multiple external systems.',
        solution: 'We implemented a domain-driven microservices architecture using .NET Core, with carefully designed bounded contexts that aligned with natural business domains. Each API was designed following RESTful principles, with comprehensive documentation using OpenAPI/Swagger. The solution included a robust authentication and authorization system, rate limiting, and monitoring capabilities.',
        approach: 'The development followed a strict API-first approach, with detailed design and specification preceding implementation. We utilized domain-driven design methodologies to ensure the APIs reflected the natural business language and workflows. The implementation included comprehensive integration testing and performance optimization, ensuring the APIs could handle the expected load while maintaining response time requirements.',
        keyFeatures: [
            'Comprehensive property tax domain coverage and intergration with multiple teams',
            'Robust authentication and authorization',
            'Detailed API documentation with Swagger/OpenAPI',
            'Scalable architecture for seasonal processing peaks',
            'Advanced error handling and problem details',
            'Comprehensive monitoring and telemetry'
        ],
        results: 'The Property Tax API suite now successfully processes millions of transactions monthly, serving as the backbone for both internal and external applications. This is a large scale operation in Singapore. The APIs have enabled new integration capabilities with partner agencies, improving data accuracy and reducing processing time. The documented API design has also simplified onboarding for new development teams and external partners.'
    },
    
    'security-incident': {
        id: 'security-incident',
        title: 'Security Incident Reporting Automation',
        company: '(Defence Science and Technology Agency)',
        badgeText: 'Web Development',
        heroImage: 'images/projects/dsta-CM9GrJSm.jpg',
        heroGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        demoLink: '#',
        technologies: [
            'SharePoint',
            'C#',
            'ASP.NET',
            'jQuery',
            'PowerShell',
            'Workflow Automation'
        ],
        duration: '10 months',
        team: 'Dupty head with 3 sharepoint developers',
        overview: 'The Security Incident Reporting System is a specialized application built on SharePoint that automates and streamlines the entire lifecycle of security incident management. From initial reporting through investigation, resolution, and analysis, the system provides a structured and efficient workflow, replacing manual processes that were previously error-prone and time-consuming.',
        challenge: 'The security team was facing significant inefficiencies with their manual incident reporting process, resulting in delayed responses and difficulties in tracking incident status and metrics. The solution needed to work within the constraints of the existing SharePoint environment while providing advanced functionality and maintaining strict security requirements.',
        solution: 'We developed a comprehensive SharePoint-based solution that included custom forms, automated workflows, and advanced reporting capabilities. The solution utilized SharePoints security model for access control, with additional custom security measures to protect sensitive information. The system included automated notifications, escalation paths, and integration with existing security tools.',
        approach: 'The development followed a full-cycle methodology, starting with detailed requirements gathering from the security team, followed by iterative design and implementation phases. We utilized SharePoints native capabilities where possible, complemented by custom development using C#, ASP.NET, and jQuery to extend functionality beyond SharePoints standard capabilities.',
        keyFeatures: [
            'Streamlined incident reporting interface',
            'Automated workflow with configurable approval paths',
            'Full-cycle application development on SharePoint.',
            'Document management for evidence and reports',
            'Automated alerts and notifications'
        ],
        results: 'The implemented solution reduced incident report processing time by 60%, improved data accuracy, and provided real-time visibility into incident status and metrics'
    },
    
    'legacy-migration': {
        id: 'legacy-migration',
        title: 'Legacy System Migration & Enhancement',
        company: '(NCS Pte LTD)',
        badgeText: 'System Migration',
        heroImage: 'images/projects/ncs-CBRhBZMq.jpg',
        heroGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        demoLink: '#',
        technologies: [
            '.NET Framework',
            'SQL Server',
            'Legacy System Migration',
            'Business Process Analysis',
            'UAT Management'
        ],
        duration: '12 months (2017-2018)',
        team: 'Cross-functional team of 8 members',
        overview: 'This enterprise-level project involved the comprehensive migration of a critical insurance management system from an outdated platform to a modern, scalable architecture. Beyond simple migration, the project included significant enhancements to functionality, performance improvements, and user experience modernization while ensuring business continuity throughout the transition.',
        challenge: 'The primary challenge was migrating a complex legacy system with decades of accumulated business rules and data without disrupting critical insurance operations. The system served MOH, multiple major insurance companies, each with unique requirements and customizations. Additionally, the legacy codebase was poorly documented, and many original developers were no longer available.',
        solution: 'We implemented a phased migration approach that combined careful analysis of the existing system with incremental replacement of components. The new system was developed using modern .NET architecture while preserving critical business logic. Comprehensive data migration utilities were created to ensure data integrity, and extensive automated testing was implemented to validate feature parity.',
        approach: 'The project began with thorough analysis and documentation of the existing systems functionality and data structures. We worked closely with business analysts to capture undocumented business rules embedded in the legacy code. The migration followed a parallel development approach, with extensive testing at each phase. User acceptance testing was carefully coordinated across all client organizations to ensure all requirements were met.',
        keyFeatures: [
            'Seamless data migration with integrity verification',
            'Legacy system migration to a new platform.',
            'Development of system enhancements.',
            'Comprehensive documentation for future maintenance',
            'Business process documentation and module design.'
        ],
        results: 'The migration was successfully completed for all client organizations with minimal disruption to business operations. The new system provided significant performance improvements, enhanced security, and a modern user interface. The project has resulted in reduced maintenance costs and positioned the system for future enhancements and integrations.'
    }
};

// ============================================
// HOW TO ADD/EDIT PROJECT DETAILS:
// ============================================
// 1. The 'id' must match the project ID in data-projects.js
// 2. Fill in all fields with your project information
// 3. heroImage: path to project hero image (optional, will use gradient if not provided)
// 4. All other fields should be descriptive text about your project