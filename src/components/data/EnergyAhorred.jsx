import React from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup";
import "./data.css";
import Energu from "../../assets/energia.png"

function EnergyAhorred(energyConsumed) {
  return (
    <Row gutter={[8, 8]} style={{ height: "20vh" }}>
      <Col span={24}>
        <img
          src={Energu}
          alt="200"
          className="image-energy"
        />

        <h2 className="kwh-text">
          <CountUp end={energyConsumed.energyConsumed || 0} separator="." /> kWh
        </h2>
      </Col>
    </Row>
  );
}

export default EnergyAhorred;
