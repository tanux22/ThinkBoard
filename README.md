# ThinkBoard — Notes App

ThinkBoard is a full-stack note-taking application with a spooky Halloween theme built using **React**, **DaisyUI**, and **Node.js/Express**.  
It allows users to **create, view, update, and delete** notes with an engaging, seasonal UI and instant feedback — no page refresh required.

---

## ✨ Features

- 📝 **Create Notes** — Add new notes with a title and content.
- 🎯 **Edit Notes** — Update note title or content.
- 💀 **Delete Notes Instantly** — Removes the note from the UI immediately after deletion.
- 🎃 **Halloween Theme** — Styled with DaisyUI's Halloween theme for a festive vibe.
- ⚡ **Real-Time UI Updates** — No need to refresh the page.
- 📅 **Timestamps** — Displays created and last updated dates.
- 🚦 **Rate Limit Feedback** — Friendly alerts when deleting too fast.
- 🔄 **Responsive Design** — Works across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Vite**
- **DaisyUI** (Halloween theme)
- **Tailwind CSS**
- **Lucide Icons**
- **React Hot Toast** (notifications)
- **Axios** (HTTP requests)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run the frontend:

```bash
npm run dev
```

---

## 🧪 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get a note by ID  |
| POST   | `/api/notes`     | Create a new note |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

---

## 🎨 Theming

This project uses **DaisyUI's Halloween theme**:

```js
daisyui: {
  themes: ["halloween"],
}
```

You can change themes by modifying `tailwind.config.js`.



---

## 🤝 Contributing

Contributions are welcome!
To contribute:

1. Fork the repo.
2. Create a new branch.
3. Make your changes.
4. Submit a Pull Request.

---

## 📜 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it.

---


