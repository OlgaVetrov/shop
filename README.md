# 🛍️ Shop

A  responsive demo version of a clothing store website  built with React and Redux Toolkit.

The application allows users to browse clothing items, filter products by category, add products to a shopping cart, change quantities, remove items, and view the total price.

## 🚀 Installation

Clone the repository:

git clone https://github.com/OlgaVetrov/shop.git

Install the dependencies:

npm install

Start the development server:

npm run dev

## 🛒 Features

- Browse clothing products
- Filter products by category
- Select All Categories to display all products
- Add products to the shopping cart
- Increase or decrease product quantities
- Remove products from the cart
- View the total number of items
- View the total price
- Persist cart data using localStorage
- Navigate between Shop, About Us, and Contact Us pages
- View the store location on a map
- Responsive layout for different screen sizes

Product Categories:

- 👗 Dress
- 👖 Pants
- 👗 Skirt
- 👠 Shoes
- 👚 Shirt

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

## ✨ Functionality

### 🔎 Product Filtering

Products can be filtered by category using Redux Toolkit. Categories are stored separately and the selected category determines which products are displayed.

### 🛍️ Shopping Cart

Users can add products to the cart, change quantities, and remove products.

Cart totals are calculated using memoized selectors created with createSelector.

### 💾 Cart Persistence

Cart data is saved to localStorage and restored when the application is loaded or refreshed.

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
