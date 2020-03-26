import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import logo from "../../../Logo/logo.png";
import styled, { css } from "styled-components";

/**
 * The goal of this navbar is to create a searchbar that leads to a modal
 * The Logo if clicked is also a modal
 */
const TurrendasInput = styled.input`
  font-size: 22px;
  text-align: left;
  line-height: 48px;
  border: none;
  width: 90%;
  font-family: 'Roboto-Medium';
  color: #4A4A4A;
  background: transparent;
  ::-webkit-input-placeholder {
    transform: scale(0.75);
    transform-origin: 0% 60%;
    // padding-left: 20px;
  }
  &:focus {
    outline: none;
  }
`;
export default function MobileCalendarNavBar() {
  return (
    <div
      style={{
        background: "rgb(255, 69, 0)",
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}
    >
      <div style={{background: "", width: "20%", }}>
        <img src={logo} style={{ height: 50, marginLeft: 10 }}></img>
      </div>
      <div style={{...styles.searchbarWrapper}}>
          <div style={{...styles.searchbar}}>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", flex: 1}}>
                  <TurrendasInput placeholder="Select a location"></TurrendasInput>
              </div>
          </div>
      </div>
    </div>
  );
}

const styles = {
    searchbarWrapper:{
        width: "75%",
        height: "75%",
        background: "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 10
    },
    searchbar: {
        height: "100%",
        maxWidth: 500,
        background: "white",
        width: "100%",
        borderRadius: 30,
        display: "flex"
    }
};
