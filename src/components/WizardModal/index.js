import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { openWizardModal } from "../../Redux/Actions/wizardModal";
import { Make } from "../../Constants/WizardConstants";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";
import { Field } from "react-final-form";
import Wizard from "./Wizard";
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
  if (make.indexOf(value) > -1) {
    return undefined;
  }
  return "Required";
};
// const handleKeyPress = (node, event) => {
//   // console.log(node);
//   // console.log(event);
//   return function(e){
//     e.preventDefault()
//     console.log(e);
//     console.log(node);
//   }
// }
const container = React.createRef();

export default function WizardModal() {
  const isModalOpen = useSelector(state => state.wizardModal.openWizardModal);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const bodyHeight = height - 100 - 100;
  const [showDropDown, setShowDropDown] = useState(false);
  const model = useRef(null);
  const [make, setMake] = useState({});
  const hwyMPG = useRef(null);
  const cityMPG = useRef(null);

  const onChangeConst = (e, props, ref, isKeyPress) => {
    console.log(ref);
    console.log(props);
    if (props.input.onChange) {
      props.input.onChange(e);
    }
    if(ref && (!isKeyPress)){
      ref.current.focus();
    }
  };

  const onKeyPressConst = (e, ref) => {
    if (e.nativeEvent.keyCode === 13) {
      console.log("Yes");
      ref.current.focus();
    }
  }

  /*
    This code is gonna be filled with alot of Refs for focusing to next forms.
  */

  /* 
  Okay so I need to attach a ref to my input field, that will bring up my dropdown
  The dropdown will select in a few ways, when focus is lost
  
  */

  return (
    <div>
      <div style={{ ...styles.header, width: width }}></div>
      <div style={{ ...styles.bodyContent }}>
        <Wizard
          // initialValues={{ employed: true, stooge: "larry" }}
          onSubmit={onSubmit}
        >
          <Wizard.Page>
            <div style={{ overflowY: "scroll", height: bodyHeight }}>
              <div>
                <label>Make</label>
                <Field name="Make">
                  {props => (
                    <div>
                      <Select
                        onChange={e => onChangeConst(e, props, model)}
                        options={Make}
                        searchable
                        autoFocus
                      />
                    </div>
                  )}
                </Field>
                <Error name="Make" />
              </div>
              <div>
                <label>Model</label>
                <Field name="Model">
                  {props => (
                    <div>
                      <Select
                        onChange={e => onChangeConst(e, props, cityMPG)}
                        options={Make}
                        ref={model}
                        searchable
                      />
                    </div>
                  )}
                </Field>
                <Error name="Model" />
              </div>
              <div>
                <label>City MPG</label>
                <Field name="cityMPG">
                  {props => (
                    <div>
                      <input
                        onChange={e => onChangeConst(e, props, hwyMPG, true)}
                        onKeyPress={e => onKeyPressConst(e, hwyMPG)}
                        ref={cityMPG}
                      />
                    </div>
                  )}
                </Field>
                <Error name="cityMPG" />
              </div>
              <div>
                <label>hwyMPG</label>
                <Field name="hwyMPG" validate={required}>
                  {props => <input ref={hwyMPG}></input>}
                </Field>
                <Error name="hwyMPG" />
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
    marginTop: 80,
    // height: 100,
    width: "100%",
    background: "pink"
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
  }
};
