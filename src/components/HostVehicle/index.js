import React from "react";
import VehicleItem from "../VehicleItem";
import { useSelector, useDispatch } from "react-redux";
import {openWizardModal} from "../../Redux/Actions/wizardModal";
export default function Vehicles() {
  const isWizardModalOpen = useSelector(
    state => state.wizardModal.openWizardModal
  );
  const dispatch = useDispatch();
 
  console.log(isWizardModalOpen);
  // console.log("Currently grabbing info");
  let tempCarData = [
    { make: "Honda", model: "Accord", img: "" },
    { make: "Toyota", model: "Camry", img: "" }
  ];
  //I need to make it so an API request only happens X value changes at the top
  //
  // useEffect(() => console.log('value changed!'), [props.isOpen]);
  const Cars = () => {
    tempCarData = tempCarData.map(value => {
      return (
        <div
          style={{
            marginTop: 10,
            position: "relative",
            display: "flex",
            flex: 1,
            justifyContent: "center"
          }}
        >
          <VehicleItem></VehicleItem>
        </div>
      );
    });
    return tempCarData;
  };

  return (
    <div>
      <div
        style={{ ...styles.addVehicle }}
        onClick={() => {
          console.log("Clicked");
          dispatch(openWizardModal(true));
          console.log(isWizardModalOpen);
        }}
      >
        {/* {{isWizardModalOpen}} */}
        Add New Vehicle +
      </div>
      <div style={{ ...styles.carsWrapper }}>
        <Cars></Cars>
      </div>
    </div>
  );
}

const styles = {
  addVehicle: {
    color: "white",
    background: "rgb(255, 69, 0)",
    minWidth: "200px",
    width: "25%",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: "3%",
    borderRadius: 30,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    position: "relative",
    cursor: "pointer"
    // zIndex: 99,
    // bottom: -300
  },
  carsWrapper: {
    marginTop: 20,
    position: "relative"
  }
};
