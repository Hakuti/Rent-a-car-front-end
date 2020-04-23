import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useSelector, useDispatch } from "react-redux";
import { setVehicle } from "../../Redux/Actions/hostVehicle";
import AvailabilityCalendar from "../AvailabilityCalendar";
import { ModalProvider } from "../../GeneralModal";
export default function Availability() {
  return (
    <div>
        <Link to={"/host/your-car"}>
          <div
            style={{ fontSize: 20, marginLeft: 10, color: "rgb(255, 69, 0)" }}
          >
            <i className="fas fa-chevron-left"></i>
            <div style={{ display: "inline", marginLeft: 5 }}> Your Car</div>
          </div>
        </Link>
        <div
          style={{ marginTop: 30, display: "flex", justifyContent: "center" }}
        >
          <AvailabilityCalendar></AvailabilityCalendar>
        </div>
    </div>
  );
}
