import React, { useState, useEffect, useReducer } from "react";

import { useWindowDimensions } from "../WindowDimensionsProvider";
import Geosearch from "../Geosearch";
import GeoSearch from "../Geosearch";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../Logo/logo.png";
import MobileCalendarNavBar from "../CalendarNavBar/Mobile";

const DefaultContent = () => {
  const styles = {
    defaultNavBarSpacing: {
      marginRight: 15,
      fontSize: 16,
      fontFamily: 'Roboto-Medium',
      color: 'white'

    },
    
  }
  return (
    <div
      style={{
        background: "rgb(255, 69, 0)",
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}
    >
      <div style={{width: "50%", background: ""}}>
        <img src={logo} style={{ height: 50, marginLeft: 10 }}></img>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end", background: "", width: "50%", marginRight: 10, alignItems: "center"}}>
        <div style={{...styles.defaultNavBarSpacing, background: ""}}>Host</div>
        <div style={{...styles.defaultNavBarSpacing, background: ""}}>Messages</div>
        <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
      </div>
    </div>
  );
  
};

const Button = ({ path, id, name }) => {
  const buttonStyles = {
    isActive: {
      background: "rgb(255, 69, 0)",
      color: "white",
      borderRadius: 30
    },
    notActive: {
      background: "none",
      color: "gray"
    },
    defaultStyle: {
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10
    }
  };
  return (
    <div
      style={{ marginLeft: 10, fontSize: "100%", fontFamily: "Roboto-Medium" }}
    >
      <div
        style={
          id === path
            ? { ...buttonStyles.defaultStyle, ...buttonStyles.isActive }
            : { ...buttonStyles.defaultStyle, ...buttonStyles.notActive }
        }
      >
        {name}
      </div>
    </div>
  );
};
//This is the header for host page
//This is a temporary solution, as you would not want to nest more than twice
//This solution removes the possibility of dynamically going to a link for your car
//Instead relies on an approach of switching up your default vehicle or currently selected
//Via a Redux state
const HostHeader = history => {
  //Static paths set to keep a nav buttons active(highlighted) or not(not highlighted)
  let vehiclePathsAllowed = [
    "/host/details",
    "/host/calendar-details",
    "/host/pricing",
    "/host/your-car"
  ];
  // let settingsPathsAllow = [];
  let path = history.history.location.pathname;
  let temp = occurrences(path, "/");
  if (temp > 1) {
    //Should give me position of everything after /host/vehicles/
    let positionTemp = getPosition(path, "/", 3);
    // console.log(positionTemp);
    path = path.substr(0, positionTemp);
    // console.log(vehiclePathsAllowed[0]);
    if (vehiclePathsAllowed.indexOf(path) > -1) {
      console.log(path);
      path = "/host/vehicles";
    }
    //set else if for when settings paths are ready
    // console.log(path);
  }
  // console.log(history);
  //Check which one to select as active?
  // if(history.pathname)
  return (
    <>
      <DefaultContent></DefaultContent>
      <div
        style={{
          width: "100%",
          // background: "blue",
          height: 50,
          bottom: "0px",
          position: "relative",
          zIndex: 9,
          background: "white",
          ...navStyles.hostHeaderBoxShadow
        }}
      >
        <div style={{ ...navStyles.hostNavButtonWrapper }}>
          <Link to={"/host/vehicles"}>
            <Button
              path={path}
              id={"/host/vehicles"}
              name={"Vehicles"}
            ></Button>
          </Link>
          <Link to={"/host/settings"}>
            <Button
              path={path}
              id={"/host/settings"}
              name={"Settings"}
            ></Button>
          </Link>
        </div>
      </div>
    </>
  );
};

const CalendarContent = () => {
  const location = useSelector(store => store.location);

  return <div>Calendar Mobile Content</div>;
};

const MobileView = ({ history, styles }) => {
  // return <div style={{...styles.navBackgroundColor, ...navStyles.containerProps}}>Mobile</div>;
  return (
    <div style={{ ...styles.navBackgroundColor, ...navStyles.containerProps }}>
      {/* {history.location.pathname === "/game" ? (
    <DefaultContent />
  ) : (
    <CalendarContent />
  )} */}
      {(() => {
        let path = history.location.pathname;
        let temp = occurrences(path, "/");
        if (temp > 1) {
          let positionTemp = getPosition(path, "/", 2);
          // console.log(positionTemp);
          path = path.substr(0, positionTemp);
        }
        switch (path) {
          case "/search":
            return <MobileCalendarNavBar></MobileCalendarNavBar>;
          case "/host":
            return <HostHeader history={history}></HostHeader>;
          default:
            return <DefaultContent></DefaultContent>;
        }
      })()}
    </div>
  );
};
function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}
function occurrences(string, subString, allowOverlapping) {
  string += "";
  subString += "";
  if (subString.length <= 0) return string.length + 1;

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

const navStyles = {
  containerProps: {
    height: 70,
    width: "100%",
    background: "",
    top: 0,
    position: "fixed",
    zIndex: 9
  },
  hostHeaderBoxShadow: {
    boxShadow: "-4px 6px 9px -5px rgba(230,225,230,1)"
  },
  hostNavButtonWrapper: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    zIndex: 9
  },
  hostNavButton: {
    paddingRight: 10,
    paddingLeft: 10
  }
};

export default MobileView;
