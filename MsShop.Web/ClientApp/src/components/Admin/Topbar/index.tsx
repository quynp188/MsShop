import React from "react";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import {
  Container,
  AdminLogo,
  TopLeft,
  TopRight,
  Wrapper,
  TopbarIconContainer,
  TopIconBage,
  TopAvatar,
} from "./styles";
import { Avatar } from "@material-ui/core";

export default function Topbar() {
  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <AdminLogo>MS ADMIN</AdminLogo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBage>2</TopIconBage>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Language />
            <TopIconBage>2</TopIconBage>
          </TopbarIconContainer>
          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>
          <TopAvatar src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1.jpg"/>
        </TopRight>
      </Wrapper>
    </Container>
  );
}
