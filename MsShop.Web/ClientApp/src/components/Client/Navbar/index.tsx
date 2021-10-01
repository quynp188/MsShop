import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import {
  Center,
  Container,
  Language,
  Left,
  Logo,
  Right,
  SearchContainer,
  Wrapper,
  InputSearch,
  RightMenuItem,
  SearchIcon,
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <InputSearch placeholder="search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MS</Logo>
        </Center>
        <Right>
          <RightMenuItem>REGISTER</RightMenuItem>
          <RightMenuItem>SIGN IN</RightMenuItem>
          <RightMenuItem>
            <Badge badgeContent={5} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </RightMenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
