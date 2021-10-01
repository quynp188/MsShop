import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Container,
  Left,
  Right,
  Center,
  Desc,
  SocialContainer,
  Logo,
  SocialIcon,
  List,
  Title,
  ListItem,
  ContactItem,
  Payment,
  PhoneStyle,
  MailOutlineStyle,
  RoomStyle
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MS Shop</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolor
          fugit, quam alias, iste earum rem minima repellat perspiciatis eius
          harum accusamus maxime optio dolores. Perspiciatis sunt aperiam
          deleniti dolores?
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>{" "}
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Whishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomStyle />
          Số 18, Mỹ Đình 2, Nam Từ Liêm, HN
        </ContactItem>
        <ContactItem>
          <PhoneStyle />
          +84 349 626 569
        </ContactItem>
        <ContactItem>
          <MailOutlineStyle />
          quy.nguyen@gmail.com
        </ContactItem>
        <Payment src="https:/i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
