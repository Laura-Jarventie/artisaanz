import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import About from "../pages/About";
import Admin from "../pages/Admin";
import ProductsForAdmin from "./ProductsForAdmin";
import EditProduct from "../pages/EditProduct";
import Login from "../pages/Login";
import AddSeller from "../pages/AddSeller";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/munTuotteet" component={ProductsForAdmin} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/meistä" component={About} />
        <Route path="/uusiMyyjä" component={AddSeller} />
        <Route path="/myyjälle" component={Admin} />
        <Route path="/muokkaa/:id" component={EditProduct} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
};

export default Main;
