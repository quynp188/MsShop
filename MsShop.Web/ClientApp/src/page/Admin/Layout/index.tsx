import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "../../../components/Admin/Sidebar";
import Topbar from "../../../components/Admin/Topbar";
import Home from "../Home";
import { Iprop } from "./module";
import { Container, MainContent } from "./styles";

const Layout = (props: Iprop) => {
  const { component: Component,name, ...rest } = props;
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <MainContent>
          <Route
            {...rest}
            render={(routeProps) => <Component title={name} {...routeProps} />}
          />
        </MainContent>
      </Container>
    </>
  );
};

export default Layout;
