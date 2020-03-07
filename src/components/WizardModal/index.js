import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openWizardModal } from "../../Redux/Actions/wizardModal";

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

const required = value => (value ? undefined : "Required");

export default function WizardModal() {
  const isModalOpen = useSelector(state => state.wizardModal.openWizardModal);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  return (
    <div>
      <div style={{ ...styles.header, width: width }}></div>
      <div style={{ ...styles.bodyContent }}>
        <Wizard
          // initialValues={{ employed: true, stooge: "larry" }}
          onSubmit={onSubmit}
        >
          <Wizard.Page>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                style={{width: 300, height: 50, fontSize: 22, margin: "0 auto", marginTop: "10px"}}
                placeholder="First Name"
                validate={required}
              />
              <Error name="firstName" />
            </div>
            
          </Wizard.Page>
          <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.favoriteColor) {
            errors.favoriteColor = 'Required'
          }
          return errors
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
