import React, { useState, useEffect, useReducer } from "react";
import logo from "../../../Logo/logo.png";
import { useWindowDimensions } from "../../WindowDimensionsProvider";
import GeoSearch from "../../Geosearch";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
// import { TurrendasInput } from "../../CalendarNavBar/Mobile/index";
import _ from "lodash";

const container = React.createRef();
export const TurrendasInput = styled.input`
  font-size: 22px;
  text-align: left;
  line-height: 55px;
  padding-left: 20px;
  border: none;
  width: 90%;
  font-family: "Roboto-Medium";
  color: #4a4a4a;
  background: transparent;
  text-overflow: ellipsis;
  ::-webkit-input-placeholder {
    transform: scale(0.75);
    transform-origin: 0% 60%;
    // padding-left: 20px;
  }
  &:focus {
    outline: none;
  }
`;
export const InputBox = styled.input`
  width: 100%;
  minwidth: 90%;
  borderradius: 30;
  background: white;
  font-size: 18;
  font-family: "Roboto-Bold";
  color: #ff541f;
  ::-webkit-input-placeholder {
    color: #ff541f;
  }
`;

//Navbar for Vehicle Listings Page
const DesktopCalendarNavBar = () => {
  const { width, height } = useWindowDimensions();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const location = useSelector((store) => store.location);

  const handleClickOutside = (event) => {
    console.log("Here");
    // console.log(container.current);
    if (container.current && !container.current.contains(event.target)) {
      console.log("Where");
      setShowDropDown(false);
    }
  };

  const fetchData = async (e) => {
    try {
      // let response = await fetch('http://localhost:3000/Geocode', {
      let response = await fetch("http://localhost:3000/Geocode", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: e,
          city: "cali",
        }),
      });

      let responseJson = await response.json();
      if (responseJson.error) {
        console.log("is response json error");
        setResults([]);
      } else {
        console.log(responseJson);
        if (!_.isEmpty(responseJson)) {
          let set = await setResults(
            responseJson ? responseJson : ["Nothing here"]
          );
        } else {
          let set = await setResults([]);
        }
        console.log(responseJson);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [debouncedCallBack] = useDebouncedCallback((value) => {
    fetchData(value);
  }, 1000);

  useEffect(() => {
    window.addEventListener(`mousedown`, handleClickOutside);
    return () => {
      window.removeEventListener(`mousedown`, handleClickOutside);
    };
  }, []);

  return (
    <div style={{ ...navStyles.chooseDates }}>
      {showDropDown ? (
        <div
          style={{
            position: "absolute",
            width: 500,
            height: "250px",
            left: "15%",
            top: 70,
            background: "white",
            boxShadow:"0 5px 6px -6px #777",
            zIndex: 5,
          }}
        >
          <GeoSearch results={results}></GeoSearch>
        </div>
      ) : null}
      <div style={{ ...navStyles.logoDisplay }}>
        {/* <div style={{ background: "", width: "27%" }}> */}
        <div style={{ width: "80px" }}>
          <img src={logo} style={{ height: 50, marginLeft: 10 }}></img>
        </div>
        {/* </div> */}
        {/* <div style={{ ...navStyles.logo }}> Logo </div> */}
      </div>
      <div
        style={{
          flex: 2,
          display: "flex",
          alignItems: "center",
          // background: "red",
          marginRight: "5%",
        }}
      >
        <div style={{...navStyles.searchbarWrapper}}>
        <div style={{...navStyles.searchbar}}>
          <TurrendasInput placeholder="Enter a location" onClick={()=> setShowDropDown(true)} ref={container}></TurrendasInput>
        </div>
        </div>
        {/* <InputBox
          type="text"
          className="input is-rounded"
          placeholder="Where to?"
          // style={{ ...navStyles.locationInput }}
          onClick={() => {
            setShowDropDown(true);
          }}
          value={searchTerm}
          onChange={(e) => {
            console.log(searchTerm);
            setSearchTerm(e.target.value);
            return debouncedCallBack(searchTerm);
          }}
          ref={container}
        ></InputBox> */}
      </div>
      <div
        style={{
          flex: 3,
          display: "flex",
          // background: "gray",
          marginRight: "0%",
        }}
      >
        <div style={{ ...navStyles.dateAndTimeContainer }}>
          <div style={{ ...navStyles.dateAndTime, ...navStyles.datesFont }}>
            <div style={{ ...navStyles.startDate }}>
              3/7/3{" "}
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <div style={{ ...navStyles.startTime }}>
              10:00AM{" "}
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <div style={{ ...navStyles.middleBreakerContainer }}>
              <div style={{ ...navStyles.middleBreaker }}></div>
            </div>
            <div style={{ ...navStyles.endDate }}>
              3/7/3{" "}
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
            <div style={{ ...navStyles.endTime }}>
              10:00AM{" "}
              <span className="icon">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>
          <div style={{ ...navStyles.underlineContainer }}>
            <div style={{ ...navStyles.underline }}></div>
          </div>
        </div>
      </div>
      <div style={{ ...navStyles.profilePictureContainer }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>
      </div>
      
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
    width: "100%",
  },
  //Container for Logo, SearchBar, Dates, and Profile Picture CSS
  chooseDates: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  //Logo CSS
  logoDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    marginLeft: 0,
  },
  logo: {
    color: "white",
  },
  //Profile Picture
  profilePictureContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 10,
  },
  //Geosearch search results CSS
  textBox: {
    flex: 1,
    borderBottomWidth: 3,
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottomColor: "white",
    borderRadius: 3,
    background: "transparent",
  },
  locationInput: {
    fontFamily: "Roboto-Bold",
  },
  //Dates and Times  CSS
  dateAndTimeContainer: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    // background: "red"
  },
  dateAndTime: {
    display: "flex",
    flex: 2,
    // background: "purple",
    alignItems: "flex-end",
    marginBottom: 1,
    justifyContent: "center",
    maxWidth: "600px",
  },
  datesFont: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: "white",
  },
  startDate: {
    position: "relative",
    flex: 2,
    // background: "blue",
    textAlign: "right",
  },
  startTime: {
    flex: 2,
    position: "relative",
    // background: "black",
    textAlign: "right",
  },
  middleBreakerContainer: {
    flex: 1,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // background: "yellow",
    height: "60%",
  },
  middleBreaker: {
    position: "relative",
    width: "50%",
    background: "white",
    height: "5px",
  },
  endDate: {
    flex: 2,
    position: "relative",
    // background: "red",
    textAlign: "center",
  },
  endTime: {
    flex: 2,
    textAlign: "center",
    position: "relative",
    // background: "gray"
  },
  //CSS underline
  underlineContainer: {
    display: "flex",
    flex: 1,
    // background: "green",
    minWidth: "500px",
    maxWidth: "600px",
  },
  underline: {
    display: "flex",
    background: "white",
    borderRadius: 10,
    flex: 1,
    height: "20%",
  },
  searchbarWrapper: {
    width: "100%",
    minWidth: "250px",
    height: "75%",
    background: "",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 15,
  },
  searchbar: {
    height: "100%",
    maxWidth: 500,
    background: "white",
    width: "100%",
    borderRadius: 30,
    display: "flex",
  },
};

export default DesktopCalendarNavBar;
