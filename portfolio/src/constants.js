export const TECHNOLOGIES = {
  REACT: {
    name: "React",
    image: `${process.env.PUBLIC_URL}/img/technologies/react.png`,
  },
  JS: {
    name: "JavaScript",
    image: `${process.env.PUBLIC_URL}/img/technologies/javascript.png`,
  },
  CSS: {
    name: "CSS",
    image: `${process.env.PUBLIC_URL}/img/technologies/css.png`,
  },
  HTML: {
    name: "HTML",
    image: `${process.env.PUBLIC_URL}/img/technologies/html.png`,
  },
  PYTHON: {
    name: "Python",
    image: `${process.env.PUBLIC_URL}/img/technologies/python.png`,
  },
  JAVA: {
    name: "Java",
    image: `${process.env.PUBLIC_URL}/img/technologies/java.png`,
  },
  FLASK: {
    name: "Flask",
    image: `${process.env.PUBLIC_URL}/img/technologies/flask.svg`,
  },
  SQLALCHEMY: {
    name: "SQLAlchemy",
    image: `${process.env.PUBLIC_URL}/img/technologies/database.png`,
  },
  MYSQL: {
    name: "MYSQL",
    image: `${process.env.PUBLIC_URL}/img/technologies/database.png`,
  },
  STRIPE: {
    name: "Stripe",
    image: `${process.env.PUBLIC_URL}/img/technologies/stripe.png`,
  },
  FIGMA: {
    name: "Figma",
    image: `${process.env.PUBLIC_URL}/img/technologies/figma.png`,
  },
  AE: {
    name: "After Effects",
    image: `${process.env.PUBLIC_URL}/img/technologies/ae.png`,
  },
  AI: {
    name: "Illustrator",
    image: `${process.env.PUBLIC_URL}/img/technologies/ai.png`,
  },
  PS: {
    name: "Photoshop",
    image: `${process.env.PUBLIC_URL}/img/technologies/ps.png`,
  },
}

export const TECHSTACK = [
  TECHNOLOGIES.REACT, TECHNOLOGIES.JS, TECHNOLOGIES.CSS, TECHNOLOGIES.HTML,
  TECHNOLOGIES.FLASK, TECHNOLOGIES.PYTHON, TECHNOLOGIES.JAVA,
  TECHNOLOGIES.SQLALCHEMY, TECHNOLOGIES.MYSQL,
  TECHNOLOGIES.FIGMA, TECHNOLOGIES.AE, TECHNOLOGIES.AI, TECHNOLOGIES.PS,
]


export const PROJECTS = {
  ECOMMERCE: {
    title: 'MY CLOSET',
    description: 'A e-commerce front-end project designed as a second-hand clothing storefront. Features a persistent shopping cart, interactive product catalog with filtering and sorting, and Stripe Sandbox integration to simulate a real-world checkout experience without processing actual payments',
    technology: [TECHNOLOGIES.REACT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.STRIPE],
    image: `${process.env.PUBLIC_URL}/img/projects/ecommerce.png`,
    liveDemoLink: 'https://athomas97.github.io/ecommerce_website/',
    codeLink: 'https://github.com/athomas97/ecommerce_website',
    gradient: 'web-developer',
  },
  CHATROOM: {
    title: 'CHIT CHAT',
    description: 'Chit Chat is a full-stack, real-time chatroom application built with Python, Flask, SQLAlchemy, and PostgreSQL. Features a secure user authentication system with account creation and deletion, alongside real-time messaging powered by Socket.IO',
    technology: [TECHNOLOGIES.FLASK, TECHNOLOGIES.PYTHON, TECHNOLOGIES.SQLALCHEMY],
    image: `${process.env.PUBLIC_URL}/img/projects/chatroom.png`,
    liveDemoLink: 'https://chit-chat-ci7f.onrender.com/chatroom',
    codeLink: 'https://github.com/athomas97/chatroom_app',
    gradient: 'video-editor',
  },
}
