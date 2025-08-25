# AISLE - Artificial Intelligence System for Learning and Expression

## 📌 Project Overview
AISLE is a web-based platform that leverages **AI and modern web technologies** to enhance interactive learning and self-expression.  
It provides a seamless frontend built with **React (Vite)** and a backend powered by **Express + MongoDB**, with integrations to **OpenAI APIs** for intelligent responses.

---

## 🛠️ Tech Stack
### Frontend
- React 19 (Vite)
- React Markdown
- UUID
- React Spinners
- Rehype Highlight (code highlighting)

### Backend
- Node.js + Express
- MongoDB (Mongoose)
- OpenAI API
- CORS, dotenv
- Nodemon (development server)

---

## 🚀 Features
- AI-powered text responses using OpenAI.
- User-friendly **React frontend** with modern UI.
- **Markdown rendering** and code highlighting.
- Secure backend with **Express + MongoDB**.
- Environment variable support via **dotenv**.
- Fast development setup with **Vite** and **Nodemon**.

---

## 📂 Project Structure
AISLE---Artificial-Intelligence-System-for-Learning-and-Expression/
│
├── Frontend/ # React (Vite) frontend
│ ├── src/ # React components & logic
│ ├── public/ # Static assets
│ └── package.json
│
├── Backend/ # Express + MongoDB backend
│ ├── routes/ # API routes
│ ├── models/ # Database models
│ ├── server.js # Entry point
│ └── package.json
│
└── README.md

yaml
Copy
Edit

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/amaanslyf/AISLE---Artificial-Intelligence-System-for-Learning-and-Expression.git
cd AISLE---Artificial-Intelligence-System-for-Learning-and-Expression
2️⃣ Setup Backend
bash
Copy
Edit
cd Backend
npm install
npm run dev    # runs with nodemon
Create a .env file inside Backend/:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
OPENAI_API_KEY=your_openai_api_key
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../Frontend
npm install
npm run dev
🎯 Usage
Start the backend (Express server).

Start the frontend (Vite + React).

Open browser at http://localhost:5173 (default Vite port).

Interact with the AI system for learning and expression.