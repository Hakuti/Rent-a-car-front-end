import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {openModal} from "../../Redux/Actions/availabilityModal";
import {openPriceModal} from "../../Redux/Actions/priceModal";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";


export default function PriceModalContent() {
  const dispatch = useDispatch();
  const {height, width} = useWindowDimensions();
  //This will remove the modal from view if the width is bigger than 950 pixels
  if(width > 950){
    dispatch(openPriceModal(false));
  }
  
  return (
    <div style={{ ...styles.modalContentWrapper }}>
       
      <h1 style={{ ...styles.priceInfo }}>Edit Price</h1>
      
     
    </div>
    
  );
}

const styles = {
  modalContentWrapper: {
    marginTop: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 20
  },
  priceInfo: {
    fontFamily: "Roboto-Bold",
    fontSize: 27,
    color: "black"
  },
  editPriceWrapper: {
    flexDirection: "column",
    marginTop: 20
  },
  editPriceRow: {
    display: "flex"
  },
  rowHeaderFontSize: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "black"
  },
  rowLabelFontSize: {
    marginTop: 8,
    fontSize: 13,
    color: "gray"
  }
};
