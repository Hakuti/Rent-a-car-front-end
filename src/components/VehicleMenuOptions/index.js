import React from "react";
import { Link } from "react-router-dom";

export default function VehicleMenuItem({ title, path }) {
  return (
    <div style={{ ...styles.menuItemWrapper }}>
        <Link to={path} style={{...styles.menuItem}}>
      {
        //Flex Direction here is Row
      }
      {/* <div style={{ ...styles.menuItem }}> */}
        <div
          style={{
            ...styles.menuItemWord
          }}
        >
          {title}
        </div>
        <div style={{ ...styles.menuItemArrow }}>
            <i class="fas fa-chevron-right" style={{color: "rgb(255, 69, 0)"}}></i>
        </div>
      {/* </div> */}
      </Link>
    </div>
  );
}

const styles = {
  menuItemWrapper: {
    background: "",
    display: "flex",
    justifyContent: "center",
    flex: 1,
    marginTop: 10
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
    fontFamily: "Roboto-Bold",
    color: "black"
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
