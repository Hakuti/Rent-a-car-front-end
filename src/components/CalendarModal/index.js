import React from "react";
import SearchRangeCalendarMobile from "../SearchRangeCalendar/SearchRangeCalendarMobile";
import { openSearchCalendarModal } from "../../Redux/Actions/searchCalendarModal";
import { searchCalendarDate } from "../../Redux/Actions/searchCalendarDate";
import { useSelector, useDispatch } from "react-redux";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";
import Locky from "react-locky";

export default function CalendarModal() {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  if (width > 950) {
    dispatch(openSearchCalendarModal(false));
  }
  return (
    <div>
      {/* <Locky enabled={true}> */}
        <div
          style={{
            ...styles.datesContainer,
          }}
        ></div>
        <div
          style={{
            top: 100,
            position: "absolute",
            width: "100%",
            left: 0,
            height: height - 100,
          }}
        >
          <SearchRangeCalendarMobile></SearchRangeCalendarMobile>
        </div>
      {/* </Locky> */}
    </div>
  );
}

const styles = {
  datesContainer: {
    height: 100,
    width: "100%",
    background: "white",
    position: "absolute",
    top: 0,
    left: 0,
    // boxShadow: "-4px 6px 9px -2px rgba(230,225,230,1)",
    // zIndex: 1,
  },
  calendarWrapper: {},
};
