import "./App.css";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="Demuestra tu importancia y conciencia del tiempo" />}
              />
              <Route path="/categorias/" element={<CategoryContainer />} />
              <Route
                path="/categorias/:cat"
                element={<ItemListContainer greeting="Demuestra tu importancia y conciencia del tiempo" />}
              />
              <Route path="/oclock/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout/:orderId" element={<Checkout />} />
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </header>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;