# Zerodha Frontend

For the optimal viewing experience, please access this repository on a laptop or desktop.
This repository presents the landing page of a Zerodha clone, developed using React.js to closely replicate the design, layout, and user experience of the official Zerodha platform. The project follows a modular, component-driven architecture and modern frontend development practices to ensure scalability, maintainability, and clean UI implementation.


# Tech Stack

React.js (via Create React App)

Bootstrap 5 (for styling)

Custom CSS

React Router (for internal routing)

Git & GitHub (for version control)

## 📁 Project Structure

```bash
zerodha
│
├── backend/                     # Node.js + Express API
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   │
│   ├── controllers/            # Business logic
│   │   ├── holdingsController.js
│   │   ├── ordersController.js
│   │   └── positionsController.js
│   │
│   ├── models/                 # Mongoose models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   │
│   ├── schemas/                # Schema definitions
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   │
│   ├── routes/                 # API routes
│   │   ├── holdingsRoutes.js
│   │   ├── ordersRoutes.js
│   │   └── positionsRoutes.js
│   │
│   ├── middleware/             # Authentication & validation
│   │   └── authMiddleware.js
│   │
│   ├── utils/                  # Helper functions
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── dashboard/                  # Trading dashboard (React + Vite)
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.jsx
│   │   │   ├── DoughnutChart.jsx
│   │   │   ├── Funds.jsx
│   │   │   ├── Holdings.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── Positions.jsx
│   │   │   ├── Summary.jsx
│   │   │   ├── TopBar.jsx
│   │   │   ├── VerticalGraph.jsx
│   │   │   └── WatchList.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── data/
│   │   │   └── data.js
│   │   │
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── frontend/                   # Marketing / Landing website
│   ├── public/
│   │   └── media/images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── OpenAccount.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── pricing/
│   │   │   ├── products/
│   │   │   ├── signup/
│   │   │   ├── support/
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

# Screenshot
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114309.png)
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114346.png)
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114409.png)
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114538.png)
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114642.png)
![Image Alt](https://github.com/RitikSingh2005/zerodha/blob/main/Screenshot%202026-02-15%20114706.png)
