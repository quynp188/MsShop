import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Iprops } from "./module";
import { Circle, Container, Icon, Image, Info } from "./styles";

const Product = (props: Iprops) => {
  const { item } = props;
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
          <Icon>
              <ShoppingCartOutlined/>              
          </Icon>
          <Icon>
              <SearchOutlined/>              
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>              
          </Icon>
      </Info>
    </Container>
  );
};

export default Product;
