import React from "react";
import SearchFilterBar from "../SearchFilterBar";
import VirtuosoSearchVehicleGrid from "../VirtuosoSearchGrid/VirtuosoSearchGrid";
import { useWindowSize } from "../../Helpers/useWindowResize";

const FilterBar = () => {
  const barStyles = {
    filterBarWrapper: {
      width: "100%",
      // background: "blue",
      height: 60,
      top: "70px",
      position: "fixed",
      zIndex: 9,
      background: "black"
    },
    filterButton: {
        paddingTop: 15,
        paddingBottom: 15,
        background: "white",
        border: "2px solid #2E2E2E",
        borderRadius: 30,
    }
  };
  return (
    <div style={{ ...barStyles.filterBarWrapper }}>
      <SearchFilterBar></SearchFilterBar>
      {/* <div style={{...barStyles.filterButton}}>Filters</div>
      <div></div>
      <div></div> */}
    </div>
  );
};
export default function DesktopView() {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
      <FilterBar></FilterBar>
      <div style={{ position: "absolute", top: 140, background: "", width: "100%"}}>
        <VirtuosoSearchVehicleGrid></VirtuosoSearchVehicleGrid>
        {/* <div style={{ ...styles.boxToTestFixed }}></div>
        <div style={{ ...styles.boxToTestFixed, marginTop: 100 }}></div>
        <div style={{ ...styles.boxToTestFixed }}></div> */}
      </div>
    </>
  );
}

const styles = {
  boxToTestFixed: {
    width: "400px",
    marginBottom: 20,
    height: 400,
    background: ""
  }
};
