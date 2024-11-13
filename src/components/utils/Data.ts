export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Online Hair Salon System',
    techStack: 'MERN Stack, React, Express.js, MongoDb Atlas, Node js, Cloudinary(backend)',
    imageUrl: 'hair-salon-hero.svg',
    href: 'https://github.com/yashvaghani9115/Online_Hair_Salon_System',
  },
  {
    id: 2,
    title: 'Online Email System',
    techStack: 'MEAN (MongoDB, Express, Angular, Nodejs)',
    imageUrl: 'gmail.png',
    href: 'https://github.com/SutharUtsav/Online-Email-System',
  },
  {
    id: 3,
    title: 'Online Mobile Recharge System',
    techStack: 'C#, Asp.Net Core MVC, Sqlclient, MSSql, Javascript ',
    imageUrl: 'mobile-recharge.png',
    href: 'https://github.com/SutharUtsav/Online_Mobile_Recharge_System',
  },
  {
    id: 4,
    title: 'Canteen Management System',
    techStack: 'Django, Python, MySql',
    imageUrl: 'canteen-banner.webp',
    href: 'https://github.com/smitvaghani/CanteenManagementSystem',
  },
  
];

export interface ITechStackData {
  tech : string;
  color?: string;
}

export const frontend : ITechStackData[] = [
  {
    tech : "Angular",
    color : "border border-blue-500/60"
  },
  {
    tech : "Javascript",
    color : "border border-yellow-500/60"
  },
  {
    tech : "HTML"
  },
  {
    tech : "CSS"
  },
  {
    tech : "React Js",
    color : "border border-purple-500/60"
  },
  {
    tech : "Typescript",
    color : "border border-blue-500/60"
  }
];

export const backend : ITechStackData[] = [
  {
    tech : "C#",
    color : "border border-purple-500/60"
  },
  {
    tech : ".NET",
    color : "border border-purple-500/60"
  },
  {
    tech : "Python",
    color : "border border-yellow-500/60"
  },
  {
    tech : "Node Js",
    color : "border border-green-500/60"
  },
  {
    tech : "Django",
    color : "border border-green-700/60"
  }
];


export const database : ITechStackData[] = [
  {
    tech : "MongoDB",
    color : "border border-green-500/60"
  },
  {
    tech : "MySQL",
    color : "border border-blue-500/60"
  },
  {
    tech : "MS Sql",
    color : "border border-purple-500/60"
  },
  {
    tech : "Redis",
    color : "border border-purple-500/60"
  }
];

export const devops : ITechStackData[] = [
  {
    tech : "Docker",
    color : "border border-green-500/60"
  },
  {
    tech : "Kubernetes",
    color : "border border-blue-500/60"
  },
  {
    tech : "Azure DevOps",
    color : "border border-purple-500/60"
  },
  {
    tech : "Azure Kuberenetes Service",
    color : "border border-purple-500/60"
  }
];

export interface IExperienceData {
  id: number;
  companyName: string;
  role: string;
  techStack: string;
  description : string;
  location?: string;
  href?: string;
  startDate : string;
  endDate : string;
}

export const experienceData : IExperienceData[] = [
  {
    id: 1,
    companyName: "Confidosoft Solutions Pvt Ltd",
    role: "Software Developer",
    techStack: "C#, .Net, SignalR, gRPC, WCF, Angular",
    description: `• Proficient in backend development with .NET Core and Node.js, plus strong skills in SQL and NoSQL databases.  
    • Skilled in implementing microservices architecture and asynchronous messaging with RabbitMQ.  
    • Well-versed in DevOps practices, including CI/CD pipelines and deploying .NET applications using Docker and Kubernetes.  
    • Led migration of OData WCF services to gRPC, achieving a 90% reduction in response time with a generic BaseService.  
    • Developed real-time locking with SignalR, enabling caching and user notifications with refresh and reconnect support.  
    • Transformed a WPF application into a web app with Angular and WPF WebView, resulting in an 85% reduction in loading times and a 95% improvement in user experience.`,
    location: "Vadodara, India",
    href: "https://www.linkedin.com/company/confidosoft",
    startDate: "11/2023",
    endDate: "Present",
  },
  {
    id: 2,
    companyName: "Neopric Inc.",
    role: "Software Engineer",
    techStack: "C#, React.js, .NET Core, Docker, Kubernetes, Azure",
    description: `• Expertise in architecting and developing robust APIs with .NET Core and React.js.  
    • Skilled in Docker, Kubernetes Helm, Azure Kubernetes Service (AKS), and Azure for efficient application deployment.  
    • Well-versed in creating CI/CD pipelines for automated code delivery to production.`,
    location: "Saint John, Canada",
    href: "https://www.neopric.com",
    startDate: "12/2022",
    endDate: "10/2023",
  },
];
