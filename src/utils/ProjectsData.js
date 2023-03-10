import quizDesktop from "../assets/ss/Quzzical-desktop.png";
import todoDesktop from "../assets/ss/todo-desktop.png";
import restDesktop from "../assets/ss/Rest-desktop.png";

export const Data = [
  {
    name: "Quizzical",
    repo: "https://github.com/Just9krish/QuizzicalApp",
    live: "https://quizzicalapponline.netlify.app/",
    image: quizDesktop,
    id: 1,
    techstack: ["Javascript", "ReactJS", "TailwindCSS"],
    brief:
      "The Quizzical is a React-based quiz app that lets users customize the number, type, and difficulty of questions they want to answer. It fetches all of the questions from the OpenDB API and has an easy-to-use interface, making it the perfect choice for anyone looking to test their knowledge.",
  },
  {
    name: "Just9blogs",
    repo: "https://github.com/Just9krish/Blogs-website",
    live: "https://quizzicalapponline.netlify.app/",
    image: quizDesktop,
    id: 2,
    techstack: ["NodeJS", "ExpressJS", "EJS", "MongoDB", "Mongoose"],
    brief:
      "Just9blogs is a blog website that allows users to read blog posts on various topics, but only the administrator can manage the content. The administrator can add, update, and delete posts using their unique login credentials. The website is user-friendly and accessible for all types of users looking for informative content.",
  },
  {
    name: "Find you country",
    repo: "https://github.com/Just9krish/Rest-Contries",
    live: "https://findwhereintheworld.netlify.app/",
    image: restDesktop,
    id: 3,
    techstack: ["ReactJS", "TailwindCSS", "Javascript"],
    brief:
      "Find Your Country is a React-based web app that allows users to search for detailed information about any country in the world. Users can filter countries by region and access important data points like population, currency, and bordering countries. The app uses the Rest Countries API to fetch up-to-date and accurate information. Its clean and intuitive design makes it easy to use for anyone looking to learn more about countries around the world.",
  },
  {
    name: "Todo",
    repo: "https://github.com/Just9krish/TODO",
    live: "https://javascriptodoapp.netlify.app/",
    image: todoDesktop,
    id: 4,
    techstack: ["Javascript", "SCSS", "HTML"],
    brief:
      "The Todo app is a JavaScript and SCSS-based task manager that allows users to easily create, organize, and prioritize their daily tasks. Users can mark tasks as complete, filter tasks by their completion status, and even drag and drop tasks to prioritize them. With its intuitive design and powerful features, the Todo app is the perfect tool for anyone looking to stay organized and manage their daily tasks effectively.",
  },
];
