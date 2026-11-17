# Course Registration System

### Full-Stack Academic Course Registration Management Application

A full-stack web application developed to simplify and digitalize the academic course registration process. The system provides a centralized platform for students to explore available courses, manage their registrations, and access academic information, while administrators can manage courses, monitor registrations, and view analytics.

This project was developed as an **academic group project** using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

---

## Key Features

### Student Features
- User registration and secure login
- Student dashboard
- Browse available courses
- Register for courses
- Access course registration information
- User-friendly and responsive interface

### Administrator Features
- Administrative dashboard
- Course management
- Course registration management
- Analytics and data visualization
- Administrative access to registration information

### Additional Functionality
- JWT-based authentication
- Password hashing using bcryptjs
- RESTful API communication
- Email integration using Nodemailer
- PDF generation functionality using PDFKit

---

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js 18, JavaScript, HTML5, CSS3 |
| Routing | React Router |
| API Communication | Axios |
| Data Visualization | Chart.js, React Chart.js 2 |
| Backend | Node.js, Express.js 5 |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT, bcryptjs |
| Email Integration | Nodemailer |
| PDF Generation | PDFKit |
| Version Control | Git, GitHub |

---

## Application Screenshots

The following screenshots demonstrate the application's user interface and functionality.


![Course Registration System Screenshot 1](outputs/Screenshot%202025-07-03%20080541.png)

![Course Registration System Screenshot 2](outputs/Screenshot%202025-07-03%20080607.png)

![Course Registration System Screenshot 3](outputs/Screenshot%202025-07-03%20080621.png)

![Course Registration System Screenshot 4](outputs/Screenshot%202025-07-03%20080641.png)

![Course Registration System Screenshot 5](outputs/Screenshot%202025-07-03%20080652.png)

Additional screenshots are available in the [outputs directory](outputs/).

---

## Project Structure

```text
my-project/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Course.js
│   │   ├── Registration.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── courses.js
│   │   └── registration.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json
├── outputs/
├── .gitignore
└── README.md
```

---

## Installation and Setup

### Prerequisites

Ensure that the following software is installed:

- Node.js and npm
- MongoDB (local installation or MongoDB Atlas)
- Git
- A code editor such as Visual Studio Code

### 1. Clone the Repository

```bash
git clone https://github.com/ManimegalaiVijayarasa/my-project.git
cd my-project
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the `backend` directory.

Example configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Configure any additional environment variables required by the authentication and email services.

Start the backend server:

```bash
npm start
```

The backend API runs by default at:

`http://localhost:5000`

A successful startup should display messages similar to:

```text
Server running on port 5000
MongoDB connected
```

### 3. Frontend Setup

Open a second terminal and navigate to the frontend directory from the repository root:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

Open the application in your browser:

`http://localhost:3000`

---

## API Endpoints

The backend provides RESTful API routes for authentication, course management, and registration.

| API Route | Description |
|---|---|
| `/api/auth` | User authentication and account operations |
| `/api/courses` | Course-related operations |
| `/api/registrations` | Course registration operations |
| `/` | Backend availability response |

The specific HTTP methods and endpoints are implemented in the backend route files.

---

## Security

The application uses:

- JSON Web Tokens for authentication
- bcryptjs for password hashing
- Environment variables for sensitive configuration
- Authentication middleware for protected operations

**Important:** Never commit `.env` files, database credentials, JWT secrets, or email passwords to a public repository.

---

## Future Enhancements

Potential improvements include:

- Course timetable conflict detection
- Automated prerequisite validation
- Improved student notification workflows
- Advanced administrative analytics
- Cloud deployment
- Additional automated tests

---

## Project Information

**Project Name:** Course Registration System

**Project Type:** Academic Group Project

**Application Type:** Full-Stack Web Application

**Architecture:** MERN Stack

**Repository:** [Course Registration System — GitHub](https://github.com/ManimegalaiVijayarasa/my-project)

---

## Acknowledgment

This project was developed as part of an academic group project to gain practical experience in full-stack web development, database management, RESTful APIs, authentication, and frontend-backend integration.
