import React, { useState, useEffect, useReducer } from "react";

import { useWindowDimensions } from "../WindowDimensionsProvider";
import Geosearch from "../Geosearch";
import GeoSearch from "../Geosearch";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import _ from "lodash";
import DesktopCalendarNavBar from "../CalendarNavBar/Desktop";


//Nav bar default header
const DefaultContent = () => {
  return <div>Default Content</div>;
};

const DesktopView = ({ history, styles }) => {
  return (
    <div style={{ ...styles.navBackgroundColor, ...navStyles.containerProps }}>
      {/* {history.location.pathname === "/game" ? (
        <DefaultContent />
      ) : (
        <CalendarContent />
      )} */}
      {(() => {
        switch(history.location.pathname){
          case "/search": return <DesktopCalendarNavBar></DesktopCalendarNavBar>
          default: return <DefaultContent></DefaultContent>
        }
      })()}
    </div>
  );
};
const navStyles = {
  //Overall container for desktop navbar?
  containerProps: {
    display: "flex",
    height: 70,
    zIndex: 99,
    flex: 1,
    position: "fixed",
    width: "100%"
  },
};

export default DesktopView;
