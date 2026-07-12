# 🚨 Silent SOS Emergency Web App

A safety-focused MERN Stack web application that allows users to send instant silent emergency alerts with live location sharing. The system helps users during dangerous situations where making a phone call or speaking is not possible.

---

## 📌 Project Overview

In emergency situations like harassment, stalking, medical emergencies, or unsafe environments, victims may not be able to communicate verbally.

Silent SOS provides a one-click emergency solution that allows users to:

* Send silent SOS alerts
* Share live GPS location
* Notify trusted emergency contacts
* Track alert status
* Manage emergency activities securely

---

# 🎯 Objectives

## Primary Objectives

* Enable one-click silent emergency alerts
* Provide real-time location sharing
* Reduce emergency response time
* Improve personal safety

## Secondary Objectives

* Provide a non-verbal emergency communication method
* Build trusted contact safety networks
* Maintain emergency activity records
* Support scalable safety solutions

---

# 🚀 Features

## 👤 User Features

✅ User Registration & Login
✅ Secure Authentication using JWT
✅ Personal Safety Dashboard
✅ One-click SOS Trigger
✅ Live GPS Location Sharing
✅ Emergency Contact Management
✅ Alert History Tracking
✅ Profile-based safety management

---

## 🚨 SOS Features

✅ Silent SOS activation
✅ Location-based emergency alerts
✅ Alert status tracking:

* Pending
* Sent
* Acknowledged
* Resolved

✅ Emergency activity logs

---

## 👨‍💼 Admin Features

✅ Admin Login
✅ Admin Dashboard
✅ User Management
✅ SOS Alert Monitoring
✅ Update Alert Status
✅ Delete Alerts
✅ Emergency Reports

---

# 🛠️ Technology Stack

## Frontend

* React.js
* JavaScript
* Tailwind CSS
* React Router
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* MongoDB Atlas

## Security

* JWT Authentication
* Helmet Security Headers
* Express Rate Limiting
* Input Validation

## APIs

* Browser Geolocation API
* Email Notification API

---

# 📂 Project Structure

```
Silent-SOS/

│
├── client/
│
│   ├── src/
│   │
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── api/
│
│
├── server/
│
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── server.js
│
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go inside project:

```bash
cd Silent-SOS
```

---

# Backend Setup

Open terminal:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

EMAIL_USER=your_email

EMAIL_PASS=your_email_password
```

Start backend:

```bash
npm start
```

---

# Frontend Setup

Open another terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

---

# 🔐 Security Implementation

The application includes:

* JWT based authentication
* Protected routes
* Admin authorization
* Input validation
* Secure HTTP headers
* API request rate limiting
* Centralized error handling

---

# 🌍 Future Improvements

Future versions may include:

* Native Android/iOS application
* Automated police integration
* SMS emergency alerts
* AI-based threat detection
* Volunteer responder network
* Real-time communication using Socket.IO

---

# 📸 Application Modules

## User Module

* Authentication
* Dashboard
* Emergency Contacts
* SOS System
* Alert History

## Admin Module

* Dashboard Analytics
* User Monitoring
* Alert Management
* Reports

---

# 🎥 Demo Flow

1. User registers account
2. User logs into dashboard
3. User adds emergency contacts
4. User triggers SOS alert
5. System captures location
6. Alert is stored and monitored
7. Admin manages emergency response

---

# 📌 Project Status

```
Frontend        ✅ Completed
Backend         ✅ Completed
Database        ✅ Completed
Authentication  ✅ Completed
Admin Panel     ✅ Completed
Security        ✅ Completed
```

Project Status:

## 🎉 Completed MERN Stack Emergency Safety Application

---

# 👨‍💻 Developer

Developed as a MERN Stack Web Application Project.

---

# 📄 License

This project is created for educational and portfolio purposes.
