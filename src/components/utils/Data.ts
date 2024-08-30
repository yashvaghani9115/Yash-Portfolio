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
    title: 'OCR ( Optical Character Recognition )',
    techStack: 'Flask, Jupyter Notebook, OpenCV, TensorFlow, NumPy',
    imageUrl: 'ocr.jpeg',
    href: 'https://github.com/Shubham-Shingala/OCR-Printed_English_Text',
  },
  {
    id: 2,
    title: 'Freelancing Site',
    techStack: 'MEAN Stack, Angular, NodeJs, MongoDB',
    imageUrl: 'freelancing.jpeg',
    href: 'https://github.com/Shubham-Shingala/Freelancing-Site',
  },
  {
    id: 3,
    title: 'Email System',
    techStack: 'C#, Asp.Net Core MVC, Sqlclient, MSSql, Javascript ',
    imageUrl: 'email.jpeg',
    href: 'https://github.com/Shubham-Shingala/EmailSystemDotNetCore',
  },
  {
    id: 4,
    title: 'National Voter Service Portal',
    techStack: 'Django, Python, MySql',
    imageUrl: 'nvsp.jpeg',
    href: 'https://github.com/Shubham-Shingala/National-Voter-Service-Portal',
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
  },
  {
    tech : "Flask",
    color : "border border-blue-300/60"
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
    // techStack: "Angular, .Net, C#",
    techStack: "Python, Angular",
    // description : "As a full-time employee, I have a strong background in software development, with expertise in Angular, ASP.NET, and C#. \n In Angular, creating components, integrating APIs, injecting services, binding the frontend, and also enhancing the ng-flowchart library to meet the requirements of flow. \n  In .Net and C#, creating microservices, Windows applications, integrating that with rabbitmq, elastic search, etc. \n I've contributed to the success of various projects by building robust web applications.",
    description : "Leveraged Python frameworks such as Django and Flask to build robust backend services, creating RESTful APIs, managing databases, and ensuring secure authentication.Developed and maintained dynamic web applications using Angular for frontend development, creating reusable components, integrating RESTful APIs, and ensuring efficient service injection and data binding. Enhanced the functionality of ng-flowchart library to accommodate complex requirements for flow-based user interfaces. Contributed to the success of various projects by delivering scalable, maintainable, and high-performance web applications.",
    location : "Vadodara, India",
    href : "https://www.linkedin.com/company/confidosoft",
    startDate : "06/2023",
    endDate : "Present",
  },
  {
    id: 2,
    companyName: "Confidosoft Solutions Pvt Ltd",
    role: "Software Developer Intern",
    // techStack: "Angular, .Net, C#",
    techStack: "Python, Angular",
    // description : "I am an experienced software developer with expertise in full-stack development, specializing in ASP.NET and C#. With a strong background in database management using MongoDB and front-end development using Angular, I have successfully delivered robust and scalable web applications, contributing to the growth of diverse projects.",
    description : "Specialized in Python for full-stack development.Proficient in front-end development with Angular. Successfully delivered robust and scalable web applications using Django and Flask. Contributed to the growth and success of diverse projects.",
    location : "Vadodara, India",
    href : "https://www.linkedin.com/company/confidosoft",
    startDate : "12/2022",
    endDate : "05/2023",
  },
]
