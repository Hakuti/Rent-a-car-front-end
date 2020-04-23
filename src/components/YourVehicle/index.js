import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import VehicleMenuItem from "../VehicleMenuOptions";
import { useSelector, useDispatch } from "react-redux";
import {setVehicle} from "../../Redux/Actions/hostVehicle";


export default function YourVehicle({vehicle, isLoading}) {
  // console.log(vehicle);
  const currentVehicle = useSelector(state => state.vehicle);
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();
  let carImageHeight = width > 500 ? height / 2 : 280;

  return (
    <div>
      <Link to={"/host/vehicles"}>
        <div style={{ fontSize: 20, marginLeft: 10, color: "rgb(255, 69, 0)" }}>
          <i className="fas fa-chevron-left"></i>
          <div style={{ display: "inline", marginLeft: 5 }}> All Cars</div>
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* <div>Press to change current state of: {currentVehicle.vehicle}</div>
        <button onClick={() => dispatch(setVehicle(currentVehicle.vehicle))}>+</button>
        {isLoading ? "Loading": "Done"} */}

        <div
          style={{
            ...styles.imgWrapper,
            height: carImageHeight
          }}
        >
          <img
            style={{
              width: "100%",
              height: "80%",
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5
            }}
            src={vehicle.url}
          ></img>
          <div
            style={{
              ...styles.captionWrapper,
              ...styles.imgCaption
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>Add Photos +</div>
            <div
              style={{ height: "100%", background: "white", width: ".5%" }}
            ></div>
            <div style={{ flex: 1, textAlign: "center" }}>View Listing</div>
          </div>
        </div>
      </div>
      <div style={{ ...styles.menuOptions }}>
          <VehicleMenuItem title={"Calendar Dates"} path={"/host/calendar-details"}></VehicleMenuItem>
          <VehicleMenuItem title={"Details"} path={"/host/details"}></VehicleMenuItem>
          <VehicleMenuItem title={"Pricing"} path={"/host/pricing"}></VehicleMenuItem>

        {/* <div style={{ ...styles.menuItemWrapper }}>
          {
            //Flex Direction here is Row
          }
          <div style={{ ...styles.menuItem }}>
            <div
              style={{
                ...styles.menuItemWord
              }}
            >
              Calendar Date
            </div>
            <div style={{ ...styles.menuItemArrow }}>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const styles = {
  imgWrapper: {
    marginTop: 20,
    maxWidth: 800,
    width: "90%",
    background: "",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column"
  },
  imgCaption: {
    fontFamily: "Roboto-Bold",
    color: "white",
    fontSize: "3vh"
  },
  captionWrapper: {
    background: "rgb(255, 69, 0)",
    height: "20%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    display: "flex",
    alignItems: "center"
  },
  menuOptions: {
    marginTop: 10,
    background: "",
    display: "flex",
    flexDirection: "column",
    marginBottom: 10
  },
  menuItemWrapper: {
    background: "",
    display: "flex",
    justifyContent: "center",
    flex: 1,
    marginTop: 15
  },
  menuItem: {
    width: "90%",
    height: 45,
    borderRadius: 8,
    background: "white",
    boxShadow: "-4px 6px 9px -2px rgba(230,225,230,1)",
    display: "flex",
    alignItems: "center"
  },
  menuItemWord: {
    width: "90%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontFamily: "Roboto-Bold"
  },
  menuItemArrow: {
    width: "10%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    color: "rgb(255, 69, 0)"
  }
};
