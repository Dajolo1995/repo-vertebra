import React, { useEffect, useState } from "react";
import { Divider, Row, Col } from "antd";
import EnergyAhorred from "./EnergyAhorred";
import Emision from "./Emision";
import Three from "./Three";
import axios from "axios";
import Recursos from "../../assets/Recurso 12.png";

const contents = () => {
  const [datos, setDatos] = useState(null);
  const [FirstOption, setFirstOption] = useState(true);

  const dataAxios = async () => {
    setDatos(null);

    const day = new Date().getDate();

    const data = await axios.get(
      `http://45.33.117.178:3050/meters/1057?begin_date=%222022-11-8T00:00:00.469Z%22&end_date=%222022-11-8T23:59:59.469Z%22%27`
    );

    const datas = await axios.get(
      `http://45.33.117.178:3050/meters/1054?begin_date=%222022-11-8T00:00:00.469Z%22&end_date=%222022-11-8T23:59:59.469Z%22%27`
    );


    let totalEnergyConsumed = 0;
    let Tree = 0;
    let co2 = 0;

    data?.data.forEach((e) => {
      totalEnergyConsumed = totalEnergyConsumed + e.data.consumption;
      Tree = Tree + e.data.calculation_tree;
      co2 = co2 + e.data.calculation_co2;
    });

    datas?.data.forEach((e) => {
      totalEnergyConsumed = totalEnergyConsumed + e.data.consumption;
      Tree = Tree + e.data.calculation_tree;
      co2 = co2 + e.data.calculation_co2;
    });

    let variable = {
      totalEnergyConsumed,
      Tree,
      co2,
    };
    setDatos(variable);
    setFirstOption(false);

  };

  useEffect(() => {
    if (FirstOption === true) {
      dataAxios();

      setInterval(() => {
        setFirstOption(true);
      }, 30000);
    }
  }, [FirstOption]);

  return (
    <>
      <Row style={{ marginTop: "10px" }}>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Recursos} style={{ width: "100px" }} alt="image" />
        </Col>
      </Row>

      <EnergyAhorred energyConsumed={datos?.totalEnergyConsumed} />

      <Emision emition={datos} />

      <Three three={datos} />
    </>
  );
};

export default contents;
