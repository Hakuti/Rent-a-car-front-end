import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import Select from "react-select";
import { Field } from "react-final-form";
import _ from 'lodash';


const TurrendasInput = styled.input`
  font-size: 22px;
  text-align: left;
  line-height: 44px;
  border: none;
  width: 70%;
  border-radius: 5px;
  /* background: blue; */
    background: transparent;
  ::-webkit-input-placeholder {
    transform: scale(0.75);
    transform-origin: 0% 60%;
    padding-left: 20px;
  }
  &:focus {
    outline: none;
  }
`;

const TurrendasInputField = React.forwardRef(({onChange, onKeyPress, value, caption}, ref) => {
    const [isFocused, setFocused] = useState(false);
    const onBlur = () => {
      setFocused(false);
      console.log(isFocused);
      // this.setState({ focused: false })
    };
    const onFocus = () => {
      setFocused(true);
      console.log(isFocused);
      // this.setState({ focused: true })
    };
    return (
      <div
        
        style={
          isFocused
            ? { ...styles.turrendasWrapper, ...styles.turrendasWrapperHighlighted}
            : { ...styles.turrendasWrapper}
        }
      >
        <div
          
          style={isFocused ? { ...styles.captionBox, ...styles.captionBoxHighlight } : { ...styles.captionBox, }}
        >
          <div
            
            style={
              isFocused
                ? { ...styles.captionBoxNested }
                : { ...styles.captionBoxNested }
            }
          >
            {caption}
          </div>
        </div>
        {/* <input placeholder="Friend" /> */}
        <TurrendasInput placeholder="Friend" onFocus={onFocus} onBlur={onBlur} onChange={onChange} ref={ref} onKeyPress={onKeyPress} value={value} />
      </div>
    );
  });

  const styles = {
    turrendasWrapper: {
        display: "flex",
        height: 60,
        border: "1px solid #d9d9d9",
        borderRadius: 5,
        background: 'white',
        maxWidth: 700,
        flex: 1,
      },
      turrendasWrapperHighlighted: {
        border: "1px solid orange",
        
      },
      captionBox: {
        width: '23%',
        color: "#676767",
        fontSize: 15,
        maxWidth: 150,
        borderRight: '1px solid #d9d9d9',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Roboto-Medium'
      },
      captionBoxNested: {
        width: '100%'
      },
      captionBoxHighlight: {
        borderRight: '1px solid orange',
      },
  }

  export default TurrendasInputField