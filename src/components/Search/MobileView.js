import React, { useState } from "react";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const FilterBar = ({ style }) => {
  const barStyles = {
    filterBarWrapper: {
      width: "100%",
      // background: "blue",
      height: 60,
      top: "70px",
      position: "fixed",
      zIndex: 9,
      background: "white",
      borderBottom: "1px solid lightgray"
    },
    filterButton: {
      background: "white",
      color: "#2E2E2E",
      border: "1.5px solid #2E2E2E",
      borderRadius: 30,
      paddingLeft: 13,
      paddingRight: 13,
      paddingTop: 7,
      paddingBottom: 7,
      marginLeft: 7,
      fontSize: 13.5
    },
    dateButton: {
        background: "#2E2E2E",
        color: "white",
        border: "1.5px solid #2E2E2E",
        borderRadius: 30,
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 7,
        fontSize: 14
      }
  };
  console.log(style);
  return (
    <div style={{ ...barStyles.filterBarWrapper, ...style }}>
      <div style={{display: "flex", alignItems: "center", background: "", height: "100%", fontFamily: "Roboto-Regular"}}>
        <div style={{ ...barStyles.filterButton }}>Filters - 1</div>
        <div style={{...barStyles.dateButton}}>Mar. 3 - Apr. 10</div>
        <div style={{...barStyles.dateButton}}>10:00AM - 12:00PM</div>
      </div>
    </div>
  );
};

export default function MobileView() {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in"
  });
  const { height, width } = useWindowDimensions();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y > prevPos.y;

      const shouldBeStyle = {
        visibility: isVisible ? "visible" : "hidden",
        transition: `opacity .5s ${isVisible ? "ease-in" : "ease-out"}`
      };

      if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;

      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );

  return (
    <>
      <FilterBar style={headerStyle}></FilterBar>
      <div style={{ position: "absolute", top: 150 }}>
        <div style={{ ...styles.boxToTestFixed, width: width }}></div>
        <div style={{ ...styles.boxToTestFixed, marginTop: 100, width }}></div>
        <div style={{ ...styles.boxToTestFixed, width }}></div>
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
            <i class="fas fa-map">{"  "}</i>
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
    width: "26%",
    height: 45,
    background: "white",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: "#242424",
    fontFamily: "Roboto-Medium"
  }
};
