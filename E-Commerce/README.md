#live link : shanto-ecommarce.netlify.app
=> If the live link isn't working, please run it on your local machine because I deployed it on Netlify, but I wasn't able to figure out how to use netlify properly.


# E-Commerce React Project

just a basic beginner E-Commerce web application built with **React**, **Vite**, and **Redux Toolkit**.

## Features

- **Product Catalog** - Browse and search products
- **Shopping Cart** - Add, remove, and manage products
- **User Authentication** - Login and registration flows
- **Checkout Process** - Secure and streamlined checkout
- **Contact Page** - Contact form using EmailJS for email delivery
- **Responsive Design** - Works on all devices

## Tech Stack

- [React](https://react.dev/) ^19.2.6 - Frontend library
- [Vite](https://vite.dev/) ^8.0.12 - Build tool & dev server
- [Redux Toolkit](https://redux-toolkit.js.org/) ^2.12.0 - State management
- [React Redux](https://react-redux.js.org/) ^9.3.0 - React bindings for Redux
- [React Router](https://reactrouter.com/) ^7.18.2 - Client-side routing
- [React Icons](https://react-icons.github.io/react-icons/) ^5.7.0 - Icon library
- [EmailJS Browser](https://www.npmjs.com/package/@emailjs/browser) ^4.4.1 - Email sending
- [React DOM](https://react.dev/) ^19.2.6

## Prerequisites

- Node.js >= 18
- npm (or another Node.js package manager)

## Installation

1. Clone the repository:
  
   git clone <your-repo-url>
   cd E-Commerce
  

2. Install dependencies:
  
   npm install
  

3. Create a `.env` file in the project root (see [Environment Variables](#environment-variables) below).

4. Run the development server:
   
   npm run dev
 

## Environment Variables

This project uses EmailJS for sending emails from the contact page. You need to provide your EmailJS credentials.

Create a `.env` file in the project root:


must do:-
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key


A `.env.example` file is provided as a template.




## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

