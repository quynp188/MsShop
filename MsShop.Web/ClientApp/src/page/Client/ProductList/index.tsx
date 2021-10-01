import React from "react";
import Announcement from "../../../components/Client/Announcement";
import Footer from "../../../components/Client/Footer";
import Navbar from "../../../components/Client/Navbar";
import Newsletter from "../../../components/Client/Newsletter";
import Products from "../../../components/Client/Products";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./styles";

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Camera</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select>
            <Option disabled value="DEFAULT">
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled value="DEFAULT">
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product</FilterText>
          <Select>
            <Option disabled value="DEFAULT">Newest</Option>
            <Option>Prise (Asc)</Option>
            <Option>Prise (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
