import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { openWizardModal } from "../../Redux/Actions/wizardModal";
import { Make } from "../../Constants/WizardConstants";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";
import { Field } from "react-final-form";
import Wizard from "./Wizard";
import _ from 'lodash';
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
  console.log(value)
  if (make.indexOf(value) > -1) {
    return undefined;
  }
  return "Required";
};
//Validation for Box to be filled
// const boxRequired = value => (!_.isEmpty(value) ? undefined: "Required");
const boxRequired = value => {
  console.log(value);
 let isEmpty = _.isEmpty(value)
 
  console.log(isEmpty)
}
// const required = value => (value.numOfSeats ?)
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


const ButtonComponent = (props) => {
  const styles = {
    box: {
      width: "25%",
      paddingTop: 25,
      paddingBottom: 25,
      background: "white",
      textAlign: "center",
      margin: 5
    },
    borderHighlight: {
      border: "solid 3px orange"
    }
  }
  const [highlight, setHighlighted] = useState(props.highlight);
  const checkIt = (e) => {
    let selected = props.selectCallBack({id: props.id, label: props.label, highlight: highlight}, props.index);
    console.log(selected);
    if(selected.highlight == true){
      props.onChange({id: props.id, label: props.label}, props, null, null);
    }else {
      props.onChange({}, props, null, null);
    }
  }
  //Item here is clicked and needs to return back that it has been clicked to Parent
  //Parent then needs to inform if such an item is ready to be highlighted or not
  // const itemClicked = () => {

  // }
  return(
    <div key={props.id} style={ props.highlight ? {...styles.box, ...styles.borderHighlight}: {...styles.box}} onClick={checkIt}>{props.label}</div>
  )

}

const MultipleButton = (props) => {
  console.log(props.input.value);
  let secArr = []
  let x = 1;
  if(x){
    console.log("Test");
  }
  for(let item of props.options){
    if(props.input.value.id == item.id){
      console.log("Here");
      item.highlight = true
      console.log(item);
      secArr.push(item);
    }
    if(props.input.value.id !== item.id){
      item.highlight = false;
      secArr.push(item)
    }
  }
  console.log(props.options);
  console.log(secArr);
  // const [arr, setArr] = useState([{id: 1, label: 1, highlight: false}, {id: 2, label: 2, highlight: false}])
  const [arr, setArr] = useState(secArr)
  const callBack = (selected, index) => {
    /**
     * First step is to find the currently highlighted if there is any
     */
    let currentlyHighlightedItemIfAny;
    for(let item of arr){
      if(item.highlight == true){
        currentlyHighlightedItemIfAny = item
      }
    }
    if(currentlyHighlightedItemIfAny){
      if(currentlyHighlightedItemIfAny.id === selected.id){
        
        arr[index].highlight = false 
        let newArr = arr
        setArr(newArr);
        return(newArr[index]);
      }else if(currentlyHighlightedItemIfAny.id !== selected.id){
        
        let indexOfHighlightedItem = arr.indexOf(currentlyHighlightedItemIfAny);
        arr[indexOfHighlightedItem].highlight = false;
        arr[index].highlight = true;
        let newArr = arr;
        setArr(newArr);
        return(newArr[index])
      }
    }else{
      arr[index].highlight = true;
      let newArr = arr;
      setArr(newArr);
      return(newArr[index])
    }
    
  }
  const items = arr.map((element, index) => (
    <ButtonComponent id={element.id} index={index} label={element.label} highlight={element.highlight} selectCallBack={callBack} {...props} ></ButtonComponent>
    // <p key={element.id} onClick={{}}>Hello from {element.label}!</p>
  ))
  return items

}


export default function WizardModal() {
  const isModalOpen = useSelector(state => state.wizardModal.openWizardModal);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const bodyHeight = height - 100 - 60;
  const [showDropDown, setShowDropDown] = useState(false);
  const model = useRef(null);
  const [make, setMake] = useState({});
  const hwyMPG = useRef(null);
  const cityMPG = useRef(null);
  const numOfSeats = useRef(null);
  const gasGrade = useRef(null);
  const numOfDoors = useRef(null);
  const numOfDoorOptions = [{id: 1, label: 1}, {id: 2, label: 2}];
  const scrollToRef = (ref) =>{ console.log(ref); window.scrollTo(0, ref.current.offsetTop)}   
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
    if(e.nativeEvent.keyCode === 13 && nextItemIsDiv){
      console.log("Here in scrollTo instead");
      console.log(ref);
      // scrollToRef(ref);
      ref.current.scrollIntoView({ behavior: "smooth" })
      
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
              if(_.isEmpty(values.numOfSeats)){
                errors.numOfSeats = "Required";
              }
              // if (!values.favoriteColor) {
              //   errors.favoriteColor = "Required";
              // }
              return errors;
            }}
          >
            <div style={{ overflowY: "scroll", height: bodyHeight }}>
              <div>
                <label>Make</label>
                <Field name="Make">
                  {props => (
                    <div>
                      <Select
                        onChange={e => onChangeConst(e, props, model)}
                        options={Make}
                        value={props.input.value}
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
                        value={props.input.value}
                        validate={searchBoxRequire}
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
                        style={{ ...styles.smallInput }}
                        ref={cityMPG}
                        value={props.input.value}
                      />
                    </div>
                  )}
                </Field>
                <Error name="cityMPG" />
              </div>
              <div>
                <label>hwy MPG</label>
                <div>
                  <Field name="hwyMPG" validate={required}>
                    {props => (
                      <input
                        ref={hwyMPG}
                        onChange={e => onChangeConst(e, props, null, true)}
                        onKeyPress={e => onKeyPressConst(e, numOfDoors, true)}
                        style={{ ...styles.smallInput }}
                        value={props.input.value}
                      ></input>
                    )}
                  </Field>
                </div>
                <Error name="hwyMPG" />
              </div>
              <div>
                <label>number of seats</label>
                <div>
                  <Field name="numOfSeats" validate={boxRequired}>
                    {props => (
                      <div ref={numOfSeats} style={{display: "flex", background: ""}}>
                        <MultipleButton options={numOfDoorOptions} {...props} onChange={onChangeBoxOptions}></MultipleButton>
                      </div>
                    )}
                  </Field>
                </div>
                <Error name="numOfSeats" />
              </div>
              <div>
                <label>Gasgrade</label>
                <Field name="Gasgrade">
                  {props => (
                    <div>
                      <Select
                        onChange={e => onChangeConst(e, props, numOfDoors)}
                        options={Make}
                        ref={gasGrade}
                        value={props.input.value}
                        searchable
                      />
                    </div>
                  )}
                </Field>
                <Error name="Gasgrade" />
              </div>
              <div>
                <label>number of doors</label>
                <div>
                  <Field name="numOfDoors" >
                    {props => (
                      <div ref={numOfDoors} style={{display: "flex", background: ""}}>
                        <div style={{...styles.numOfSeats}} onClick={()=> {console.log("1")}}>1</div>
                        <div style={{...styles.numOfSeats}}>2</div>
                        <div style={{...styles.numOfSeats}}>3</div>
                        <div style={{...styles.numOfSeats}}>4</div>
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
