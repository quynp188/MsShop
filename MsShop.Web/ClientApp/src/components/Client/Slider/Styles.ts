import styled from "styled-components";
import { mobile } from "../../../responsive";
import { IArrowProps, ISlideProps, IWrapperProps } from "./module";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props: IArrowProps) => props.direction === "left" && "10px"};
  right: ${(props: IArrowProps) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5px;
  z-index: 2;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props: IWrapperProps) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
export const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props: ISlideProps) => props.bg};
`;
export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
export const Image = styled.img`
  height: 80%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
