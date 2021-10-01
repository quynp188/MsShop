import React from "react";
import { Button, Container, Image, Info, Title } from "./styles";
import { ICategoryItemProps } from "./module";

const CategoryItem = (props: ICategoryItemProps) => {
  const { item } = props;
  return (
    <Container>
      <Image src={item.image} />
      <Info>
        <Title>{item.title}</Title>
        <Button>CHI TIẾT</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
