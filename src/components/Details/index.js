import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../WindowDimensionsProvider";

export default function Details() {
  return (
    <div>
      <Link to={"/host/your-car"}>
        <div style={{ fontSize: 20, marginLeft: 10, color: "rgb(255, 69, 0)" }}>
          <i className="fas fa-chevron-left"></i>
          <div style={{ display: "inline", marginLeft: 5 }}>Your Car</div>
        </div>
      </Link>
    </div>
  );
}
