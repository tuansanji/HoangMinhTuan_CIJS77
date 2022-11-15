import { Routes, Route } from "react-router-dom";

import Products from "./component/products/products";
import Product from "./component/products/product/product";
import Nav from "./component/Nav/Nav";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Invoices from "./pages/Invoices/Invoices";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Auth from "./pages/Auth/Auth";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
