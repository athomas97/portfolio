export const TECHNOLOGIES = {
  REACT: {
    name: "React",
    image: `${process.env.PUBLIC_URL}/img/technologies/react.png`,
  },
  PYTHON: {
    name: "Python",
    image: `${process.env.PUBLIC_URL}/img/technologies/python.png`,
  },
  STRIPE: {
    name: "Stripe",
    image: `${process.env.PUBLIC_URL}/img/technologies/stripe.png`,
  },
}

export const PROJECTS = {
  ECOMMERCE: {
    title: 'MY CLOSET',
    description: 'A React-based ecommerce toy frontend project designed as a second-hand clothing storefront',
    highlights: [
      'Maintain a persistent shopping cart with the ability to add, update, and remove items',
      'Browse a product catalog with filtering and sorting capabilities',
      'Use Stripe Sandbox Mode to simulate the checkout process without processing real payments'
    ],
    technology: [
      TECHNOLOGIES.REACT, TECHNOLOGIES.PYTHON, TECHNOLOGIES.STRIPE
    ],
    image: `${process.env.PUBLIC_URL}/img/projects/ecommerce.png`,
    liveDemoLink: 'https://athomas97.github.io/ecommerce_website/',
    codeLink: 'https://github.com/athomas97/ecommerce_website',
    gradient: 'web-developer',
  },
}