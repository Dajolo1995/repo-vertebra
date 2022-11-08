import React from "react";
import { Row, Col, Tooltip } from "antd";
import CountUp from "react-countup";
import "./data.css";

const Three = (three) => {
  return (
    <Row gutter={[8, 8]} style={{ height: "20vh" }}>
      <Col span={10} style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://cdn.discordapp.com/attachments/945309736801288255/979475168399331349/E___Arboles_con_10_anos_de_vida_cU-03.png"
          alt="200"
          className="image-recicled"
        />
      </Col>

      <Col span={12}>
        <div className="div-grid-calculator">
          <div className="div-flex-calculator">
            <h3 className="textData">
              <CountUp end={three?.three?.Tree || 0} separator="." />{" "}
            </h3>
            <img
              className="images-kg"
              src="https://cdn.discordapp.com/attachments/945309736801288255/979475168156078080/E_-08.png"
              alt="100"
            />
          </div>
          <span className="text-one">Arboles con 10 años</span>
          <span className="text-two">de vida c/u</span>
        </div>
      </Col>
    </Row>
  );
};

export default Three;
