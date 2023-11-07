import React, { useState } from "react";

export default function Letter({ text }) {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "100px",
          background: "linear-gradient(#e66465, #9138e5)",
          textAlign: "center",
          borderRadius: "7px",
        }}
      >
        <h3>Letter</h3>
        <p style={{ color: "white" }}>Số Chữ Cái:{text}</p>
      </div>
    </>
  );
}
