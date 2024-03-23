import bookoe from "../assets/bookoe-app.png";
import arita from "../assets/arita-app.png";

export const dataProjects = [
  {
    title: "'Bookoe' - Book App",
    image: bookoe,
    desc: "Web application that displays a list of books. There are some pages like dashboard, latest, top picks, search and book details.",
    role: ["Consume and slicing data from API", "Implement design use React and TailwindCSS", "Handle route of web app"],
    date: "January 2024 - Now",
    techs: ["Node JS", "React JS", "TailwindCSS", "Express JS", "Vite JS"],
    view: ["Desktop"],
    link: "https://bookoe-book-app.vercel.app/"
  },
  {
    title: "'Arita' - News App",
    image: arita,
    desc: "Web application that displays a list of news titles and their images from several news sources that can be accessed directly from the application.",
    role: ["Consume and slicing data from API", "Implement design use React and TailwindCSS", "Make a responsive design for desktop and mobile", "Handle route of web app"],
    date: "November 2023 - Now",
    techs: ["Node JS", "React JS", "TailwindCSS", "Express JS", "Next JS"],
    view: ["Desktop", "Mobile"],
    link: "https://arita-app.vercel.app/"
  }
];
