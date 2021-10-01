import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FeatureItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 15px -10px #000000;
  box-shadow: 0px 0px 15px -10px #000000;
`;
export const FeatureTitle = styled.span`
  font-size: 20px;
`;
export const FeatureMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
export const FeatureMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
export const FeatureMoneyRate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
`;
export const ArrowDownwardStyle = styled(ArrowDownward)`
font-size: 14px;
margin-left: 5px;
color: red;
`
export const ArrowUpwardStyle = styled(ArrowUpward)`
font-size: 14px;
margin-left: 5px;
color: green;
`
export const FeatureSub = styled.span`
color: grey;
font-size: 15px;
`;
