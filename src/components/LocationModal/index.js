import React, { useState } from "react";
import styled, { css } from "styled-components";
import _ from "lodash";
import { useDebounce, useDebouncedCallback } from "use-debounce";


const TurrendasInput = styled.input`
  font-size: 22px;
  text-align: left;
  border: none;
  width: 90%;
  font-family: "Roboto-Medium";
  color: #4a4a4a;
  background: ;
  margin-left: 5px;
  text-overflow: ellipsis;
  ::-webkit-input-placeholder {
    //transform: scale(0.75);
    //transform-origin: 0% 60%;
    // padding-left: 20px;
  }
  &:focus {
    outline: none;
  }
`;

export default function LocationModal() {
  const [locationSearch, setSearchLocation] = useState("");
  const [results, setResults] = useState([]);

  const findResults = (e) => {
    setSearchLocation(e.target.value);
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
  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            class="fas fa-search"
            style={{ fontSize: 30, color: "rgb(255, 69, 0)" }}
          ></i>
          <TurrendasInput
            placeholder="Enter a location"
            autofocus="true"
            onChange={findResults}
          ></TurrendasInput>
        </div>
        <div style={{ ...styles.locationUnderline }}></div>
      </div>

      {locationSearch == "" && (
        <div style={{ ...styles.headerLocation }}>Recent</div>
      )}
      {locationSearch == "" && (
        <div style={{ ...styles.locationRecentResults }}>
          <div style={{ ...styles.locationItem }}>
            <i
              class="fas fa-sign"
              style={{ color: "rgb(255, 69, 0)", marginRight: 20 }}
            ></i>
            <div style={{ fontSize: 24 }}>Current Location</div>
          </div>
          <div style={{ ...styles.locationItem }}>
            <i
              class="fas fa-sign"
              style={{ color: "rgb(255, 69, 0)", marginRight: 20 }}
            ></i>
            <div style={{ fontSize: 24 }}>Current Location</div>
          </div>
          <div style={{ ...styles.locationItem }}>
            <i
              class="fas fa-sign"
              style={{ color: "rgb(255, 69, 0)", marginRight: 20 }}
            ></i>
            <div style={{ fontSize: 24 }}>Current Location</div>
          </div>
        </div>
      )}
      {locationSearch !== "" && (
        <div style={{ ...styles.locationRecentResults }}>
          <div style={{ ...styles.locationItem }}>
            <i
              class="fas fa-sign"
              style={{ color: "rgb(255, 69, 0)", marginRight: 20 }}
            ></i>
            <div style={{ fontSize: 24 }}>Cali, Colombia</div>
          </div>
        </div>
      )}
      {/* <div style={{marginBottom: 20, width: "100%", height: 200, background: "blue"}}></div>
            <div style={{marginBottom: 20, width: "100%", height: 100, background: "blue"}}></div>
            <div style={{marginBottom: 20, width: "100%", height: 300, background: "blue"}}></div>
            <div style={{marginBottom: 20, width: "100%", height: 100, background: "blue"}}></div> */}
    </div>
  );
}

const styles = {
  locationWrapper: {},
  locationUnderline: {
    width: "100%",
    maxWith: 600,
    background: "rgb(255, 69, 0)",
    height: 6,
    borderRadius: 10,
  },
  headerLocation: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  locationRecentResults: {
    marginTop: 20,
  },
  locationItem: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    display: "flex",
    marginLeft: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
};
