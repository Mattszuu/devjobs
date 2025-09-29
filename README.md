# 🎯 Job Matchmaking Platform (MVP)

This project is built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**.  
The goal is to help **fresh graduates** connect with **employers** offering entry-level opportunities.

---

## ✅ Core Features (MVP Must-Haves)

### 1. User Authentication

- Sign up / Login (email + password, or Google OAuth for easier login).
- Two user roles:
  - 🎓 **Fresh Grad**
  - 🏢 **Employer**

---

### 2. Fresh Grad Profile

- Basic info (name, email, location).
- Skills (tag-based, e.g., `HTML`, `Excel`, `Communication`).
- Education details.
- Upload resume (PDF).
- Job preferences (e.g., remote/on-site, field of interest).

---

### 3. Employer Profile

- Company name + description.
- Contact email.
- Ability to post **entry-level job listings**.

---

### 4. Job Listings

Employers can create job posts with:

- Job title
- Job description
- Required skills (tag-based)
- Location (or remote option)
- Job type (internship, full-time, part-time)

Fresh grads can:

- Search job listings.
- Filter by skills, location, and type.

---

### 5. Job Matching

- Simple keyword/skill-based matching between **grad profiles** and **job listings**.
- Example: If a grad lists `JavaScript`, and an employer posts **Frontend Developer (React, JavaScript)** → it appears as a recommended match.
- Matching logic can start simple (basic MongoDB queries).

---

### 6. Apply to Jobs

- Button: **Apply** → Sends grad’s profile + resume to employer.
- Applications are stored so grads can view their:
  - Applied jobs
  - Application status (e.g., applied, shortlisted, rejected)

---

## 🛠️ Tech Stack

### Frontend

- **React.js** – UI framework for building interactive components.
- **Bootstrap / Tailwind CSS** – Styling and responsive design.
- **Axios / Fetch API** – For making API calls to backend.

### Backend

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Web framework for handling routes and middleware.
- **Multer** – For handling file uploads (e.g., resumes).
- **Nodemailer** – For sending email notifications to employers/grads.

### Database

- **MongoDB** – NoSQL database for storing users, profiles, jobs, and applications.
- **Mongoose** – ODM for schema modeling and database interactions.

### Authentication & Security

- **JWT (JSON Web Tokens)** – For authentication and session management.
- **bcrypt.js** – For password hashing and security.

---

🚀 This MVP will allow fresh graduates to:

- Build a profile → Get job matches → Apply to jobs.

Employers will be able to:

- Post entry-level jobs → View applicants → Connect with fresh talent.
