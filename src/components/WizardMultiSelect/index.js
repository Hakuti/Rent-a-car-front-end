import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import Select from "react-select";
import { Field } from "react-final-form";
import _ from "lodash";

const ButtonComponent = React.forwardRef((props, ref) => {
    const styles = {
      box: {
        width: "25%",
        paddingTop: 25,
        paddingBottom: 25,
        background: "white",
        textAlign: "center",
        margin: 5,
        border: "1px solid #d9d9d9",
        borderRadius: 5,
        fontSize: 25,
        height: 90,
        maxWidth: 150
      },
      borderHighlight: {
        border: "solid 2px orange",
        color: "orange"
      }
    };
    const [highlight, setHighlighted] = useState(props.highlight);
    const checkIt = e => {
      let selected = props.selectCallBack(
        { id: props.id, label: props.label, highlight: highlight },
        props.index
      );
      console.log(selected);
      if (selected.highlight == true) {
        console.log(props);
        props.onChange({ id: props.id, label: props.label }, props, ref, true);
      } else {
        props.onChange({}, props, null, null);
      }
    };
    //Item here is clicked and needs to return back that it has been clicked to Parent
    //Parent then needs to inform if such an item is ready to be highlighted or not
    // const itemClicked = () => {
  
    // }
    return (
      <div
        key={props.id}
        style={
          props.highlight
            ? { ...styles.box, ...styles.borderHighlight }
            : { ...styles.box }
        }
        onClick={checkIt}
      >
        {props.label}
      </div>
    );
  });

const WizardMultiSelect = React.forwardRef((props, ref) => {
    // console.log(props.input.value);
    // console.log(props);
    console.log(ref);
    let secArr = [];
    let x = 1;
    if (x) {
      console.log("Test");
    }
    for (let item of props.options) {
      if (props.input.value.id == item.id) {
        // console.log("Here");
        item.highlight = true;
        // console.log(item);
        secArr.push(item);
      }
      if (props.input.value.id !== item.id) {
        item.highlight = false;
        secArr.push(item);
      }
    }
    // console.log(props.options);
    // console.log(secArr);
    // const [arr, setArr] = useState([{id: 1, label: 1, highlight: false}, {id: 2, label: 2, highlight: false}])
    const [arr, setArr] = useState(secArr);
    const callBack = (selected, index) => {
      /**
       * First step is to find the currently highlighted if there is any
       */
      let currentlyHighlightedItemIfAny;
      for (let item of arr) {
        if (item.highlight == true) {
          currentlyHighlightedItemIfAny = item;
        }
      }
      if (currentlyHighlightedItemIfAny) {
        if (currentlyHighlightedItemIfAny.id === selected.id) {
          arr[index].highlight = false;
          let newArr = arr;
          setArr(newArr);
          return newArr[index];
        } else if (currentlyHighlightedItemIfAny.id !== selected.id) {
          let indexOfHighlightedItem = arr.indexOf(currentlyHighlightedItemIfAny);
          arr[indexOfHighlightedItem].highlight = false;
          arr[index].highlight = true;
          let newArr = arr;
          setArr(newArr);
          return newArr[index];
        }
      } else {
        arr[index].highlight = true;
        let newArr = arr;
        setArr(newArr);
        return newArr[index];
      }
    };
    const items = arr.map((element, index) => {
      console.log(props);
      return(
      <ButtonComponent
        id={element.id}
        index={index}
        label={element.label}
        highlight={element.highlight}
        selectCallBack={callBack}
        ref={ref}
        {...props}
      ></ButtonComponent>
      // <p key={element.id} onClick={{}}>Hello from {element.label}!</p>
    )});
    return items;
  });

  export default WizardMultiSelect;
