# Nova Heim Real Estate

Welcome to the Nova Heim Real Estate project! This is a modern real estate website for the fictional city of Nova Heim, a futuristic eco-friendly city located by a serene lake. The website allows users to explore various properties, including apartments, houses, and commercial spaces, while providing a seamless user experience.

## Project Structure

The project is divided into two main parts: the client (frontend) and the server (backend).

### Client

The client is built using React and Tailwind CSS, featuring a responsive design and modern UI/UX elements.

- **Public**
  - `index.html`: The main HTML file that loads the application.
  - `manifest.json`: PWA manifest file defining application metadata.

- **Src**
  - `assets`: Folder for static resources like images.
  - `components`: Contains reusable components such as Header, Footer, PropertyCard, etc.
  - `pages`: Contains different pages of the application like Home, Properties, PropertyDetails, etc.
  - `routes`: Defines application routes.
  - `context`: Manages authentication state.
  - `hooks`: Custom hooks for managing application logic.
  - `styles`: Contains Tailwind CSS styles.
  - `App.jsx`: Main application component.
  - `main.jsx`: Entry point for the React application.

### Server

The server is built using Node.js with Express and handles API requests, user authentication, and database interactions.

- **Src**
  - `controllers`: Contains controllers for managing properties, users, and requests.
  - `middleware`: Middleware for authentication and validation.
  - `models`: Data models for properties, users, and requests.
  - `routes`: API routes for handling requests.
  - `utils`: Utility functions for JWT handling.
  - `app.ts`: Main application file setting up the server and middleware.
  - `server.ts`: File for starting the server.

## Installation

### Prerequisites

- Node.js
- Docker (optional)

### Commands to Run

1. For the client:
   ```
   cd client
   npm install
   npm run dev
   ```

2. For the server:
   ```
   cd server
   npm install
   npm run start
   ```

3. To use Docker:
   ```
   docker-compose up
   ```

## Features

- **Dynamic Homepage**: Engaging homepage with parallax effects and dynamic content.
- **Property Catalog**: Browse through apartments, houses, and commercial properties with filtering options.
- **Property Details**: Detailed view of each property with a photo gallery and booking options.
- **User Dashboard**: Personal user dashboard for managing favorites and requests.
- **Admin Panel**: Admin interface for managing property listings.
- **Contact Page**: Contact form and map integration for inquiries.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.