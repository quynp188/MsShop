import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Announcement from "../../../components/Client/Announcement";
import Footer from "../../../components/Client/Footer";
import Navbar from "../../../components/Client/Navbar";
import Newsletter from "../../../components/Client/Newsletter";
import {
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  PurchaseContainer,
  Title,
  Wrapper,
} from "./style";
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://meta.vn/Data/image/2019/12/07/Camera-wifi-mini-3.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Camera 360</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quo fuga voluptatum minus quia vel tenetur, voluptas pariatur! Saepe
            et alias quia nihil blanditiis. Incidunt tempora modi expedita
            voluptates aliquid.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <PurchaseContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>THÊM VÀO GIỎ HÀNG</Button>
          </PurchaseContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
