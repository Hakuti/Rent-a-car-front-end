import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import Select from "react-select";
import { Field } from "react-final-form";
import _ from "lodash";

const customStyles = {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    background: "transparent",
    boxShadow: "0 !important",
    position: "relative",
    top: 6,
    "&:hover": {
      border: "0 !important"
    }
  }),
  valueContainer: (base, state) => ({
    ...base,
    background: "transparent"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "transparent",
    maxWidth: "80px"
  })
};

const customStylesHighlighted = {
  container: (base, state) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  }),
  control: (base, state) => ({
    ...base,
    border: 0,
    background: "transparent",
    boxShadow: "0 !important",
    position: "relative",
    top: 10,
    "&:hover": {
      border: "0 !important"
    }
  }),
  valueContainer: (base, state) => ({
    ...base,
    background: "transparent"
  }),
  multiValue: (base, state) => ({
    ...base,
    background: "transparent",
    maxWidth: "80px"
  })
};

const TurrendasSelect = React.forwardRef(({
  onChange,
  options,
//   ref,
  value,
  validate,
  searchable,
  last,
  caption
}, ref) => {
  const [isFocused, setFocused] = useState(false);
  useEffect(() => {
      if(isFocused && last){
          console.log("In useEffect");
         console.log(ref);
        
      }else if(!isFocused && last){
          console.log("In useeffect not focused")
        // window.scrollTo({
        //     top: -100,
        //     left: -100,
        //     behavior: 'smooth'
        //   });
      }
  }, [isFocused])
  let marginBottom = {marginBottom: 0}
  if(last){
      marginBottom = {marginBottom: 300}
  }

  return (
    <div
      style={ isFocused && last ? {
        ...styles.wrapper,
      }: {...styles.wrapper}}
    >
      <div style={{ display: "flex", width: "100%", position: "relative" }}>
        <div style={isFocused ? { ...styles.wording,...styles.borderWording, ...styles.borderWordingHighlighted,  } : {...styles.wording,...styles.borderWording}}>
          <p>{caption}</p>
        </div>
        <div style={isFocused ? { ...styles.select,...styles.borderSelect, position: "relative", ...styles.borderHighlighted } : {...styles.select,...styles.borderSelect, position: "relative"}}>
          <Select
            styles={isFocused ? customStyles : customStylesHighlighted}
            options={options}
            ref={ref}

            value={value}
            validate={validate}
            onChange={onChange}
            searchable={searchable}
            onMenuOpen={() => {
              console.log("Open");
              setFocused(true);
            }}
            onMenuClose={() => {
              console.log("Close");
              setFocused(false);
            }}
          />
        </div>
      </div>
    </div>
  );
});

const styles = {
  borderSelect: {
    borderLeft: 0,
    borderRight: "1px solid #d9d9d9",
    borderTop: "1px solid #d9d9d9",
    borderBottom: "1px solid #d9d9d9",
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px",
    // width: "100%"
  },
  select: {
    width: "100%"
  },
  borderWording: {
    borderLeft: "1px solid #d9d9d9",
    borderRight: "1px solid #d9d9d9",
    borderTop: "1px solid #d9d9d9",
    borderBottom: "1px solid #d9d9d9",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
  },
  wording: {
    width: "30%",
    color: "#676767",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 150,
    fontFamily: "Roboto-Medium",
    fontSize: 15
  },


  borderHighlighted: {
    borderLeft: "1px solid orange",
    borderRight: "1px solid orange",
    borderTop: "1px solid orange",
    borderBottom: "1px solid orange",
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px",
  },
  borderWordingHighlighted: {
    borderRight: "0px solid orange",
    borderTop: "1px solid orange",
    borderBottom: "1px solid orange",
    borderLeft: "1px solid orange",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    position: "relative",
    height: 60,
    maxWidth: 700,
  }
};

export default TurrendasSelect;
