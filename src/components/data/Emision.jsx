import React from "react";
import { Row, Col, Tooltip } from "antd";
import CountUp from "react-countup";
import "./data.css";

function Emision(emition) {
  return (
    <Row gutter={[8, 8]} style={{ height: "20vh" }}>
      <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://cdn.discordapp.com/attachments/945309736801288255/979475167157833738/f__hogares_con_energia_por_un_ano-03.png"
          alt="200"
          className="image-recicled"
        />
      </Col>

      <Col span={14}>
        <div className="div-grid-calculator">
          <div className="div-flex-calculator">
            <h3 className="textData">
              <CountUp end={emition?.emition?.co2 || 0} separator="." />{" "}
            </h3>
            <img
              className="images-kg"
              src="https://cdn.discordapp.com/attachments/945309736801288255/979475167606636644/D_KG-08.png"
              alt="100"
            />
          </div>
          <span className="text-one">CO2</span>
          {/* <span className="text-two">CO2</span> */}
        </div>
      </Col>
    </Row>
  );
}

export default Emision;
