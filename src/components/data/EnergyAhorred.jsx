import React from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup";
import "./data.css";

function EnergyAhorred(energyConsumed) {
  return (
    <Row gutter={[8, 8]} style={{ height: "20vh" }}>
      <Col span={24}>
        <img
          src="https://cdn.discordapp.com/attachments/945309736801288255/979475097767268412/3_energia_ahorrada-06.png"
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
