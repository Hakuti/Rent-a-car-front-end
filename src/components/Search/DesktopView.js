import React from "react";

const FilterBar = () => {
  const barStyles = {
    filterBarWrapper: {
      width: "100%",
      // background: "blue",
      height: 70,
      top: "71px",
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
      <div style={{...barStyles.filterButton}}>Filters</div>
      <div></div>
      <div></div>
    </div>
  );
};
export default function DesktopView() {
  return (
    <>
      <FilterBar></FilterBar>
      <div style={{ position: "absolute", top: 150 }}>
        <div style={{ ...styles.boxToTestFixed }}></div>
        <div style={{ ...styles.boxToTestFixed, marginTop: 100 }}></div>
        <div style={{ ...styles.boxToTestFixed }}></div>
      </div>
    </>
  );
}

const styles = {
  boxToTestFixed: {
    width: "400px",
    marginBottom: 20,
    height: 400,
    background: "blue"
  }
};
