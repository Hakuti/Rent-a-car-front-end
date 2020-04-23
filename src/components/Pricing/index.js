import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import styled, { css } from "styled-components";

const PriceInput = styled.input`
  width: 120px;
  min-width: 90%;
  border-radius: 30px;
  font-size: 34px;
  height: 52px;
  border: none;
  text-indent: 30px;
  font-family: "Roboto-Bold";
  color: #393939;
  ::-webkit-input-placeholder {
  }
  &:focus {
    outline: none;
  }
`;

export default function Pricing() {
  const [price, setPrice] = useState("$");

  const priceChange = e => {
    let val = e.target.value;
    console.log(e.target.value);
    if (val.length > 0 && _isNumeric(val)) {
      setPrice(val);
    } else if (val.length == 1) {
      setPrice(val);
    }
    // setPrice(e.target.value);
  };

  const _isNumeric = val => {
    return /^\d+$/.test(val.substr(1));
  };
  return (
    <div>
      <Link to={"/host/your-car"}>
        <div style={{ fontSize: 20, marginLeft: 10, color: "rgb(255, 69, 0)" }}>
          <i className="fas fa-chevron-left"></i>
          <div style={{ display: "inline", marginLeft: 5 }}>Your Car</div>
        </div>
      </Link>
      {/* Start of Pricing */}
      <div style={{ ...styles.pricingWrapper }}>
        <div style={{ ...styles.defaultPriceWrapper }}>
          <div style={{ ...styles.defaultPrice }}>
            <div style={{ ...styles.defaultPriceTitle }}>Set Default Price</div>
            <div style={{ ...styles.defaultPriceTextboxWrapper }}>
              <div style={{ ...styles.defaultPriceTextboxContainer }}>
                <PriceInput
                  type="text"
                  value={price}
                  onChange={priceChange}
                ></PriceInput>
                <div style={{ ...styles.dayFormat }}></div>
              </div>
              <div style={{ ...styles.defaultPriceUnderline }}></div>
              {/* <div style={{fontSize: 40, background: "yellow"}}>$42/day</div>
                    <div>Underlin</div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End of Pricing */}
      {/* --------------------------Spacer-------------------------- */}
      <div>Test</div>
    </div>
  );
}

const styles = {
  pricingWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: 15
  },
  defaultPriceWrapper: {
    display: "flex",
    flex: 1,
    // background: "black",
    justifyContent: "center"
  },
  defaultPrice: {
    display: "flex",
    maxWidth: 600,
    width: "90%",
    background: "white",
    flexDirection: "column",
    alignItems: "center",
    height: 160,
    borderRadius: 10,
    boxShadow: "0px 0px 9px 0px rgba(230,225,230,1)"
  },
  defaultPriceTitle: {
    marginTop: 5,
    marginBottom: "7%",
    fontFamily: "Roboto-Medium",
    color: "#393939"
  },
  defaultPriceTextboxWrapper: {
    fontFamily: "Roboto-Bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  defaultPriceTextboxContainer: {
    display: "flex",
    alignItems: "center"
    //   marginLeft: 13
  },
  dayFormat: {
    fontSize: 30
  },
  defaultPriceUnderline: {
    width: 150,
    minWidth: 100,
    height: 8,
    position: "relative",
    top: -5,
    borderRadius: 10,
    background: "rgb(255, 69, 0)"
  }
};
