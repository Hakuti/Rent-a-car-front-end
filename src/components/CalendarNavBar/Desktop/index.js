import React, { useState, useEffect, useReducer } from "react";

import { useWindowDimensions } from "../../WindowDimensionsProvider";
import GeoSearch from "../../Geosearch";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import _ from "lodash";

const container = React.createRef();
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
    const location = useSelector(store => store.location);
    
    const handleClickOutside = event => {
      console.log("Here");
      // console.log(container.current);
      if (container.current && !container.current.contains(event.target)) {
        console.log("Where");
        setShowDropDown(false);
      }
    };
  
    const fetchData = async e => {
      try {
        // let response = await fetch('http://localhost:3000/Geocode', {
        let response = await fetch("http://localhost:3000/Geocode", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            address: e,
            city: "cali"
          })
        });
  
        let responseJson = await response.json();
        if (responseJson.error) {
          console.log("is response json error")
          setResults([]);
        } else {
          console.log(responseJson);
          if(!_.isEmpty(responseJson)){
          let set = await setResults(
            responseJson ? responseJson : ["Nothing here"]
          );
          }
          else{
            let set = await setResults([]);
          }
          console.log(responseJson);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const [debouncedCallBack] = useDebouncedCallback(value => {
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
        <div style={{ ...navStyles.logoDisplay }}>
          <div style={{ ...navStyles.logo }}> Logo </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
            // background: "red",
            marginRight: "5%"
          }}
        >
          <InputBox
            type="text"
            className="input is-rounded"
            placeholder="Where to?"
            // style={{ ...navStyles.locationInput }}
            onClick={() => {
              setShowDropDown(true);
            }}
            value={searchTerm}
            onChange={e => {
              console.log(searchTerm);
              setSearchTerm(e.target.value);
              return debouncedCallBack(searchTerm);
            }}
            ref={container}
          ></InputBox>
        </div>
        <div
          style={{
            flex: 3,
            display: "flex",
            // background: "gray",
            marginRight: "3%"
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
              justifyContent: "center"
            }}
          >
            <figure class="image is-48x48">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
              />
            </figure>
          </div>
        </div>
        {showDropDown ? (
          <div
            style={{
              position: "absolute",
              width: 500,
              left: "20%",
              bottom: -140,
              background: "orange",
              zIndex: 5
            }}
          >
            <GeoSearch results={results}></GeoSearch>
          </div>
        ) : null}
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
    //Container for Logo, SearchBar, Dates, and Profile Picture CSS
    chooseDates: {
      display: "flex",
      justifyContent: "center",
      flex: 1
    },
    //Logo CSS
    logoDisplay: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
      marginLeft: 15
    },
    logo: {
      color: "white"
    },
    //Profile Picture
    profilePictureContainer: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "flex-end",
      marginRight: 10
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
      background: "transparent"
    },
    locationInput: {
      fontFamily: "Roboto-Bold"
    },
    //Dates and Times  CSS
    dateAndTimeContainer: {
      flex: 1,
      flexDirection: "column",
      display: "flex"
      // background: "red"
    },
    dateAndTime: {
      display: "flex",
      flex: 2,
      // background: "purple",
      alignItems: "flex-end",
      marginBottom: 1,
      justifyContent: "center",
      maxWidth: "600px"
    },
    datesFont: {
      fontSize: 18,
      fontFamily: "Roboto-Medium",
      color: "white"
    },
    startDate: {
      position: "relative",
      flex: 2,
      // background: "blue",
      textAlign: "right"
    },
    startTime: {
      flex: 2,
      position: "relative",
      // background: "black",
      textAlign: "right"
    },
    middleBreakerContainer: {
      flex: 1,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      // background: "yellow",
      height: "60%"
    },
    middleBreaker: {
      position: "relative",
      width: "50%",
      background: "white",
      height: "5px"
    },
    endDate: {
      flex: 2,
      position: "relative",
      // background: "red",
      textAlign: "center"
    },
    endTime: {
      flex: 2,
      textAlign: "center",
      position: "relative"
      // background: "gray"
    },
    //CSS underline
    underlineContainer: {
      display: "flex",
      flex: 1,
      // background: "green",
      minWidth: "500px",
      maxWidth: "600px"
    },
    underline: {
      display: "flex",
      background: "white",
      borderRadius: 10,
      flex: 1,
      height: "20%"
    }
  };

  export default DesktopCalendarNavBar