import React, { useEffect } from "react";
import SearchFilterBar from "../SearchFilterBar";
import VirtuosoSearchVehicleGrid from "../VirtuosoSearchGrid/VirtuosoSearchGrid";
import { useWindowSize } from "../../Helpers/useWindowResize";
import { useSelector, useDispatch } from "react-redux";
import {
  openFiltersDesktopModal,
  openFiltersMobileModal,
} from "../../Redux/Actions/filtersModal";

import Locky from "react-locky";
const filtersModal = React.createRef();

const FilterBar = () => {
  const barStyles = {
    filterBarWrapper: {
      width: "100%",
      // background: "blue",
      height: 60,
      top: "70px",
      position: "fixed",
      zIndex: 9,
      background: "black",
    },
    filterButton: {
      paddingTop: 15,
      paddingBottom: 15,
      background: "white",
      border: "2px solid #2E2E2E",
      borderRadius: 30,
    },
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
  const isDesktopFiltersModalOpen = useSelector(
    (state) => state.filtersModal.openFilterDesktopModal
  );
  useEffect(() => {
    window.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      window.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, []);
  const dispatch = useDispatch();
  if(windowWidth < 951){
    dispatch(openFiltersDesktopModal(false));
  }
  const handleClickOutside = (event) => {
    // console.log("Here");
    // console.log(container.current);
    if (filtersModal.current && !filtersModal.current.contains(event.target)) {
      // console.log("Where");
      dispatch(openFiltersDesktopModal(false));
    }
  };
  return (
    <>
      <FilterBar></FilterBar>
      <div
        style={{
          position: "absolute",
          top: 100,
          background: "",
          width: "100%",
        }}
      >
        {isDesktopFiltersModalOpen && (
          <div
            style={{
              width: "100%",
              zIndex: 99,
              background: "",
              position: "fixed",
              height: windowHeight - 130,
              top: "130px",
            }}
            onClick={() => {
              // dispatch(openFiltersDesktopModal(!isDesktopFiltersModalOpen));
              console.log("Clicked");
            }}
          >
            <Locky enabled={true}>
              <div
                onClick={() => {
                  // dispatch(openFiltersDesktopModal(!isDesktopFiltersModalOpen));
                  console.log("Clicked");
                }}
                style={{
                  background: "hsla(0,0%,100%,.75)",
                  width: "100%",
                  height: windowHeight - 130,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 700,
                    height: 500,
                    background: "white",
                    boxShadow: "1px 3px 13px 0px rgba(207,207,207,1)",
                    position: "absolute",
                    top: "10px",
                  }}
                  ref={filtersModal}
                >
                  {/* <div>Exit</div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: 10,
                    }}
                  >
                    <i
                      class="fas fa-times"
                      style={{ fontSize: 20, marginTop: 5, color: "black" }}
                      onClick={()=>{dispatch(openFiltersDesktopModal(false))}}
                    ></i>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: "700px",
                      height: "100px",
                      background: "black",
                    }}
                  ></div>
                  <div style={{ overflowY: "auto", height: "90%" }}>
                    <div
                      style={{
                        background: "blue",
                        width: "700px",
                        height: "100px",
                        marginBottom: 20,
                      }}
                    ></div>
                    <div
                      style={{
                        background: "blue",
                        width: "700px",
                        height: "100px",
                        marginBottom: 20,
                      }}
                    ></div>
                    <div
                      style={{
                        background: "blue",
                        width: "700px",
                        height: "100px",
                        marginBottom: 20,
                      }}
                    ></div>
                    <div
                      style={{
                        background: "blue",
                        width: "700px",
                        height: "100px",
                        marginBottom: 20,
                      }}
                    ></div>
                    <div
                      style={{
                        background: "blue",
                        width: "700px",
                        height: "100px",
                        marginBottom: 20,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Locky>
          </div>
        )}
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
    background: "",
  },
};
