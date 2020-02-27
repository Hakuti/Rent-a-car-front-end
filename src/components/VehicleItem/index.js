import React from "react";
import { Link } from "react-router-dom";

//Each vehicle item
export default function VehicleItem() {
  return (
    <>
      <div style={{ ...styles.carWrapper }}>
        <div
          style={{
            flex: 1,
            background: "",
            position: "relative",
            display: "flex"
          }}
        >
          <div style={{ ...styles.edgeRecetangle }}></div>
          <div style={{ height: "100%", background: "", width: "100%" }}>
            <div style={{ ...styles.img }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%", width: 110 }}
                src="https://via.placeholder.com/150"
              ></img>
            </div>
          </div>
          {/* <div style={{...styles.imgWrapper}}>
            </div> */}
        </div>
        <div
          style={{
            flex: 2,
            background: "",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div style={{ ...styles.detailsWrapper }}>
            <div style={{ background: "", marginRight: 10 }}>2019 Corvette</div>
            <div style={{ background: "", marginRight: 10 }}>Z06</div>
            <div style={{ ...styles.editOrView }}>
              <Link to="/host/your-car">
                <div style={{ marginRight: 5, color: "gray" }}>
                  Edit Vehicle
                </div>
              </Link>
              <div style={{ color: "lightgray" }}>|</div>
              <div style={{ marginLeft: 5, color: "rgb(255, 69, 0)" }}>
                View Vehicle
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  carWrapper: {
    maxWidth: "600px",
    width: "100%",
    // background: "black",
    height: 100,
    display: "flex",
    flex: 1,
    boxShadow: "-4px 6px 9px -2px rgba(230,225,230,1)",
    position: "relative"
  },
  edgeRecetangle: {
    background: "rgb(255, 69, 0)",
    height: 100,
    width: 10,
    position: "relative",
    left: 0
  },
  imgWrapper: {
    position: "relative",
    background: "orange",
    width: 90,
    height: 100,
    left: 30
  },
  img: {
    height: 80,
    marginTop: 10,
    width: "90%",
    maxWidth: 136,
    borderRadius: 5,
    marginLeft: 8,
    background: ""
  },
  detailsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    fontFamily: "Roboto-Bold"
  },
  editOrView: {
    // background: "orange",
    display: "flex",
    marginTop: 15,
    marginRight: 10,
    flexDirection: "row",
    fontSize: 15,
    fontFamily: "Roboto-Medium"
  }
};
