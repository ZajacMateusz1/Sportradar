# Sports Event Calendar 📅

## Overview

This project is a frontend application built for the Sportradar Coding Exercise.
It provides a calendar interface to display sports events, allows users to view event details, and add new events.

## 🛠️ Setup Instructions

1. Clone repository:

   ```bash
   git clone https://github.com/ZajacMateusz1/Sportradar
   ```

2. Change folder:

   ```bash
   cd Sportradar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run development server:

   ```bash
   npm run dev
   ```

## 💻 Built with

- [React (v19)](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router (v7)](https://reactrouter.com/)
- [Tailwind CSS (v4)](https://tailwindcss.com/)

## ⚖️ Decisions

- `TypeScript` was used to improve type safety and catch errors during development
- `Tailwind CSS` helps maintain consistent styling and reduces CSS complexity
- `React Router` was chosen for client-side routing due to its simplicity and good integration with React
- `React Context` was chosen for state management due to small app size
- Data from JSON is transformed into a simpler UI-friendly format
- Events are persisted in `localStorage`
- A custom `useFormField` hook is used to simplify form validation.
