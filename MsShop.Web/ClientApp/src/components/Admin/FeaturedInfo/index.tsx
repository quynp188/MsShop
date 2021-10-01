import React from "react";
import {
  Container,
  FeatureItem,
  FeatureMoney,
  FeatureMoneyContainer,
  FeatureMoneyRate,
  FeatureSub,
  FeatureTitle,
  ArrowDownwardStyle,
  ArrowUpwardStyle
} from "./styles";

const FeaturedInfo = () => {
  return (
    <Container>
      <FeatureItem>
        <FeatureTitle>Revanue</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>$25,15</FeatureMoney>
          <FeatureMoneyRate>
            -11.4 <ArrowDownwardStyle />
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Sale</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>$25,15</FeatureMoney>
          <FeatureMoneyRate>
            -1.4 <ArrowDownwardStyle />
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Cost</FeatureTitle>
        <FeatureMoneyContainer>
          <FeatureMoney>$25,15</FeatureMoney>
          <FeatureMoneyRate>
            +11.4 <ArrowUpwardStyle />
          </FeatureMoneyRate>
        </FeatureMoneyContainer>
        <FeatureSub>Compared to last month</FeatureSub>
      </FeatureItem>
    </Container>
  );
};

export default FeaturedInfo;
