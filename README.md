\# Course Registration System



A full-stack web application designed to simplify and manage academic course registration. The system provides a user-friendly interface for students and administrative users to interact with course information and registration services.



\## Technologies Used



\*\*Frontend\*\*

\- React.js

\- JavaScript

\- HTML5 and CSS3

\- React Router

\- Axios

\- Chart.js and React Chart.js 2



\*\*Backend\*\*

\- Node.js

\- Express.js

\- MongoDB and Mongoose

\- JSON Web Tokens (JWT)

\- bcryptjs

\- Nodemailer

\- PDFKit



\## Main Features



\- User registration and login

\- Course information and management

\- Course registration functionality

\- Student dashboard

\- Administrative panel

\- Analytics and data visualization

\- Email-related functionality

\- PDF-related functionality



\## Project Structure



```text

CourseRegistrationSystem/

├── backend/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── utils/

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



\## Installation and Setup



\### Prerequisites



\- Node.js and npm

\- MongoDB database

\- Git



\### Clone the Repository



```bash

git clone https://github.com/ManimegalaiVijayarasa/my-project.git

cd my-project

```



\### Backend Setup



```bash

cd backend

npm install

```



Create a `.env` file inside the `backend` directory with the following variables:



```env

PORT=5000

MONGO\_URI=your\_mongodb\_connection\_string

```



Additional environment variables may be required for authentication and email services, depending on the configuration.



Start the backend:



```bash

npm start

```



The backend server runs at `http://localhost:5000` by default.



\### Frontend Setup



Open another terminal in the project root:



```bash

cd frontend

npm install

npm start

```



The React application should open at:



`http://localhost:3000`



\## Screenshots



Screenshots demonstrating the application interfaces are available in the \[`outputs`](outputs/) directory.



\## API Routes



The backend organizes its API endpoints under the following routes:



| Route Prefix | Purpose |

|---|---|

| `/api/auth` | Authentication |

| `/api/courses` | Course operations |

| `/api/registrations` | Registration operations |



\## Security



Environment configuration files, including `.env`, are excluded from version control to help protect sensitive credentials.



\## Project Type



Academic group project — Course Registration System.



\## Repository



\[GitHub — Course Registration System](https://github.com/ManimegalaiVijayarasa/my-project)



