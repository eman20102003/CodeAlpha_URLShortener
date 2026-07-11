# CodeAlpha - URL Shortener

A simple URL Shortener application built as part of the **CodeAlpha Backend Development Internship**.

## Project Overview

This project allows users to enter a long URL and receive a shorter version. When the shortened link is opened, it redirects the user to the original website.

The project uses a Node.js backend with Express and MongoDB to store and manage shortened URLs. A simple React frontend is included to make testing easier.

---

## Features

- Shorten long URLs
- Generate a unique short code
- Store URLs in MongoDB Atlas
- Redirect short URLs to the original website
- Count the number of visits
- Record the last visit date
- Simple React interface for testing URL shortening functionality

---

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Nanoid
- Dotenv
- Cors

### Frontend

- React
- Vite
- Axios

---

## Installation

### Clone the repository

```bash
git clone https://github.com/YourUsername/CodeAlpha_URLShortener.git
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

Start the server:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Create Short URL

```
POST /api/url/shorten
```

Request Body

```json
{
  "originalUrl": "https://example.com"
}
```

---

### Redirect

```
GET /:shortCode
```

Example

```
http://localhost:5000/Ab12Cd
```

This redirects the user to the original URL.

---

## Deployment

The application has been deployed using **Render**.

### Backend API

The Node.js and Express backend is deployed on Render:

https://shortly-api-jvsl.onrender.com/

The backend provides REST API endpoints for URL shortening, redirecting, and managing URL statistics. It is connected to MongoDB Atlas for data storage.

### Frontend Application

The React frontend is deployed on Render:

https://shortly-api-1.onrender.com/

A simple and user-friendly interface that allows users to enter a long URL, generate a shortened URL, and open the generated short link.

---

Backend Development Internship - CodeAlpha
