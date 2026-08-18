# 🛍️ Shop

A modern and responsive online clothing store built with React and Redux Toolkit.

The application allows users to browse clothing items, filter products by category, add products to a shopping cart, change quantities, remove items, and view the total price.

## 🚀 Installation

Clone the repository:

git clone https://github.com/OlgaVetrov/shop.git

Install the dependencies:

npm install

Start the development server:

npm run dev

## 🛒 Usage

Browse the available clothing items on the Shop page.

Products can be filtered by category:

- 👗 Dress
- 👖 Pants
- 👗 Skirt
- 👠 Shoes
- 👚 Shirt

Select **All Categories** to display all products.

Click **Add to Cart** to add a product to the shopping cart.

Inside the shopping cart you can:

- ➕ Increase the quantity
- ➖ Decrease the quantity
- 🗑️ Remove an item
- 🔢 View the total number of items
- 💰 View the total price

The shopping cart is saved in `localStorage`, so the selected items remain after refreshing the page.

The website also includes:

- 🏠 Shop page
- ℹ️ About Us page
- 📍 Contact Us page
- 🗺️ Store location map
- 📱 Responsive design

## 💻 Technologies

| Technology | Purpose |
| --- | --- |
| ⚛️ React | Building the user interface and reusable components |
| 🔄 Redux Toolkit | Managing application state |
| 🛒 React Redux | Connecting React components to the Redux store |
| 🧭 React Router | Navigation between pages |
| 💻 JavaScript | Application logic and functionality |
| 🎨 CSS | Styling and responsive layout |
| ⚡ Vite | Development server and build tool |
| 💾 localStorage | Saving the shopping cart between sessions |

## ✨ Main Features

### 🔎 Product Filtering

Products can be filtered by category using Redux Toolkit.

### 🛍️ Shopping Cart

Users can add products to the cart, change quantities, and remove products.

### 💾 Cart Persistence

The shopping cart is stored in `localStorage` and restored after refreshing the page.

### 🧭 Navigation

React Router is used to navigate between the Shop, About Us, and Contact Us pages.

### 📱 Responsive Design

The layout adapts to desktop, tablet, and mobile screen sizes.

## 🎨 Customization

Product information can be modified in the `data.jsx` file.

The application styling and responsive layout can be customized in `App.css`.

## 🌐 Live Demo

https://shopbyolga.netlify.app/

## 👩‍💻 Credits

Created with 💙 by:

Olga Vetrov

GitHub: https://github.com/OlgaVetrov
