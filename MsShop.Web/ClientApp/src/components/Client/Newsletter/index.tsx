import { Send } from "@material-ui/icons";
import React from "react";
import { Container } from "./styles";
import {
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <Title>New letter</Title>
      <Desc>Lorem ipsum dolor sit amet consectetur</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
