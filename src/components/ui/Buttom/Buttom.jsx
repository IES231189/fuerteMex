import React from "react";
import "./Buttom.css";

export default function Buttom({ label }) {
  return (
    <>
      <button className="ButtonUI">{label}</button>
    </>
  );
}
