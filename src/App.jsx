import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./views/Login.jsx";
import Product from "./components/Product.jsx";
import DetailProduct from "./components/DetailProduct.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/product" element={<Product />} />
            <Route path="/details/:id" element={<DetailProduct />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
