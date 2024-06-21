const project1 = [
   
  {
    id: 1,
    name: "Appwrite",
    image:
      "/assets/appwrite.png",
  },
  {
    id: 2,
    name: "Tailwind",
    image:
      "/assets/tailwind.svg",
  },
  {
      id: 3,
      name: "Next JS", 
      image: 
      "/assets/nextjs.svg"

  }, 
   
];

const project2 = [
  {
    id: 1,
    name: "JavaScript",
    image:
      "/assets/javascript.svg",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "/assets/css.svg",
  },
  {
      id: 3,
      name: "MapBox GL", 
      image: 
      "/assets/map-box.svg"

  },
];

const project3 = [
  {
    id: 1,
    name: "HTML",
    image:
      "/assets/html.svg",
  },
  {
    id: 2,
    name: "CSS",
    image:
      "/assets/css.svg",
  },
  {
      id: 3,
      name: "JavaScript", 
      image: 
      "/assets/javascript.svg"

  }, 
];



export const projects = [
  {
    link: "https://github.com/Rishit30G/Appwrite-Article-App",
    title: "Appwrite Blog",
    content: "This application is designed to utilize Appwrite, a Backend-as-a-Service (BaaS), eliminating the need for any backend code. Users can perform CRUD operations through an intuitive UI built using Next JS.",
    projects: project1
  },
  {
    link: "https://github.com/Rishit30G/Share-A-Place",
    title: "Share Place",
    content: "Built using Vanilla JS, this is a unique project that shows the current location of user using MaxBoxGL along with that users can also search and share their location with friends at the click of a button.",
    projects: project2
  },
  {
    link: "https://github.com/Rishit30G/Personal-Portfolio",
    title: "Personal Portfolio",
    content: "Boasting over 80+ stars on GitHub, this project, while simple in terms of code, serves as a powerful tool for creating a significant impact and showcasing your personal brand on the internet.",
    projects: project3
  }
];

export const moreProjects = {
  url: "https://github.com/Rishit30G?tab=repositories"
}