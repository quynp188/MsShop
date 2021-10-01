import React, { useState } from "react";
import {
  Wrapper,
  Arrow,
  Container,
  Desc,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Button,
  Title,
} from "./Styles";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { data } from "./data";
import { ISlideData } from "./module";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data.map((item: ISlideData, index:number) => (
          <Slide bg={item.bg} key={index}>
            <ImageContainer>
              <Image src={item.image} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Mua ngay</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
