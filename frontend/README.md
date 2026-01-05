# 🎬 CineVault – Movie Explorer Platform

CineVault is a full-stack Movie Explorer application that allows users to browse and explore movies, actors, directors, and genres.  
User authentication is intentionally omitted as per the assignment requirements.

---

## 🚀 Features

### Backend
- RESTful APIs built with **Node.js & Express**
- **MongoDB** for data storage
- Swagger (OpenAPI) documentation
- Core entities:
  - Movies
  - Actors
  - Directors
  - Genres
- Relationships:
  - A movie can have multiple genres
  - A movie can have multiple actors
  - A movie has a single director
- Backend-side filtering:
  - Movies by **genre**
  - Movies by **actor**
  - Movies by **director**
  - Movies by **release year**

### Frontend
- Built with **Next.js (React)** using App Router
- **Tailwind CSS** for styling
- Server-side rendering using Server Components
- Features:
  - Browse movies with key details
  - Filter movies by genre, actor, and director
  - View detailed movie pages
  - View actor profile pages with movies they’ve worked on
  - View director profile pages with movies they’ve directed

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Swagger UI


---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- npm

---

### Backend Setup

```bash
cd server
npm install

Create a .env file inside the server directory:

PORT=5000
MONGO_URI=mongodb://localhost:27017/cinevault

Run the backend:

npm run dev


Backend will be available at:

http://localhost:5000

Seed Sample Data (Optional)
cd server
node scripts/seedMovies.js

Swagger API Documentation

After starting the backend, open:

http://localhost:5000/api-docs

Frontend Setup
cd frontend
npm install
npm run dev


Frontend will be available at:

http://localhost:3000

🔍 API Filtering Examples
GET /api/movies?genre=Sci-Fi
GET /api/movies?actor=Leonardo DiCaprio
GET /api/movies?director=Christopher Nolan
GET /api/movies?genre=Action&director=Christopher Nolan


All filtering is handled on the backend as required.

