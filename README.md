HireHub 💼
Smart Job Portal for Students & Recruiters

HireHub is a full-stack job portal web application designed to connect students and recruiters on a single platform.
It streamlines job posting, application tracking, and candidate management through a clean UI and a scalable backend architecture.
This project demonstrates real-world full-stack development, authentication, role-based access, and database-driven workflows.

🚀 Features
  👨‍🎓 Student Features
    User registration & secure login
    Create and manage student profiles
    Browse available job listings
    Apply for jobs
    Track applied jobs status
  
  🧑‍💼 Recruiter Features
    Recruiter authentication
    Post, edit, and delete job openings
    View applicants for each job
    Manage hiring pipeline efficiently
  
  🔐 Authentication & Security
    JWT-based authentication
    Secure password hashing
    Role-based access (Student / Recruiter)

🛠️ Tech Stack
Frontend
  React.js
  Tailwind CSS
  Axios
  React Router
Backend
  Node.js
  Express.js
Database
  MongoDB
  Mongoose ODM
Authentication
  JWT (JSON Web Tokens)
  bcrypt

🧩 System Architecture
  RESTful API architecture
  Separation of concerns (Controllers, Routes, Models)
  Centralized error handling
  Scalable backend structure

📂 Project Structure (Simplified)
  HireHub/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── middleware/
  │   └── server.js
  │
  ├── frontend/
  │   ├── components/
  │   ├── pages/
  │   ├── services/
  │   └── App.jsx
  │
  └── README.md

🔌 Core API Endpoints
  Authentication
  POST   /api/auth/register
  POST   /api/auth/login
  
  Jobs
  POST   /api/jobs        (Recruiter)
  GET    /api/jobs        (Students)
  DELETE /api/jobs/:id    (Recruiter)
  
  Applications
  POST   /api/apply/:jobId
  GET    /api/applications

⚙️ Installation & Setup
  1️⃣ Clone the Repository
  git clone https://github.com/Nikhil0108/HireHub.git
  cd HireHub
  
  2️⃣ Backend Setup
  cd backend
  npm install
  npm start
  
  3️⃣ Frontend Setup
  cd frontend
  npm install
  npm run dev

🔑 Environment Variables
  Create a .env file in the backend directory:
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret

✅ Key Learning Outcomes
  Full-stack MERN development
  Secure authentication with JWT
  Role-based authorization
  REST API design
  Database modeling using MongoDB
  Clean UI with Tailwind CSS

📌 Project Status
  ✅ Core features implemented
  🚧 Enhancements possible (resume upload, filters, admin panel)
