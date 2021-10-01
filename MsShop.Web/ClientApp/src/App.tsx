import React from "react";
import Topbar from "./components/Admin/Topbar";
import Cart from "./page/Client/Cart";
import Home from "./page/Client/Home";
import Login from "./page/Client/Login";
import Product from "./page/Client/Product";
import ProductList from "./page/Client/ProductList";
import Register from "./page/Client/Register";
import { AdminRoutes } from "./page/Admin/Routes";
import Layout from "./page/Admin/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IRouter } from "./commons/modules";
import { ClientRoutes } from "./page/Client/Routes";
const App = () => {
  const renderAdminRoutes = () => {
    return AdminRoutes.map((route: IRouter) => (
      <Layout
        key={route.path}
        name={route.name}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  };
  const renderClientRoutes = () => {
    return ClientRoutes.map((route: IRouter) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={(routeProps) => (
          <route.component title={route.name} {...routeProps} />
        )}
      />
    ));
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderAdminRoutes()}
        {renderClientRoutes()}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
