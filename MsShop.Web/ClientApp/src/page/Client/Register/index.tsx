import React from "react";
import {
  Agreement,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Button,
} from "./Styles";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>TẠO TÀI KHOẢN</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="user name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            eveniet ipsum earum repudiandae suscipit obcaecati cumque officiis
            nostrum, a explicabo expedita eius fuga excepturi perspiciatis,
            soluta voluptas reprehenderit voluptates ratione!
            <b>Privacy Policy</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
