import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { searchCalendarDate } from "../../Redux/Actions/searchCalendarDate";
import { searchFilters } from "../../Redux/Actions/searchFilters";
import { searchLocation } from "../../Redux/Actions/searchLocation";
import { searchTimes } from "../../Redux/Actions/searchTimes";
import { searchTotal } from "../../Redux/Actions/searchlist"
import { openLocationModal } from "../../Redux/Actions/locationModal";

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

  // const total = useSelector((state) => state.searchTotal.searchTotal);

  //Temporary variables:
  const times = useSelector(
    state => state.searchTimes.searchTimes
  );
  const filters = useSelector(
    state => state.searchFilters.searchFilters
  );
  const location = useSelector(
    state => state.searchLocation.searchLocation
  );
  const dates = useSelector(
    state => state.searchCalendar.searchCalendar
  );

  // console.log(`Dates: ${dates}`);
  // console.log(`Times: ${times}`);
  // console.log(`Filters: ${filters}`);
  // console.log(`Location: ${location}`);

  
  return (
    <div style={{ ...barStyles.filterBarWrapper, ...style }}>
      <div style={{ background: "", height: "100%" }}>
        <DivWrapper>
          <div
            style={{ ...barStyles.filterButton }}
            onClick={() => {
              dispatch(searchTotal(0));
              dispatch(searchFilters(!filters)); 
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
            Mar. 3 - Apr. 10
          </div>
          <div
            style={{ ...barStyles.dateButton }}
            onClick={() => {
              dispatch(searchTimes(!times));
            }}
          >
            10:00AM - 12:00PM
          </div>
          <div
            style={{ ...barStyles.dateButton }}
            onClick={() => {
              dispatch(searchLocation(!location));
            }}
          >
            Location
          </div>
        </DivWrapper>
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
    fontSize: 13
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
    fontSize: 13
  }
};

export default SearchFilterBar;
