import React from "react";
import Chart from "../../../components/Admin/Chart";
import FeaturedInfo from "../../../components/Admin/FeaturedInfo";
import { Container } from "./styles";
import { data } from "./data";
const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={data}
        dataKey="ActiveUser"
        grid={true}
      />
    </Container>
  );
};

export default Home;
