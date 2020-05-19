import React from "react";
import { useWindowSize } from "../../../Helpers/useWindowResize";
import carbackground_x1 from "../../../Assets/HomeCar_x1.jpg";
import carbackground_x2 from "../../../Assets/HomeCar_x2.jpg";
import carbackground_x3 from "../../../Assets/HomeCar_x2.jpg";
import carbackground_x4 from "../../../Assets/HomeCarDesktop_x1.jpg";

export default function DesktopView() {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div style={{ position: "absolute", top: 70, width: "100%" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 50,
          background: "red",
          top: 300
        }}
      ></div>

      <div style={{ background: "blue", height: windowHeight, width: "100%" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: windowHeight,
            background: "rgba(10, 10, 10, 0.45)",
          }}
        ></div>
        <img
          src={carbackground_x4}
          style={{ height: "100%", width: windowWidth, objectFit: "revert" }}
        ></img>
      </div>
      <div
        style={{
          background: "blue",
          height: "400px",
          width: "100%",
          marginTop: "100px",
        }}
      >
        Hello{" "}
      </div>
    </div>
  );
}
