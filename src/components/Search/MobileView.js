import React, { useState } from "react";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useSelector, useDispatch } from "react-redux";
import SearchFilterBar from "../SearchFilterBar";
import VirtuosoSearchList from "../VirtuosoSearchVehicleList/VirtuosoSearchVehicleList";

export default function MobileView() {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in"
  });
  //Temporary variables:
  // console.log(`Dates: ${dates}`);
  // console.log(`Times: ${times}`);
  // console.log(`Filters: ${filters}`);
  // console.log(`Location: ${location}`);
  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     const isVisible = currPos.y > prevPos.y;

  //     const shouldBeStyle = {
  //       visibility: isVisible ? "visible" : "hidden",
  //       transition: `opacity .5s ${isVisible ? "ease-in" : "ease-out"}`
  //     };

  //     if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

  //     setHeaderStyle(shouldBeStyle);
  //   },
  //   [headerStyle]
  // );
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
 
  return (
    <>
      {/* <FilterBar style={headerStyle}></FilterBar> */}

      <SearchFilterBar style={headerStyle}></SearchFilterBar>
      <div style={{marginTop: 130 }}>
        <VirtuosoSearchList></VirtuosoSearchList>

{/*         
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Roboto",
            fontSize: 20,
            background: "",
            width: width,
           
          }}
        >
          <p>Times: {`${times}`}</p>
          <p>Location: {`${location}`}</p>
          <p>Filters: {`${filters}`}</p>
          <p>Dates: {`${dates}`}</p>
        </div> */}
        {/* <SearchVehicleList></SearchVehicleList> */}
        {/* <div style={{ ...styles.boxToTestFixed, width: width }}></div>
        <div style={{ ...styles.boxToTestFixed, marginTop: 100, width }}></div>
        <div style={{ ...styles.boxToTestFixed, width }}></div> */}
        <div
          style={{
            position: "fixed",
            bottom: 30,
            background: "transparent",
            display: "flex",
            justifyContent: "center",
            width: "100%"
          }}
        >
          <div style={{ ...styles.mapBox }}>
            <i className="fas fa-map">{"  "}</i>
            <p style={{ marginLeft: 10, fontSize: 17 }}>Map</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  boxToTestFixed: {
    width: 400,
    marginBottom: 20,
    height: 400,
    background: "blue"
  },
  mapBox: {
    width: "30%",
    height: 45,
    background: "white",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: "#242424",
    fontFamily: "Roboto-Medium",
    maxWidth: 150,
    boxShadow: "2px 4px 5px -3px rgba(181,181,181,1)"
  }
};
