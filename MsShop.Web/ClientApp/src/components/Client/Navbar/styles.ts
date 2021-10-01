import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { mobile } from "../../../responsive";
export const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
export const InputSearch = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
export const RightMenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export const SearchIcon = styled(Search)`
  color: gray;
  font-size: 16px;
`;