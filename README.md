# Task 27 - React Router Application

## Overview
NovaSpace is a responsive React application demonstrating
navigation between multiple pages using React Router DOM.

## Features
- Home page
- Dashboard page
- Login form
- Signup form
- Navigation using React Router DOM
- Responsive layout
- Custom 404 page
- Demo form validation

## Technologies Used
- React.js
- Vite
- React Router DOM
- CSS

## Installation

1. Install Node.js.
2. Open the project folder in VS Code.
3. Run the following commands:

   npm install
   npm install react-router-dom
   npm run dev

4. Open the local URL shown in the terminal.

## Routes

| Page | Route |
|------|-------|
| Home | / |
| Dashboard | /dashboard |
| Login | /login |
| Signup | /signup |

## Design Decisions
The application uses a dark theme with purple accents,
responsive layouts, reusable navigation, and separate
components for the main pages.

React Router DOM handles navigation without full-page
reloads. Login and signup are demonstration forms only.

## Testing Checklist
- Home page loads successfully.
- Dashboard navigation works.
- Login and signup routes open correctly.
- Login and signup forms validate required fields.
- Links between login and signup work.
- Unknown routes display the 404 page.
- Layout works on desktop and mobile screens.

## Limitations
No backend, database, persistent accounts, or real
authentication has been implemented.