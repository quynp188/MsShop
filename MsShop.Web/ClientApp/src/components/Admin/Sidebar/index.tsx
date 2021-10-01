import {
  AddShoppingCart,
  LineStyle,
  PersonOutline,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  SidebarItem,
  SidebarMenu,
  SidebarTitle,
  SiderbarList,
  Wrapper,
} from "./styles";
export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <SidebarMenu>
          <SidebarTitle>Dash board</SidebarTitle>
          <SiderbarList>
            <Link to="/admin" className="link">
              <SidebarItem active={true}>
                <LineStyle />
                Home
              </SidebarItem>
            </Link>
            <SidebarItem>
              <Timeline />
              Analytics
            </SidebarItem>
            <SidebarItem>
              <TrendingUp />
              Sale
            </SidebarItem>
          </SiderbarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SiderbarList>
            <Link to="/admin/users" className="link">
              <SidebarItem>
                <PersonOutline />
                User
              </SidebarItem>
            </Link>
            <Link to="/admin/product" className="link">
              <SidebarItem>
                <AddShoppingCart />
                Product
              </SidebarItem>
            </Link>
          </SiderbarList>
        </SidebarMenu>
      </Wrapper>
    </Container>
  );
}
