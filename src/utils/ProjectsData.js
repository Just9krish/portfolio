import quizDesktop from "../assets/ss/Quzzical-desktop.png";
import todoDesktop from "../assets/ss/todo-desktop.png";
import restDesktop from "../assets/ss/Rest-desktop.png";

export const Data = [
  {
    name: "Christian Life LMS",
    slug: "christian-life-lms",
    repo: "https://github.com/Just9krish/Christian-Life-LMS",
    live: "#",
    image: quizDesktop,
    id: 1,
    techstack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS SNS",
      "AWS MediaConvert",
    ],
    brief:
      "# Christian Life LMS\n\n" +
      "A comprehensive Learning Management System designed specifically for churches to foster spiritual growth and community engagement! 🏛️✨\n\n" +
      "## What I Built\n\n" +
      "- **Admin Panel:** Church administrators can create and manage courses, modules, and lessons tailored to spiritual development\n" +
      "- **Planning Center Integration:** Seamless API sync that automatically adds new church members and tracks their learning progress\n" +
      "- **Group Management:** Group leaders can monitor each member's progress through interactive dashboards\n" +
      "- **Real-time Communication:** Live chat system for group members to connect and discuss lessons\n" +
      "- **Gamification System:** Points, badges, and daily-updated leaderboards using CRON jobs to boost engagement\n" +
      "- **AWS Integration:** Video processing via MediaConvert and event-based notifications through SNS\n\n" +
      "## The Impact\n\n" +
      "This isn't just another LMS - it's a community-building tool that makes spiritual learning engaging and interactive. Church leaders can track progress, members stay motivated through gamification, and everyone stays connected through real-time features. It's like bringing modern tech to traditional community learning!",
  },
  {
    name: "CodeCollab",
    slug: "codecollab",
    repo: "https://github.com/Just9krish/CodeCollab",
    live: "https://codequest.tech",
    image: todoDesktop,
    id: 2,
    techstack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Monaco Editor",
      "TailwindCSS",
    ],
    brief:
      "# CodeCollab\n\n" +
      "A real-time collaborative coding playground where developers can code together like they're sitting in the same room! 💻🚀\n\n" +
      "## What I Built\n\n" +
      "- **Real-time Code Editing:** Integrated Monaco Editor with instant synchronization across all participants\n" +
      "- **Collaboration Features:** Project-based access control, invitation system (email/link), and role management\n" +
      "- **Communication Tools:** Real-time chat and notifications using WebSockets for seamless coordination\n" +
      "- **Session Management:** Secure authentication with protected backend routes and reusable auth utilities\n" +
      "- **Modular Architecture:** Built with ShadCN components and Tailwind CSS for scalable UI\n" +
      "- **Database Design:** Scalable schema using Drizzle ORM with PostgreSQL for robust data management\n" +
      "- **Collaboration Panel:** Tabbed interface (Output, Chat, People, Collaboration Requests) for multi-user coordination\n\n" +
      "## The Impact\n\n" +
      "Perfect for pair programming, code reviews, or learning together. It's like Google Docs but for code - with the added bonus of real-time execution and collaboration tools! Developers can now collaborate seamlessly regardless of their location, making remote development teams more effective and connected.",
  },
];
