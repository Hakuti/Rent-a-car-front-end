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
  const [showDropDown, setShowDropDown] = useState(false);
  const model = useRef(null);
  // const [make, setMake] = useState({});
  const make = useRef(null);
  const hwyMPG = useRef(null);
  const cityMPG = useRef(null);
  const numOfSeats = useRef(null);
  const gasGrade = useRef(null);
  const numOfDoors = useRef(null);
  const numOfDoorOptions = [
    { id: 1, label: 1 },
    { id: 2, label: 2 },
    {id: 3, label: 3},
    {id: 4, label: 4}
  ];
  const scrollToRef = ref => {
    console.log(ref);
    window.scrollTo(0, ref.current.offsetTop);
  };
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
  const onChangeBoxOptions = (e, props, ref, isKeyPress) => {
    console.log(ref);
    console.log(props);
    if (props.input.onChange) {
      props.input.onChange(e);
    }
    if (ref && !isKeyPress) {
      ref.current.focus();
    }
  };

  const onKeyPressConst = (e, ref, nextItemIsDiv) => {
    if (e.nativeEvent.keyCode === 13 && !nextItemIsDiv) {
      console.log("Yes");
      console.log(ref);
      ref.current.focus();
    }
    if (e.nativeEvent.keyCode === 13 && nextItemIsDiv) {
      console.log("Here in scrollTo instead");
      console.log(ref);
      // scrollToRef(ref);
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
            <div style={{ overflowY: "scroll", height: bodyHeight, marginBottom: 20 }}>
              <div>
                <Field name="Make">
                  {props => (
                    <div>
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
                    </div>
                  )}
                </Field>
                <Error name="Make" />
              </div>
              <div>
                <Field name="Model">
                  {props => (
                    <div>
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
                    </div>
                  )}
                </Field>
                <Error name="Model" />
              </div>
              <div>
                <Field name="cityMPG">
                  {props => (
                    <div>
                      <TurrendasInputField
                      ref={cityMPG}
                      onChange={e => onChangeConst(e, props, null, true)}
                      onKeyPress={e => onKeyPressConst(e, hwyMPG, false)}
                      value={props.input.value}
                      caption="City MPG"
                    />
                    </div>
                  )}
                </Field>
                <Error name="cityMPG" />
              </div>
              <div>
                <div>
                  <Field name="hwyMPG" validate={required}>
                    {props => (
                      
                       <TurrendasInputField
                       ref={hwyMPG}
                       onChange={e => onChangeConst(e, props, null, true)}
                       onKeyPress={e => onKeyPressConst(e, numOfDoors, false)}
                       value={props.input.value}
                       caption="Highway MPG"
                     />
                      
                    )}
                    
                  </Field>
                </div>
                <Error name="hwyMPG" />
              </div>
              <div style={{marginTop: 20}}>
                <label>Number of seats</label>
                <div>
                  <Field name="numOfSeats" validate={boxRequired}>
                    {props => (
                      <div
                        ref={numOfSeats}
                        style={{ display: "flex", background: "" }}
                      >
                        <WizardMultiSelect
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
              <div style={{marginTop: 20}}>
                <label>Number of doors</label>
                <div>
                  <Field name="numOfDoors" validate={boxRequired}>
                    {props => (
                      <div
                        ref={numOfSeats}
                        style={{ display: "flex", background: "" }}
                      >
                        <WizardMultiSelect
                          options={numOfDoorOptions}
                          {...props}
                          onChange={onChangeBoxOptions}
                        ></WizardMultiSelect>
                      </div>
                    )}
                  </Field>
                </div>
                <Error name="numOfDoors" />
              </div>  
            </div>
          </Wizard.Page>
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
  }
};
