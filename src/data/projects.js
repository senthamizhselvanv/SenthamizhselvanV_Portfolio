export const projects = [
  {
    id: 1,
    title: 'Enterprise Dashboard',
    description: 'A comprehensive enterprise dashboard with real-time analytics, user management, and advanced reporting capabilities. Built with React.js and Redux for state management.',
    longDescription: 'This enterprise-grade dashboard solution provides businesses with real-time insights into their operations. Features include customizable widgets, role-based access control, and seamless API integrations.',
    image: '/images/project-dashboard.jpg',
    technologies: ['React.js', 'Redux', 'Bootstrap', 'Chart.js', 'REST API'],
    category: 'Web Application',
    features: [
      'Real-time Dashboard Analytics',
      'User Management System',
      'Advanced Reporting & Export',
      'REST API Integration',
      'Role-based Access Control'
    ],
    github: '[github.com](https://github.com)',
    demo: '[demo.com](https://demo.com)',
    featured: true
  },
  {
    id: 2,
    title: 'Rule Configuration System',
    description: 'A visual rule configuration system with drag-and-drop interface, built using React.js and Konva.js for canvas manipulation.',
    longDescription: 'An intuitive visual configuration tool that allows users to create complex business rules through a drag-and-drop interface. Features undo/redo functionality and real-time validation.',
    image: '/images/project-rules.jpg',
    technologies: ['React.js', 'Konva.js', 'Redux', 'Node.js'],
    category: 'Web Application',
    features: [
      'Visual Rule Configuration',
      'Drag and Drop Interface',
      'Undo/Redo Functionality',
      'Dynamic Rule Validation',
      'Export/Import Rules'
    ],
    github: '[github.com](https://github.com)',
    demo: '[demo.com](https://demo.com)',
    featured: true
  },
  {
    id: 3,
    title: 'Database Configuration Portal',
    description: 'A database configuration management portal with server-side DataTables and performance optimization features.',
    longDescription: 'Enterprise database configuration tool that provides administrators with powerful tools to manage and optimize database settings. Features include server-side pagination and advanced filtering.',
    image: '/images/project-database.jpg',
    technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'DataTables', 'PHP'],
    category: 'Web Application',
    features: [
      'Server-Side DataTables',
      'Configuration Management',
      'Performance Optimization',
      'Batch Operations',
      'Audit Logging'
    ],
    github: '[github.com](https://github.com)',
    demo: '[demo.com](https://demo.com)',
    featured: true
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with cart management, payment integration, and responsive design.',
    longDescription: 'Full-featured e-commerce solution with product catalog, shopping cart, secure checkout, and order management. Optimized for performance and mobile responsiveness.',
    image: '/images/project-ecommerce.jpg',
    technologies: ['React.js', 'Redux', 'Stripe', 'Node.js', 'MongoDB'],
    category: 'E-Commerce',
    features: [
      'Product Catalog',
      'Shopping Cart',
      'Secure Checkout',
      'Order Management',
      'Responsive Design'
    ],
    github: '[github.com](https://github.com)',
    demo: '[demo.com](https://demo.com)',
    featured: false
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A powerful task management tool designed for teams. Features include project boards, task assignments, due date tracking, and real-time collaboration.',
    image: '/images/project-tasks.jpg',
    technologies: ['React.js', 'Firebase', 'Material-UI', 'WebSocket'],
    category: 'Productivity',
    features: [
      'Project Boards',
      'Task Assignments',
      'Real-time Updates',
      'Team Collaboration',
      'Progress Tracking'
    ],
    github: '[github.com](https://github.com)',
    demo: '[demo.com](https://demo.com)',
    featured: false
  }
];

export const projectCategories = ['All', 'Web Application', 'E-Commerce', 'Productivity'];
