import "./App.css";
import { Row, Col, Button } from "antd";
import Iframe from "./components/Iframe";
import Contents from "./components/data/contents";

function App() {
  return (
    <div className="image-Bacground">
      <Row gutter={[8, 8]} style={{ margin: 0, height: "100vh" }}>
        <Col span={10}>
          <Iframe text="https://vertebra1054.vertebrameters.com/632E1/l/es/classic.html" />
        </Col>

        <Col span={10}>
          <Iframe text="https://vertebra1057.vertebrameters.com/632E1/l/es/classic.html" />
        </Col>

        <Col span={4}>
          <Contents />
        </Col>
      </Row>
    </div>
  );
}

export default App;
