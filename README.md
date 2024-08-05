# MyMovies App Frontend

This repository contains the frontend code for a MERN stack application that interacts with a backend API to provide movie and TV show data, user authentication, and more.

## Table of Contents
- [MyMovies App Frontend](#mymovies-app-frontend)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Routes](#routes)
  - [Error Handling and Notifications](#error-handling-and-notifications)

## Technologies Used

- **React** for building the user interface
- **Redux** for state management
- **React Router** for routing
- **TypeScript** for type safety
- **axios** for HTTP requests
- **Flowbite** and **TailwindCSS** for styling and UI components
- **react-hook-form** for form management
- **zod** for form validation
- **react-toastify** for notifications

## Features

- **User Authentication:**
  - Register, login, and update user profiles
  - Admin functionality for user management

- **Movie and TV Show Exploration:**
  - Browse movies and TV shows with pagination
  - View detailed information for specific movies, TV shows, and cast members
  - Search functionality for movies and TV shows

- **User Interactions:**
  - Add items to watchlists and mark as watched
  - Display personalized watchlists and watched items

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/galrothschild/finalProjectFront
   ```
2. Navigate to the project directory:
   ```sh
   cd [your-project-directory]
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variable:

- `VITE_API_URL`: The URL of the backend API (e.g., `http://localhost:3000`).

## Project Structure

```
root
├── api
├── assets
├── cards
│   ├── components
│   │   └── styles
│   ├── hooks
│   ├── pages
│   └── utils
├── cast
│   └── pages
├── components
│   └── pagination
├── forms
│   └── components
├── layout
│   ├── header
│   └── special
├── movies
│   ├── hooks
│   ├── models
│   ├── pages
│   └── utils
├── pages
├── redux
│   ├── cards
│   ├── movies
│   ├── pages
│   ├── search
│   ├── tv
│   └── user
├── router
│   └── utils
├── toast
│   └── hooks
├── tv
│   ├── hooks
│   ├── models
│   ├── pages
│   └── utils
├── users
│   ├── components
│   ├── data
│   ├── hooks
│   ├── pages
│   └── utils
└── utils
```

## Usage

- **Authentication:**
  - Access token is stored in the application state, and a refresh token is managed in cookies by the backend.
  - Supports registration, login, and profile updates.

- **Exploration:**
  - Search and browse movies and TV shows.
  - View detailed information and explore cast members' work.

## Routes

Here are the main routes available in the application:

- `/`: HomePage
- `/watchlist`: WatchlistPage
- `/login`: LoginPage
- `/signup`: SignupPage
- `/movies`: MoviesPage
- `/movies/:id`: MoviePage
- `/tv`: TVShowsPage
- `/tv/:id`: TVShowPage
- `/about`: AboutPage
- `/users/:id`: UpdateUserPage
- `/admin/`: UserManagementPage
- `/cast/:id`: CastMemberPage

## Error Handling and Notifications

- **API Errors:** Handled gracefully with user feedback.
- **Notifications:** Using `react-toastify` to inform users about the success or failure of their actions.
