import styled from "styled-components";
import { ISidebar } from "./module";

export const Container = styled.div`
  flex: 1;
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
export const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const SiderbarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
export const SidebarItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props: ISidebar) =>
    props.active && "rgb(228, 228, 250)"};
  &:hover {
    background-color: rgb(228, 228, 250);
  }
  svg.MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 20px;
  }
`;
