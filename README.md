# Zerodha Frontend

This repository contains the landing page of the Zerodha clone, built using React.js. It replicates the look and feel of the official Zerodha homepage with a modular structure and modern styling.

# Tech Stack

React.js (via Create React App)

Bootstrap 5 (for styling)

Custom CSS

React Router (for internal routing)

Git & GitHub (for version control)

# 📁 Project Structure

```bash
zerodha-clone/
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
│   ├── utils/                  # Helper fun
