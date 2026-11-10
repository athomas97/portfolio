export const TECHNOLOGIES = {
  REACT: {
    name: "React",
    image: `${process.env.PUBLIC_URL}/img/technologies/react.png`,
  },
  PYTHON: {
    name: "Python",
    image: `${process.env.PUBLIC_URL}/img/technologies/python.png`,
  },
  FLASK: {
    name: "Flask",
    image: `${process.env.PUBLIC_URL}/img/technologies/flask.svg`,
  },
  SQLALCHEMY: {
    name: "SQLAlchemy",
    image: `${process.env.PUBLIC_URL}/img/technologies/database.png`,
  },
  STRIPE: {
    name: "Stripe",
    image: `${process.env.PUBLIC_URL}/img/technologies/stripe.png`,
  },
}

export const PROJECTS = {
  ECOMMERCE: {
    title: 'MY CLOSET',
    description: 'A e-commerce front-end project designed as a second-hand clothing storefront. Features a persistent shopping cart, interactive product catalog with filtering and sorting, and Stripe Sandbox integration to simulate a real-world checkout experience without processing actual payments',
    technology: [
      TECHNOLOGIES.REACT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.STRIPE
    ],
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
    liveDemoLink: '',
    liveDemoLink: 'https://chit-chat-ci7f.onrender.com/chatroom',
    codeLink: 'https://github.com/athomas97/chatroom_app',
    gradient: 'video-editor',
  },
}