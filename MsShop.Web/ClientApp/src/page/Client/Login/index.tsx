import React from "react";
import { Container, Link, Form, Input, Button, Title, Wrapper } from "./styles";
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ĐĂNG NHẬP</Title>
        <Form>
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Mật khẩu" />
          <Button>Đăng nhập</Button>
          <Link>Nhớ mật khẩu?</Link>
          <Link>Tạo tài khoản</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
