# GearPro

## Project Overview

This project is a backend service designed to manage products for an e-commerce application. Developed using Express.js and TypeScript, this API provides endpoints for creating, updating, retrieving, and deleting product information. The backend leverages MongoDB with Mongoose for database management and incorporates Zod for input validation.

## Objectives

- Develop a RESTful API for managing products.
- Integrate MongoDB using Mongoose to store product data.
- Implement CRUD operations for product management.
- Validate incoming product data using Zod.
- Ensure secure and efficient API endpoints.

## Technologies

- Node.js
- Express.js
- Mongoose
- Zod
- TypeScript

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm or Yarn
- MongoDB (Local instance or a cloud-based MongoDB Atlas)

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/IsaT10/sporting-goods-server
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory of your project and add the following environment variables:

   ```env
   PORT=7000

   DATABASE_URL= Local MongoDB instance or use MongoDB Atlas URI
   ```

   - `PORT`: The port on which your server will run.
   - `MONGODB_URI`: Your MongoDB connection string. You can set up a local MongoDB instance or use a cloud-based MongoDB service like MongoDB Atlas.

4. **Run the Project**

   To start the development server, use the following command:

   ```bash
   npm run start:dev
   ```

5. **Available Scripts**

   - `npm run start`: Runs the project in production mode.
   - `npm run start:dev`: Runs the project in development mode with hot-reloading.
   - `npm run build`: Compiles TypeScript to JavaScript.
   - `npm run lint`: Runs ESLint for code linting.
   - `npm run lint:fix`: Runs ESLint and fixes any fixable issues.

6. **API Endpoints**

   ### Products

   - `GET` : `/api/v1/products`: Retrieve all products.
   - `GET` : `/api/v1/products/:id`: Retrieve specific products.
   - `POST` : `/api/v1/products`: Create a product.
   - `PATCH` : `/api/v1/products/:id`: Update a product.
   - `DELETE` : `/api/v1/products/:id`: Delete a product.

   - `POST` : `/api/v1/products/place-order`: Place products.

[GearPro](https://gearpro-isat10s-projects.vercel.app/ 'GearPro')
https://gearpro-isat10s-projects.vercel.app/
