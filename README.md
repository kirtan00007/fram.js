# ✨ Glow Care — Full Stack Skincare E-Commerce Platform

> **Project Requirement Document Implementation**  
> **Authors:** Adesara Kirtan  
> **Mentor:** Mahipal Sir  

---

## 🌿 Project Overview

**Glow Care** is an advanced full-stack E-Commerce web application specially designed for clinical skincare, personal care, and cosmetic wellness. The platform provides an intuitive, luxury user experience connecting patients and skincare enthusiasts with dermatologically vetted active formulations.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Lucide Icons, Canvas Confetti |
| **Backend** | Node.js, Express.js REST API |
| **Database** | Lightweight In-Process JSON Persistence (`data/db.json`), zero external DB setup needed |
| **Authentication** | JWT (JSON Web Token), Role-Based Access Control (RBAC), bcryptjs password hashing |
| **Payment Gateway** | Razorpay checkout simulation (UPI, Cards, Netbanking) |
| **Delivery / Logistics** | Courier tracking simulation (BlueDart / Delhivery) |

---

## 🚀 Quick Start Guide

### 1. Launch Full Stack (Production Mode)
```bash
npm start
```
> The application will run at **http://localhost:5000** (serves both API and pre-compiled frontend).

### 2. Launch Development Mode (Vite + Express concurrently)
```bash
npm run dev
```
> - **Frontend UI:** [http://localhost:5173](http://localhost:5173)  
> - **Backend API:** [http://localhost:5000](http://localhost:5000)  

---

## 👥 Three-Tier User Roles & Demo Credentials

Use the **Demo Role Switcher** in the top navigation bar or log in with:

| Role | Email | Password | Permissions & Features |
| :--- | :--- | :--- | :--- |
| **Visitor** | *(No login required)* | — | Browse products, filter by skin type/concern, debounced search, read clinical reviews, view About & safety policies. |
| **User (Customer)** | `user@glowcare.com` | `user123` | Add to cart, apply promo vouchers, checkout with Razorpay, save personalized skin profile/regimens, write product reviews, track live order dispatch timeline. |
| **Admin (Doctor)** | `admin@glowcare.com` | `admin123` | Executive dashboard with revenue charts, full product catalog CRUD (add, edit, delete formulations), modify order statuses (Processing, Shipped, Delivered), and respond to patient skincare consultations. |

---

## 🌟 Key Features Implemented (PRD Specifications)

1. **Debounced Search API:** Reduces server load by delaying search queries until the user pauses typing (300ms debounce), searching across ingredients, concerns, and formulation names.
2. **Infinite Scroll / Load More:** Dynamic pagination loading skincare formulations seamlessly.
3. **Clinical Product Attributes & Specs:** Volume (e.g. 150ml, 30ml), Skin Type, Formula Type (Jelly, Emulsion, Tonic), and detailed formulation ingredients.
4. **Recommended Routines ("Reco. Routines"):** Suggests complementary AM/PM skincare companions (e.g. Cleanser ➔ Serum ➔ Barrier Cream).
5. **Interactive Shopping Cart:** Free express delivery progress bar (Free above ₹999), promo vouchers (`GLOW15`, `DOCTOR10`), quantity adjustment, and price calculation.
6. **Simulated Razorpay Payment & Checkout Flow:** Secure checkout modal with multi-step validation for UPI, Cards, and Netbanking with transaction confirmation and celebratory confetti.
7. **Live Order Tracking Timeline:** Visual progression from *Order Placed* ➔ *Processing* ➔ *Shipped (BlueDart)* ➔ *Delivered*.
8. **Executive Admin Dashboard:** Real-time revenue analytics, monthly sales trajectory chart, low-stock inventory alerts, product CRUD modal, and consultation ticketing.
9. **Dermatological Consultation Desk:** Visitors and members can submit skin inquiries for review and clinical advice.
10. **Information & Legal Compliance:** Clean formulation standards, patch test instructions (T&C), and 256-bit SSL privacy policies.

---

## 📁 Directory Structure

```
glow-care/
├── backend/
│   ├── data/
│   │   └── db.json               # Seeded JSON database (users, products, orders, reviews)
│   ├── middleware/
│   │   └── auth.js               # JWT verification & Admin RBAC
│   ├── models/
│   │   └── db.js                 # Data access layer & initial seeds
│   ├── routes/
│   │   ├── admin.js              # Analytics & admin operations
│   │   ├── auth.js               # Registration, login & profile
│   │   ├── contact.js            # Skincare consultations
│   │   ├── orders.js             # Checkout & order dispatching
│   │   └── products.js           # Catalog, search, filters & reviews
│   ├── server.js                 # Express server & static asset handler
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/           # UI components (Navbar, Hero, Modals, Admin, Cart, etc.)
│   │   ├── context/              # AuthContext & CartContext
│   │   ├── services/             # API client
│   │   ├── App.jsx               # Main application orchestration
│   │   ├── index.css             # Tailwind design system
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── dev-runner.js                 # Concurrent dev runner
├── package.json                  # Root orchestration scripts
└── README.md
```
