# Zerodha Frontend

This repository contains the landing page of the Zerodha clone, built using React.js. It replicates the look and feel of the official Zerodha homepage with a modular structure and modern styling.

# Tech Stack

React.js (via Create React App)

Bootstrap 5 (for styling)

Custom CSS

React Router (for internal routing)

Git & GitHub (for version control)

# Folder Structure
bash
'''
zerodha
│
├── backend/
│   ├── models/
│   │      HoldingsModel.js
│   │      OrdersModel.js
│   │      PositionsModel.js
│   │
│   ├── schemas/
│   │      HoldingsSchema.js
│   │      OrdersSchema.js
│   │      PositionsSchema.js     ❗ change from .jsx → .js
│   │
│   ├── config/
│   │      db.js
│   │
│   ├── routes/
│   │      holdingsRoutes.js
│   │      ordersRoutes.js
│   │      positionsRoutes.js
│   │
│   ├── controllers/
│   │      holdingsController.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
│
├── dashboard/              ⭐ Trading dashboard (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │      Apps.jsx
│   │   │      DoughnutChart.jsx
│   │   │      Funds.jsx
│   │   │      Holdings.jsx
│   │   │      Menu.jsx
│   │   │      Orders.jsx
│   │   │      Positions.jsx
│   │   │      Summary.jsx
│   │   │      TopBar.jsx
│   │   │      VerticalGraph.jsx
│   │   │      WatchList.jsx
│   │   │
│   │   ├── pages/          ⭐ Move these here
│   │   │      Dashboard.jsx
│   │   │      Home.jsx
│   │   │
│   │   ├── data/
│   │   │      data.js
│   │   │
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── vite.config.js
│
│
├── frontend/              ⭐ Landing website
│   ├── public/media/images/
│   │
│   ├── src/
│   │   ├── components/
│   │   │      Navbar.jsx
│   │   │      Footer.jsx
│   │   │      OpenAccount.jsx
│   │   │
│   │   ├── pages/
│   │   │
│   │   │   ├── home/
│   │   │   │      HomePage.jsx
│   │   │   │      Hero.jsx
│   │   │   │      Awards.jsx
│   │   │   │      Stats.jsx
│   │   │   │      Education.jsx
│   │   │   │
│   │   │   ├── about/
│   │   │   │      AboutPage.jsx
│   │   │   │      Hero.jsx
│   │   │   │      Team.jsx
│   │   │   │
│   │   │   ├── pricing/
│   │   │   │      PricingPage.jsx
│   │   │   │      Hero.jsx
│   │   │   │      Brokerage.jsx
│   │   │   │
│   │   │   ├── products/
│   │   │   │      ProductsPage.jsx   ❗ fix spelling
│   │   │   │      Hero.jsx
│   │   │   │      LeftSection.jsx
│   │   │   │      RightSection.jsx
│   │   │   │      Universe.jsx
│   │   │   │
│   │   │   ├── signup/
│   │   │   │      Signup.jsx        ❗ Capitalize
│   │   │   │
│   │   │   ├── support/
│   │   │   │      SupportPage.jsx
│   │   │   │      Hero.jsx
│   │   │   │      CreateTicket.jsx
│   │   │
│   │   │   └── NotFound.jsx        ❗ fix spelling
│   │   │
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── vite.config.js
│
└── README.md

'''
