import React from "react";
import classNames from "classnames";
import { useWindowDimensions } from "../WindowDimensionsProvider";
// const { List } = ReactVirtualized


const getClassName = idx => {
  switch (idx) {
    case 0:
      return "is-info";
    case 1:
      return "is-success";
    case 2:
      return "is-primary";
    case 3:
      return "is-danger";
    default:
      return "is-warning";
  }
};

const DesktopView = ({}) => {
  const { width, height } = useWindowDimensions();
  return (
    <>
      <div style={{ ...styles.containerProps, width: width }}>
        <div style={{...styles.buttonsContainer, marginLeft: "10px"}}>
          <div style={{...styles.buttons, ...styles.mapButton}}>Map View</div>
          <div style={{...styles.buttons}}>Book Now</div>
          <div style={{...styles.buttons}}>Price</div>
          <div style={{...styles.buttons}}>Filters</div>
        </div>
        {/* <div style={{ ...styles.underlineBorder }}></div> */}
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "brown",
          top: "130px"
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
            marginBottom: "100px"
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: "transparent",
          }}
        ></div>
      </div>
    </>
  );
};

const styles = {
  containerProps: {
    background: "white",
    position: "fixed",
    //This height if changed,meanes the wrapper for the div below needs to be changed, to accomodate for 
    //white navbar height + orange navbar height
    height: "60px",
    marginTop: "70px",
    display: "flex",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "flex-end",
    zIndex: 99
    // borderBottomColor: "lightgray",
    // borderBottomWidth: "solid 2px",
    // borderRightWidth: "0px",
    // borderLeftWidth: "0px",
    // borderTopWidth: "0px"
  },
  buttonsContainer: {
    flex: 1,
    positon: "relative",
    display: "flex",
    // background: "blue",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'center',
    alignItems:'center',
    fontFamily: 'Roboto-Regular',
    color: '#FF4500',
  },
  buttons: {
    marginRight: "5px",
    marginLeft: "8px",
    borderRadius: 30,
    border: 'solid #FF4500',
    borderWidth: 1.3,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    // background: "yellow"
  },
  mapButton:{
    background: '#FF4500',
    color: 'white'
  },
  underlineBorder: {
    flex: 1,
    position: "relative",
    height: "1px",

    background: "lightgray"
  },
  questionContainer: {
    // background: "orange",
    marginTop: 40,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  imageContainer: {
    // position: "relative",
    width: "50%",
    height: "50%",
    background: "black"
  },
  answerContainer: {}
};

export default DesktopView;
