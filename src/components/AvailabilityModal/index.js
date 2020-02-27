import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {openModal} from "../../Redux/Actions/availabilityModal";
import {openPriceModal} from "../../Redux/Actions/priceModal";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";


export default function AvailabilityModalContent() {
  const isModalOpen = useSelector(state => state.availabilityModal.openModal);
  const dispatch = useDispatch();
  const {height, width} = useWindowDimensions();
  //This will remove the modal from view if the width is bigger than 950 pixels
  if(width > 950){
    dispatch(openModal(false));
  }
  
  return (
    <div style={{ ...styles.modalContentWrapper }}>
       
      <h1 style={{ ...styles.dateInfo }}>Friday, Feburary 21st</h1>
      {/* Start Edit Price Row */}
      <div style={{ ...styles.editPriceWrapper }}>
        <div style={{ ...styles.editPriceRow }}>
          <div style={{ flex: 1, ...styles.rowHeaderFontSize }}>$31</div>
          <div
            style={{
              color: "rgb(255, 69, 0)",
              marginRight: 20,
              fontFamily: "Roboto-Regular",
              fontWeight: 500
            }}
            onClick={() =>
              {
                console.log("Clicked");
              dispatch(openPriceModal(true))
              }
            }
          >
            Edit
          </div>
        </div>
        <div style={{ ...styles.rowLabelFontSize }}>
          Set a custom price to override your standard price settings.
        </div>
      </div>
      {/* End of Edit Price Row */}

      {/* Start of Unavailability Row */}
      <div style={{ ...styles.editPriceWrapper }}>
        <div style={{ ...styles.editPriceRow }}>
          <div style={{ flex: 1, ...styles.rowHeaderFontSize }}>Unavailability</div>
          <div
            style={{
              color: "rgb(255, 69, 0)",
              marginRight: 20,
              fontFamily: "Roboto-Regular",
              fontWeight: 500
            }}
          >
            
          </div>
        </div>
        <div style={{ ...styles.rowLabelFontSize }}>
        Set your car’s unavailability to block bookings during these periods.
        </div>
      </div>
      {/* End of unavailability row*/}

      {/*Start of trip listed  */}
      <div style={{ ...styles.editPriceWrapper }}>
        <div style={{ ...styles.editPriceRow }}>
          <div style={{ flex: 1, ...styles.rowHeaderFontSize }}>Trips</div>
          <div
            style={{
              color: "rgb(255, 69, 0)",
              marginRight: 20,
              fontFamily: "Roboto-Regular",
              fontWeight: 500
            }}
          >
            
          </div>
        </div>
        <div style={{ ...styles.rowLabelFontSize }}>
        You don’t have any trips on this day.
        </div>
      </div>
      {/* End of trip listed */}
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
  dateInfo: {
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
