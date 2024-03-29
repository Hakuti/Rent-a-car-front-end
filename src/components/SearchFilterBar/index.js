import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { searchCalendarDate } from "../../Redux/Actions/searchCalendarDate";
import { searchFilters } from "../../Redux/Actions/searchFilters";
import { searchLocation } from "../../Redux/Actions/searchLocation";
import { searchTimes, searchTimesModalOpen } from "../../Redux/Actions/searchTimes";
import { searchTotal } from "../../Redux/Actions/searchlist";
import { openSearchCalendarModal } from "../../Redux/Actions/searchCalendarModal";
import {
  openFiltersDesktopModal,
  openFiltersMobileModal,
} from "../../Redux/Actions/filtersModal";
import Locky from "react-locky"
import { useWindowSize } from "../../Helpers/useWindowResize";
import TimeSelectForm from "../TimeSelectForm";
const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-family: Roboto-Regular;
  overflow-x: scroll;
  white-space: nowrap;
  background: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
`;
const SearchFilterBar = ({ style }) => {
  const dispatch = useDispatch();
  const [windowWidth, windowHeight] = useWindowSize();
  
  // const total = useSelector((state) => state.searchTotal.searchTotal);

  //Temporary variables:
  const times = useSelector((state) => state.searchTimes.searchTimes);
  const filters = useSelector((state) => state.searchFilters.searchFilters);
  const location = useSelector((state) => state.searchLocation.searchLocation);
  const dates = useSelector((state) => state.searchCalendar.searchCalendar);
  const isDesktopFiltersModalOpen = useSelector(
    (state) => state.filtersModal.openFilterDesktopModal
  );
  const isSearchTimesModalOpen = useSelector((state) => state.searchTimes.searchTimeModalOpen)
  if(windowWidth > 950){
    dispatch(searchTimesModalOpen(false))
  }
  // console.log(`Dates: ${dates}`);
  // console.log(`Times: ${times}`);
  // console.log(`Filters: ${filters}`);
  // console.log(`Location: ${location}`);

  return (
    <div style={{ ...barStyles.filterBarWrapper, ...style }}>
      <div style={{ background: "", height: "100%" }}>
        {windowWidth < 950 ? (
          <DivWrapper>
            <div
              style={{ ...barStyles.filterButton }}
              onClick={() => {
                dispatch(openFiltersMobileModal(true));
                // dispatch(searchTotal(0));
                // dispatch(searchFilters(!filters));
              }}
            >
              Filters - 1
            </div>
            <div
              style={{ ...barStyles.dateButton }}
              onClick={() => {
                dispatch(openSearchCalendarModal(true));

                // dispatch(searchCalendarDate(!dates));
              }}
            >
              Mar. 3 - Apr. 10
            </div>
            <div
              style={{ ...barStyles.dateButton }}
              onClick={() => {
                dispatch(searchTimesModalOpen(!isSearchTimesModalOpen));
              }}
            >
              10:00AM - 12:00PM
            </div>
            <div
              style={{ ...barStyles.dateButton }}
              onClick={() => {
                dispatch(searchCalendarDate(!dates));
              }}
            >
              Lowest to Highest
            </div>
          </DivWrapper>
        ) : (
          <DivWrapper>
            <div
              style={{ ...barStyles.filterButton }}
              onClick={() => {
                dispatch(openFiltersDesktopModal(!isDesktopFiltersModalOpen));
                // dispatch(searchTotal(0));
                // dispatch(searchFilters(!filters));
              }}
            >
              Filters - 1
            </div>
            <div
              style={{ ...barStyles.dateButton }}
              onClick={() => {
                dispatch(searchCalendarDate(!dates));
              }}
            >
              Lowest to Highest
            </div>
          </DivWrapper>
        )}
        {windowWidth < 950 && isSearchTimesModalOpen ? (
          <div style={{height: "600px", background: "rgba(255, 255, 255, 0.75)"}}>
          <div
            style={{
              width: "100%",
              height: 100,
              background: "white",
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div style={{display: "flex", justifyContent: "center", background: "", width: "100%", height: "100%", alignItems: "center"}}>
              <div>
                Start               
                <TimeSelectForm></TimeSelectForm>               
              </div>
              <div>
                End
                <TimeSelectForm></TimeSelectForm>
              </div>
            </div>
          </div>
          </div>
        ) : null}
        {/* </div> */}
      </div>
    </div>
  );
};

const barStyles = {
  filterBarWrapper: {
    width: "100%",
    // background: "blue",
    height: 60,
    top: "70px",
    position: "fixed",
    zIndex: 9,
    background: "white",
    borderBottom: "1px solid lightgray",
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
    fontSize: 13,
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
    fontSize: 13,
  },
};

export default SearchFilterBar;
