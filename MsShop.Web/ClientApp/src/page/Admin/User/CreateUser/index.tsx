import React from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Item,
  Lable,
  Gender,
  Select,
  Option,
  Button,
} from "./styles";

const CreateUser = () => {
  return (
    <Container>
      <Title>Create new user</Title>
      <Form>
        <Item>
          <Lable>User name</Lable>
          <Input placeholder="user name" />
        </Item>
        <Item>
          <Lable>Password</Lable>
          <Input placeholder="password" />
        </Item>
        <Item>
          <Lable>Full name</Lable>
          <Input placeholder="full name" />
        </Item>
        <Item>
          <Lable>Email</Lable>
          <Input placeholder="email" />
        </Item>
        <Item>
          <Lable>Phone</Lable>
          <Input placeholder="phone" />
        </Item>
        <Item>
          <Lable>Adress</Lable>
          <Input placeholder="adress" />
        </Item>
        <Item>
          <Lable>Gender</Lable>
          <Gender>
            <Input type="radio" name="gender" value="male" id="male" />
            <Lable htmlFor="male">Male</Lable>
            <Input type="radio" name="gender" value="female" id="female" />
            <Lable htmlFor="female">Female</Lable>
            <Input type="radio" name="gender" value="other" id="other" />
            <Lable htmlFor="other">Female</Lable>
          </Gender>
        </Item>
        <Item>
          <Lable>Active</Lable>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Item>
        <Button>Save</Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
