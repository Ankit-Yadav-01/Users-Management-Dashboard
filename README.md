Users Management Dashboard 

Overview
The Users Management Dashboard is a React-based web application that allows users to view, add, edit, and delete user details. It interacts with the JSONPlaceholder API to fetch user data dynamically. The project follows a clean, modern UI design with pagination and a responsive layout.


Features
✅ User Listing: Displays user details in a structured card-based grid format (2 rows, 3 columns).
✅ Add User: Large Add User button positioned centrally in the grid for easy access.
✅ Edit & Delete Users: Edit existing user details and remove users dynamically.
✅ Pagination: Users are displayed 5 per page, with a Next Page button for navigation.
✅ Responsive Design: Fully optimized for desktop, tablet, and mobile views.
✅ API Integration: Uses JSONPlaceholder API for fetching and handling user data.


Tech Stack 🛠
Frontend: React, JavaScript, CSS
Routing: React Router
API Handling: Fetch API / Axios
State Management: React Hooks (useState, useEffect)
Build Tool: Vite
Installation & Setup 
1. Clone the Repository
git clone https://github.com/Ankit-Yadav-01/Users-Management-Dashboard.git
cd Users-Management-Dashboard

2. Install Dependencies
npm install

3. Run the Project Locally
npm run dev

The app should now be running on http://localhost:5173/ (or another port if assigned).

Users-Management-Dashboard/
│── public/                 # Static assets
│── src/
│   ├── components/         # Reusable components
│   ├── pages/              # Page-level components
│   ├── services/           # API calls
│   ├── styles/             # CSS files for styling
│   ├── App.js              # Main React component
│   ├── main.jsx            # Entry point
│── .gitignore
│── package.json
│── README.md
│── index.html
│── package-lock.json
│── vite.config.js