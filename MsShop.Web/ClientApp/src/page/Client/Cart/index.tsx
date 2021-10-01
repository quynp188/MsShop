import { Add, Remove } from "@material-ui/icons";
import React from "react";
import Announcement from "../../../components/Client/Announcement";
import Footer from "../../../components/Client/Footer";
import Navbar from "../../../components/Client/Navbar";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SumaryItem,
  SumaryTitle,
  SumaryItemText,
  SumaryItemPrice,
  Button
} from "./styles";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>

        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton btype="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://meta.vn/Data/image/2019/12/07/Camera-wifi-mini-3.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THU
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 0216623332322
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://meta.vn/Data/image/2019/12/07/Camera-wifi-mini-3.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>HAKURA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 0216623332322
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> 11.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SumaryTitle>ORDER SUMMARY</SumaryTitle>
            <SumaryItem>
              <SumaryItemText>Subtotal</SumaryItemText>
              <SumaryItemPrice>80$</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem>
              <SumaryItemText>Estimated Shipping</SumaryItemText>
              <SumaryItemPrice>10$</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem>
              <SumaryItemText>Shipping discount</SumaryItemText>
              <SumaryItemPrice>- $10</SumaryItemPrice>
            </SumaryItem>
            <SumaryItem btype = "total">
              <SumaryItemText>Total</SumaryItemText>
              <SumaryItemPrice>80$</SumaryItemPrice>
            </SumaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Cart;
