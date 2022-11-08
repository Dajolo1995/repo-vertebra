import React from "react";

const Iframe = ({ text }) => {
  return (
    <>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        className="overFlow-iframe"
        scrolling="no"
        frameBorder={0}
        style={{
          width: "100%",
          height: "98%",
          overflowX: "clip",
          overflowY: "clip",
        }}
        src={text}
      ></iframe>
    </>
  );
};

export default Iframe;
