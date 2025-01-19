# ALX Listing App

## Project Description

The **ALX Listing App** is a Next.js application designed to replicate the functionality of an Airbnb listing page. This project aims to provide a clean and responsive user interface for displaying property listings, allowing users to interact with various features such as booking and viewing property details. The primary goals of this project include:

- Creating a scalable and maintainable codebase using modern web technologies.
- Implementing reusable components for a consistent user experience.
- Ensuring type safety and code consistency with TypeScript interfaces.
- Organizing assets and code for easy access and maintenance.

## Project Structure

The project is organized into several key directories, each serving a specific purpose:

### `components/`
This directory contains reusable UI components that can be used throughout the application. For example:

- **`common/`**: Includes components like `Card.tsx` for displaying property information and `Button.tsx` for action buttons.

### `interfaces/`
This directory defines TypeScript interfaces that ensure type safety across the application. It includes interfaces for component props, such as `CardProps` and `ButtonProps`, which help maintain consistency in data structures.

### `constants/`
This directory stores reusable constants, such as API URLs, configuration settings, and UI text. This helps in managing values that may need to be updated or reused across different parts of the application.

### `public/assets/`
This directory contains static assets like images and SVGs that are used in the application. Keeping assets organized in this folder makes it easier to manage and reference them in the project.

### `styles/`
This directory contains global styles and Tailwind CSS configurations to ensure a consistent look and feel across the application.

### `pages/`
This directory contains the Next.js pages, including the main entry point of the application (`index.tsx`).

## Running the Project Locally

To run the **ALX Listing App** locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd alx-listing-app
   ```

2. **Install the dependencies and run the development server:**
   ```bash
   npm install && npm run dev
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```
   to view the application.
