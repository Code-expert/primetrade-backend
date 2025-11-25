# Task Manager API - Backend

A scalable REST API with JWT authentication and role-based access control (RBAC) built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Runtime:** Node.js (v16+)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs, helmet, CORS, rate limiting
- **Validation:** express-validator
- **Logging:** Morgan

## 📋 Features

### Core Features

- ✅ User registration and login with JWT authentication
- ✅ Password hashing using bcryptjs
- ✅ Role-based access control (User & Admin)
- ✅ CRUD operations for tasks
- ✅ Input validation and sanitization
- ✅ Centralized error handling
- ✅ API versioning (`/api/v1`)

### Security Features

- ✅ Helmet for security headers
- ✅ CORS configuration
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Password encryption
- ✅ Protected routes with JWT middleware

### Admin Capabilities

- View all tasks from all users (with creator information)
- Update any task regardless of ownership
- Delete any task regardless of ownership
- See task creator's name and email

### User Capabilities

- View only their own tasks
- Create new tasks
- Update their own tasks
- Delete their own tasks

## 📁 Project Structure

# Task Manager API - Backend

A scalable REST API with JWT authentication and role-based access control (RBAC) built with Node.js, Express, and MongoDB.

## 🚀 Tech Stack

- **Runtime:** Node.js (v16+)
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs, helmet, CORS, rate limiting
- **Validation:** express-validator
- **Logging:** Morgan

## 📋 Features

### Core Features

- ✅ User registration and login with JWT authentication
- ✅ Password hashing using bcryptjs
- ✅ Role-based access control (User & Admin)
- ✅ CRUD operations for tasks
- ✅ Input validation and sanitization
- ✅ Centralized error handling
- ✅ API versioning (`/api/v1`)

### Security Features

- ✅ Helmet for security headers
- ✅ CORS configuration
- ✅ Rate limiting (100 requests per 15 minutes)
- ✅ Password encryption
- ✅ Protected routes with JWT middleware

### Admin Capabilities

- View all tasks from all users (with creator information)
- Update any task regardless of ownership
- Delete any task regardless of ownership
- See task creator's name and email

### User Capabilities

- View only their own tasks
- Create new tasks
- Update their own tasks
- Delete their own tasks

## 📁 Project Structure

backend/
├── src/
│ ├── config/
│ │ └── database.js # MongoDB connection
│ ├── controllers/
│ │ ├── authController.js # Authentication logic
│ │ └── taskController.js # Task CRUD operations
│ ├── middleware/
│ │ ├── authMiddleware.js # JWT verification
│ │ ├── roleMiddleware.js # Role authorization
│ │ └── errorHandler.js # Global error handler
│ ├── models/
│ │ ├── User.js # User schema
│ │ └── Task.js # Task schema
│ ├── routes/
│ │ └── v1/
│ │ ├── authRoutes.js # Auth endpoints
│ │ └── taskRoutes.js # Task endpoints
│ ├── validators/
│ │ ├── authValidator.js # Auth validation
│ │ └── taskValidator.js # Task validation
│ └── app.js # Express app setup
├── docs/
│ └── Task_Manager_API.postman_collection.json
├── server.js # Entry point
├── .env # Environment variables (not in git)
├── .env.example # Environment template
├── .gitignore
└── package.json

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Step 1: Clone the Repository

git clone <your-repo-url>
cd backend

### Step 2: Install Dependencies

npm install


### Step 3: Configure Environment Variables


Edit `.env` file:

PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_super_secret_jwt_key_change_in_production
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000

### Step 4: Start MongoDB

Make sure MongoDB is running:

- **Local:** `mongod`
- **MongoDB Atlas:** Use connection string in MONGODB_URI

### Step 5: Run the Server

Development mode with auto-reload
npm run dev

Production mode
npm start

Server will be running on [**http://localhost:5000**](http://localhost:5000)

## 📚 API Documentation

### Base URL

http://localhost:5000/api/v1


### Authentication Endpoints

#### Register User

POST /auth/register
Content-Type: application/json

{
"name": "John Doe",
"email": "john@example.com",
"password": "password123",
"role": "user"
}

**Response (201):**

{
"success": true,
"message": "User registered successfully",
"data": {
"user": {
"id": "673d...",
"name": "John Doe",
"email": "john@example.com",
"role": "user"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
}

#### Login

POST /auth/login
Content-Type: application/json

{
"email": "john@example.com",
"password": "password123"
}


#### Get Current User

GET /auth/me
Authorization: Bearer <token>

### Task Endpoints (Protected)

#### Get All Tasks

GET /tasks
Authorization: Bearer <token>

With filters
GET /tasks?status=pending&priority=high&page=1&limit=10

**Admin Response:**

{
"success": true,
"data": [
{
"_id": "673d...",
"title": "Complete assignment",
"description": "Build REST API",
"status": "pending",
"priority": "high",
"user": {
"_id": "673d...",
"name": "John Doe",
"email": "john@example.com"
},
"dueDate": "2025-11-30T00:00:00.000Z",
"createdAt": "2025-11-25T10:00:00.000Z"
}
]
}



#### Create Task

POST /tasks
Authorization: Bearer <token>
Content-Type: application/json

{
"title": "Complete backend assignment",
"description": "Build scalable REST API",
"status": "pending",
"priority": "high",
"dueDate": "2025-11-30"
}


#### Update Task

PUT /tasks/:id
Authorization: Bearer <token>
Content-Type: application/json

{
"status": "completed"
}


#### Delete Task

DELETE /tasks/:id
Authorization: Bearer <token>


### Query Parameters

| Parameter | Type   | Description                                       |
|-----------|--------|---------------------------------------------------|
| status    | string | Filter by: `pending`, `in-progress`, `completed` |
| priority  | string | Filter by: `low`, `medium`, `high`               |
| page      | number | Page number (default: 1)                          |
| limit     | number | Items per page (default: 10)                      |

## 🔐 Authentication

This API uses **JWT (JSON Web Tokens)** for authentication.

1. Register or login to receive a token
2. Include token in `Authorization` header:
Authorization: Bearer <your-token>

3. Token expires in 7 days (configurable in `.env`)

## 🛡️ Security

- **Password Hashing:** bcryptjs with salt rounds of 10
- **JWT Secret:** Strong secret key (change in production)
- **Rate Limiting:** 100 requests per 15 minutes per IP
- **Helmet:** Security headers
- **CORS:** Configured for frontend origin
- **Input Validation:** express-validator on all inputs

## 🗄️ Database Schema

### User Model

{
name: String (required, max 50 chars),
email: String (required, unique, lowercase),
password: String (required, hashed, min 6 chars),
role: String (enum: ['user', 'admin'], default: 'user'),
createdAt: Date,
updatedAt: Date
}

### Task Model

{
title: String (required, max 100 chars),
description: String (max 500 chars),
status: String (enum: ['pending', 'in-progress', 'completed']),
priority: String (enum: ['low', 'medium', 'high']),
user: ObjectId (ref: 'User', required),
dueDate: Date,
createdAt: Date,
updatedAt: Date
}


## 📦 Postman Collection

Import `docs/Task_Manager_API.postman_collection.json` into Postman to test all endpoints.

## 🧪 Testing

Use Postman or any API client:

1. Register a user
2. Login and copy the token
3. Use token for protected endpoints
4. Test CRUD operations

## 🚀 Deployment

### Environment Variables for Production

NODE_ENV=production
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<strong-random-secret>
FRONTEND_URL=<your-frontend-url>


### Deploy to Railway/Render

1. Push code to GitHub
2. Connect repository to Railway/Render
3. Add environment variables
4. Deploy

## 📝 Scripts

npm start # Start production server
npm run dev # Start development server with nodemon


## ⚖️ License

MIT


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

