

   // src/data/constants.js

export const Bio = {
  name: "Jyoti Kumari",
  roles: ["Full Stack Developer", "Programmer", "Developer"],
  description:
    "Passionate about building real-world projects and solving problems using modern web technologies.",
  github: "https://github.com/jyotikumari-rgb",
  resume: "https://drive.google.com/file/d/1vuAXCIvlW-NPLlhDeZU8FYJy_OgvLO80/view?usp=sharing", // replace with actual link
  linkedin: "https://www.linkedin.com/in/jyoti-kumari-1950a1322",
  twitter: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
      { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "React Js", image: "https://angular.io/assets/images/logos/angular/angular.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Flask", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
      { name: "Node Js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express Js", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "Supabase", image: "https://supabase.com/docs/assets/images/supabase-logo.svg" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Postman", image: "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" },
      { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://blogger.googleusercontent.com/img/a/AVvXsEjMOw_Hh_Gs2mDid0l_ZhciLXwcJ1OPEkyamAHM8W2qh_iS5U1bLHAnTVt5lf2ehGMdaKcOqD-xXULSfWjeqC0DcgbyxVh613Mo5yw954l94u-06IwOgCXrSAVjcvL3DTVJGWGTl7fMidTRl-8r-5r0a3pPYHwA6epNYLwyT6eUcsViqc5vC28m71LefQqI",
    school: "National Institute of Technology, Delhi",
    date: "July 2022 – Present",
    grade: "Pursuing",
    desc: "Currently pursuing B.Tech in Electronics and Communication Engineering at NIT Delhi.",
    degree: "B.Tech in Electronics and Communication Engineering",
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721263.png",
    role: "Web Development Intern",
    company: "InternPe",
    date: "June – July (2023)",
    desc: "Completed diverse tasks remotely, enhanced web development skills and gained hands-on experience with tools like HTML, CSS, JS.",
    skills: ["HTML", "CSS", "JavaScript", "Web Dev"],
    number: "01",
  },
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    role: "Research Intern",
    company: "Thermal Battery System Simulation",
    date: "May – July (2024)",
    desc: "Conducted research and built simulation models for thermal battery systems to improve safety and efficiency.",
    skills: ["Simulation", "Research", "Thermal Systems"],
    number: "02",
  },
];

// ---- Projects Data ----
export const projects = [
  {
    title: "Digital Wallet",
    date: "(2024)",
    description: "A secure Flask-based wallet system allowing users to register, login, transfer money, and view transaction history.",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEh1wWGUO2l9WZLD9Mn-EK5AWc_G5PWVyk8JGdpq1sbB_n2bPEwyyLD-dxjXAdoeLNCyKQ3m7HmcU4o5eCEEi8a-vH5jsXeClUTSjASIBuCJ2MdOHCdQq0Iz5f0W2yxMi2bNxSm9EXubqegQf9CPF7HYmIqVZqTAP2Dhv-TSzoeioxL1nReYUf0qxPf1WjCw", // Image in public/images
    tags: ["Flask", "MongoDB", "JWT", "Postman"],
  },
  {
    title: "Chat Analyzer",
    date: "(2024)",
    description: "Streamlit-based WhatsApp chat analyzer providing insights like top senders, word clouds, emoji usage.",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjpjoFHHRYvCp06iN3XA86NAXMF_Fk9-97U5i62X8WurJLtooRaTd4imQMkXNVcApgY-wP1rs2UJLp6CuBQISzZQz04Gv-HVdSFAEmWP7iSzgYHR3g6loAf41X8roxgeAK-E8svrPWdypWNR39ESJiqXVhmwaMuqLfCd5tncpvobil_Kklvoqz6fLr4Go4_", // Image in public/images
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "WordCloud"],
  },
  {
    title: "Space Rocks Game",
    date: "(2024)",
    description: "Arcade-style game where players control a spaceship to destroy asteroids and survive.",
    image: "https://blogger.googleusercontent.com/img/a/AVvXsEjffXaCGt_QTbqLTa8luTw90FU1VAU7nfZ2rfssPUM04iJ-tTdlLqoBitQUF57VPbAzbDGAqLWtuC1GnM6Q6nsVit6NlRs5kEhmldtOXPYn0EK91ZfOdPKRHDZkoyZELD-Knq57keqSD6cEJFxq9hAW7M0I-cmsmPZ_HD3da1euyulbVmhX3AAVwZERtDtD", // Image in public/images
    tags: ["Python", "Pygame", "Game Dev"],
  },
];
