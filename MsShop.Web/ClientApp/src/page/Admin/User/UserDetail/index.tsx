import {
  LocationSearching,
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { IProps } from "./module";
import {
  Container,
  Title,
  UserTitleContainer,
  AddButton,
  UserContainer,
  UserShow,
  UserDetailForm,
  Top,
  Image,
  Bottom,
  TopTitle,
  UserName,
  UserTitle,
  BottomTitle,
  BottomInfoTitle,
  Info,
  UserDetailTitle,
  UserDetailContainer,
  UserDetailLeft,
  UserDetailRight,
  Lable,
  Input,
  UserDetailItem,
  UploadImageContainer,
  ImageUpload,
  LableImage,
  InputImage,
  SaveButton,
  PublishStyle,
} from "./styles";
const UserDetail = (props: IProps) => {
  return (
    <Container>
      <UserTitleContainer>
        <Title>Edit User</Title>
        <Link to="/admin/create-user">
          <AddButton>Crate</AddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <Top>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNaULoOpOyOknqnLsaGrGXL794y8wP-5iDg&usqp=CAU"
              alt="Avatar"
            />
            <TopTitle>
              <UserName>Anna becker</UserName>
              <UserTitle>Software Engineer</UserTitle>
            </TopTitle>
          </Top>
          <Bottom>
            <BottomTitle>Account Detail</BottomTitle>
            <Info>
              <PermIdentity />
              <BottomInfoTitle>quynp</BottomInfoTitle>
            </Info>
            <Info>
              <CalendarToday />
              <BottomInfoTitle>18.08.1991</BottomInfoTitle>
            </Info>
            <BottomTitle>Contact Detail</BottomTitle>
            <Info>
              <PhoneAndroid />
              <BottomInfoTitle>0349 626 569</BottomInfoTitle>
            </Info>
            <Info>
              <MailOutline />
              <BottomInfoTitle>qunp@gmail.com</BottomInfoTitle>
            </Info>
            <Info>
              <LocationSearching />
              <BottomInfoTitle>Hanoi</BottomInfoTitle>
            </Info>
          </Bottom>
        </UserShow>
        <UserDetailContainer>
          <UserDetailTitle>Edit</UserDetailTitle>
          <UserDetailForm>
            <UserDetailLeft>
              <UserDetailItem>
                <Lable>User Name</Lable>
                <Input type="text" placeholder="Use name" />
              </UserDetailItem>
              <UserDetailItem>
                <Lable>Full name</Lable>
                <Input type="text" placeholder="Full name" />
              </UserDetailItem>
              <UserDetailItem>
                <Lable>Email</Lable>
                <Input type="text" placeholder="Email" />
              </UserDetailItem>
              <UserDetailItem>
                <Lable>Phone</Lable>
                <Input type="text" placeholder="use name" />
              </UserDetailItem>
              <UserDetailItem>
                <Lable>Adress</Lable>
                <Input type="text" placeholder="use name" />
              </UserDetailItem>
            </UserDetailLeft>
            <UserDetailRight>
              <UploadImageContainer>
                <ImageUpload
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNaULoOpOyOknqnLsaGrGXL794y8wP-5iDg&usqp=CAU"
                  alt=""
                />
                <LableImage htmlFor="file">
                  <PublishStyle />
                </LableImage>
                <InputImage type="file" id="file" />
              </UploadImageContainer>
              <SaveButton>Save</SaveButton>
            </UserDetailRight>
          </UserDetailForm>
        </UserDetailContainer>
      </UserContainer>
    </Container>
  );
};

export default UserDetail;
