import React from "react";

export default function Word({ word }) {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "100px",
          background: "linear-gradient(#ff8a00, #e52e71)",
          textAlign: "center",
          borderRadius: "7px",
        }}
      >
        <h3>Word</h3>
        <p style={{ color: "white" }}>Số từ :{word}</p>
      </div>
    </>
  );
}
