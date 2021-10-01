import React from "react";
import CategoryItem from "./CategoryItem";
import { categories } from "./data";
import { ICategoryData } from "./module";
import { Container } from "./styles";
const Categories = () => {
  return (
    <Container>
      {categories.map((item: ICategoryData) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
