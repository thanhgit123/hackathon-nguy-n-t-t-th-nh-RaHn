import React from "react";

export default function Pharagrap({ pharagrap }) {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "100px",
          background: "linear-gradient(#7A7FBA, #11C37C)",
          textAlign: "center",
          borderRadius: "7px",
        }}
      >
        <h3>Pharagrap</h3>
        <p style={{ color: "white" }}>Số đoạn văn:{pharagrap}</p>
      </div>
    </>
  );
}
