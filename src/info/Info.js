import self from "../img/handy.jpg";
import mars from "../img/space-mission.jpeg";
import mcu from "../img/mcu-img.jpeg";
import crypto from "../img/crypto.jpeg";
import cilica from "../img/Cilica.jpeg";
import pdf from "../img/Resumescreenshot.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Kingsley",
  lastName: "Ani",
  initials: "KA", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "📧",
      text: "kingsleynick90@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/Incognitocowboy",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/kingsley-ani-62a58a209/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Kingsley.I'm a driven self-starter with professional adaptability, full-stack software developer, Eager to grow and learn more about the web3 and tech industry.",
  skills: {
    proficientWith: [
      "javascript",
      "node.js",
      "express.js",
      "MongoDB",
      "react.js",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
      "SQL",
    ],
    exposedTo: ["Typescrypt", "Tailwindcss", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "fashion",
      emoji: "🧥",
    },
    {
      label: "crypto/nfts",
      emoji: "⛓️",
    },
    {
      label: "music",
      emoji: "🎸",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Space-Mission | ",
      live: "https://space-mission-xuzu.onrender.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      image: mars,
    },
    {
      title: "MCU-app",
      live: " https://mcu-front-end-ruj1.onrender.com",
      image: mcu,
    },
    {
      title: "Cilica | Blog-app",
      live: "https://cilica-front-end.onrender.com/ ",
      image: cilica,
    },
    {
      title: "Crypto-Search-App",
      live: " https://crypto-search-app.onrender.com/",
      image: crypto,
    },
  ],

  resume: [
    {
      image: pdf,
    },
  ],
};
