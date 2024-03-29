import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { openWizardModal } from "../../Redux/Actions/wizardModal";
import { Make } from "../../Constants/WizardConstants";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";
import { Field } from "react-final-form";
import Wizard from "./Wizard";
import TurrendasInputField from "../TurrendasInputField";
import _ from "lodash";
import TurrendasSelect from "../TurrendasSelect";
import WizardMultiSelect from "../WizardMultiSelect";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);
const make = ["Honda", "Toyota", "Nissan"];
const required = value => (value ? undefined : "Required");
//Validation for searchbox to be filled
const searchBoxRequire = value => {
  console.log(value);
  if (make.indexOf(value) > -1) {
    return undefined;
  }
  return "Required";
};
//Validation for Box to be filled
// const boxRequired = value => (!_.isEmpty(value) ? undefined: "Required");
const boxRequired = value => {
  console.log(value);
  let isEmpty = _.isEmpty(value);

  console.log(isEmpty);
};

export default function WizardModal() {
  const isModalOpen = useSelector(state => state.wizardModal.openWizardModal);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const bodyHeight = height - 100 - 60;
  const model = useRef(null);
  const make = useRef(null);
  const hwyMPG = useRef(null);
  const cityMPG = useRef(null);
  const numOfSeats = useRef(null);
  const gasGrade = useRef(null);
  const numOfDoors = useRef(null);
  const numOfDoorOptions = [
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    { id: 3, label: 3 },
    { id: 4, label: 4 }
  ];

  //This function changes the focus to the next input
  //Checks if it is an input or a select
  const onChangeConst = (e, props, ref, isKeyPress) => {
    console.log(ref);
    console.log(props);
    console.log(e);
    if (props.input.onChange) {
      props.input.onChange(e);
    }
    if (ref && !isKeyPress) {
      ref.current.focus();
    }
  };
  //This function changes the focus to the next input/div/select
  const onChangeBoxOptions = (e, props, ref, nextItemIsDiv) => {
    console.log(ref);
    console.log(props);
    if (props.input.onChange) {
      console.log("OK");
      props.input.onChange(e);
    }
    if (ref && nextItemIsDiv) {
      // selfRefToBlur.blur();
      ref.current.scrollIntoView({ behavior: "smooth" });
      //Blur the input in order to scroll into view correctly.
      // selfRefToBlur.blur();
    }
    if (ref && !nextItemIsDiv) {
      ref.current.focus();
    }
  };

  //This function changes the focus to the next input/div/select
  const onKeyPressConst = (e, ref, nextItemIsDiv, selfRefToBlur) => {
    if (e.nativeEvent.keyCode === 13 && !nextItemIsDiv) {
      console.log("Yes");
      console.log(ref);
      ref.current.focus();
    }
    if (e.nativeEvent.keyCode === 13 && nextItemIsDiv) {
      console.log("Here in scrollTo instead");
      console.log(ref);
      // scrollToRef(ref);
      selfRefToBlur.current.blur();
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div style={{ ...styles.header, width: width }}></div>
      <div style={{ ...styles.bodyContent }}>
        <Wizard
          // initialValues={{ employed: true, stooge: "larry" }}
          onSubmit={onSubmit}
        >
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.Model) {
                errors.Model = "Required";
              }
              if (_.isEmpty(values.numOfSeats)) {
                errors.numOfSeats = "Required";
              }
              // if (!values.favoriteColor) {
              //   errors.favoriteColor = "Required";
              // }
              return errors;
            }}
          >
            <div
              style={{
                overflowY: "scroll",
                height: bodyHeight,
                marginBottom: 20
              }}
            >
              {/* -------------------Make Dropdown-------------------- */}
              <div>
                <div
                  style={{
                    ...styles.inputAlignment
                  }}
                >
                  <Field name="Make">
                    {props => (
                      <TurrendasSelect
                        onChange={e => onChangeConst(e, props, model)}
                        ref={make}
                        caption="Make"
                        value={props.input.value}
                        validate={searchBoxRequire}
                        searchable
                        options={Make}
                        last={false}
                      />
                    )}
                  </Field>
                </div>
                <Error name="Make" />
              </div>
              {/* --------------------Model Dropdown---------------- */}
              <div>
                <div
                  style={{
                    ...styles.inputAlignment
                  }}
                >
                  <Field name="Model">
                    {props => (
                      <TurrendasSelect
                        onChange={e => onChangeConst(e, props, cityMPG)}
                        ref={model}
                        caption="Model"
                        value={props.input.value}
                        validate={searchBoxRequire}
                        searchable
                        options={Make}
                        last={false}
                      />
                    )}
                  </Field>
                </div>
                <Error name="Model" />
              </div>
              {/* --------------City MPG Input -------------------- */}
              <div>
                <div
                  style={{
                    ...styles.inputAlignment
                  }}
                >
                  <Field name="cityMPG">
                    {props => (
                      <TurrendasInputField
                        ref={cityMPG}
                        onChange={e => onChangeConst(e, props, null, true)}
                        onKeyPress={e => onKeyPressConst(e, hwyMPG, false)}
                        value={props.input.value}
                        caption="City MPG"
                      />
                    )}
                  </Field>
                </div>
                <Error name="cityMPG" />
              </div>
              {/* -------------Highway MPG Input--------------  */}
              <div>
                <div
                  style={{
                    ...styles.inputAlignment
                  }}
                >
                  <Field name="hwyMPG" validate={required}>
                    {props => (
                      <TurrendasInputField
                        ref={hwyMPG}
                        onChange={e => onChangeConst(e, props, null, true)}
                        onKeyPress={e =>
                          onKeyPressConst(e, numOfSeats, true, hwyMPG)
                        }
                        value={props.input.value}
                        caption="Highway MPG"
                      />
                    )}
                  </Field>
                </div>
                <Error name="hwyMPG" />
              </div>
              {/* --------Number of Seats Multiselect----------- */}
              <div style={{ marginTop: 20 }}>
                <label style={{...styles.labelFormat}}>Number of seats</label>
                <div>
                  <Field name="numOfSeats" validate={boxRequired}>
                    {props => (
                      <div
                        ref={numOfSeats}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <WizardMultiSelect
                          //Ref to go here is for executing a certain action
                          ref={numOfDoors}
                          options={numOfDoorOptions}
                          {...props}
                          onChange={onChangeBoxOptions}
                        ></WizardMultiSelect>
                      </div>
                    )}
                  </Field>
                </div>
                <Error name="numOfSeats" />
              </div>
              {/* ------------Number of Doors Multi Select------------*/}
              <div style={{ marginTop: 20 }}>
                <label
                  style={{
                    ...styles.labelFormat
                  }}
                >
                  Number of doors
                </label>
                <div>
                  <Field name="numOfDoors" validate={boxRequired}>
                    {props => (
                      <div
                        ref={numOfDoors}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <WizardMultiSelect
                          options={numOfDoorOptions}
                          {...props}
                          ref={gasGrade}
                          nextItemIsDiv={false}
                          // ref={numOfDoors}
                          onChange={onChangeBoxOptions}
                        ></WizardMultiSelect>
                      </div>
                    )}
                  </Field>
                </div>
                <Error name="numOfDoors" />
              </div>
              {/* ---------------------Gasgrade Dropdown ------------- */}
              <div>
                <div
                  style={{
                    ...styles.inputAlignment,
                    marginBottom: 20
                  }}
                >
                  <Field name="gasGrade">
                    {props => (
                      <TurrendasSelect
                        onChange={e => onChangeConst(e, props, null)}
                        ref={gasGrade}
                        caption="Gas Grade"
                        value={props.input.value}
                        validate={searchBoxRequire}
                        searchable
                        options={Make}
                        last={true}
                      />
                    )}
                  </Field>
                </div>
                <Error name="gasGrade" />
              </div>
            </div>
          </Wizard.Page>
          {/* -----------PAGE 2------------------------------------- */}
          <Wizard.Page
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              }
              if (!values.favoriteColor) {
                errors.favoriteColor = "Required";
              }
              return errors;
            }}
          >
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
              <Error name="email" />
            </div>
            <div>
              <label>Favorite Color</label>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="#ff0000">❤️ Red</option>
                <option value="#00ff00">💚 Green</option>
                <option value="#0000ff">💙 Blue</option>
              </Field>
              <Error name="favoriteColor" />
            </div>
          </Wizard.Page>
        </Wizard>
        {/* <div style={{...styles.textTest}}></div> */}
        {/* <div style={{...styles.fixedFooter, width: width}}></div> */}
      </div>
    </div>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    height: 90,
    background: "rgb(255, 69, 0)",
    left: 0
  },
  bodyContent: {
    marginTop: 50,
    // height: 100,
    width: "100%"
    // background: "pink"
  },
  textTest: {
    fontSize: 40
  },
  fixedFooter: {
    position: "fixed",
    bottom: 0,
    left: 0,
    height: 30,
    background: "orange"
  },
  smallInput: {
    width: "50%",
    height: 40,
    fontSize: 22
  },
  numOfSeats: {
    paddingTop: 50,
    paddingBottom: 50,
    width: "25%",
    background: "white",
    margin: 5,
    cursor: "pointer",
    textAlign: "center"
  },
  customButton: {
    width: "25",
    paddingTop: 25,
    paddingBottom: 25
  },
  customButtonSelected: {
    border: "solid black 3px"
  },
  inputAlignment: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: 20
  },
  labelFormat: {
    display: "flex",
    background: "",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "Roboto-Medium"
  }
};
