
import haki from "../assets/projects/haki.png";
import bank from "../assets/projects/banking.jpg"

export const ABOUT_CONTENT = `I'm a passionate full-stack developer with expertise in front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end development with Python, SQL, .NET, C#, Java, and C++. I enjoy building dynamic, user-friendly web applications and optimizing performance. I love keeping up with tech trends, exploring new frameworks, and enhancing my skills to create impactful solutions.`;

export const ABOUT_TEXT = `I'm a Junior Software Engineer with hands-on experience developing scalable full-stack web applications 
using Javascript and Python. I excel at creating responsive, user-friendly solutions while maintaining a strong focus on 
writing clean, maintainable code. Through intensive bootcamp projects and real-world implementations, I've become well-versed in 
Scrum methodology and collaborative development. `;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Moringa School",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Flask. Implemented RESTful APIs and integrated with Postgres databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Python", "Flask", "Postgres"],
  }
];

export const PROJECTS = [
  {
    title: "Web Banking App",
    image: bank,
    description:
      "Built with Next.js, Horizon is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    technologies: ["Next.js", "TypeScript", "TailwindCss", "Plaid", "Dwolla", "Appwrite", "ShadCN" ],
    link: ["https://github.com/Mworia-Ian/web-banking-app"]
  },
  {
    title: "Haki",
    image: haki,
    description:
      "Haki aims to connect everyday Kenyans with reliable legal representation. Our platform helps you find customized legal services that match your specific needs.",
    technologies: ["React", "Flask", "Postgres", "Firebase"],
    link: ["https://main--hakiproject.netlify.app/"]
  }
  
];

export const CONTACT = {
  address: "Nairobi, Kenya",
  phoneNo: "+254-745-833-383",
  email: "lewiskaranu0@gmail.com",
};
