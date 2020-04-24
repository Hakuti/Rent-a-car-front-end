import React from "react";
import Interactive from "react-interactive";
import * as actions from "../../Redux/Actions/location";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";

const arrayOfElements = [
  { id: 1, desc: "Hi" },
  { id: 2, desc: "Friend" },
];

const defaultElements = [
  {
    id: 1,
    Location: {
      Address: {
        Label: "Current Location",
      },
    },
  },
  {
    id: 2,
    Location: {
      Address: {
        Label: "Colorado",
      },
    },
  },
  {
    id: 1,
    Location: {
      Address: {
        Label: "Nevada, Las Vegas",
      },
    },
  },
  {
    id: 1,
    Location: {
      Address: {
        Label: "United States",
      },
    },
  },{
    id: 1,
    Location: {
      Address: {
        Label: "California",
      },
    },
  },
];
const goToPage = () => {};

const GeoElement = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <Interactive
      as="div"
      hover={{ color: "rgb(255, 69, 0)" }}
      onClick={() => dispatch(actions.setLocation(props))}
      style={{height:"50px", fontSize: 20, fontFamily: "Roboto-Medium", marginLeft: 20, display: "flex", alignItems: "center"}}
    >
      <i class="fas fa-bahai" style={{color: "rgb(255, 69, 0)", marginRight: 10}}></i>
      <div style={{display: "inline-block", fontSize: 16}}>{props.Location.Address.Label}</div>
    </Interactive>
  );
};

const GeoSearch = ({ results }) => {
  console.log(results);
  return (
    <>
      {results.length > 0 ? (
        results.map((item) => {
          console.log(item);
          return (
            <GeoElement key={item.Location.LocationId} {...item}></GeoElement>
          );
        })
      ) : (
        // <div>Nothing to show here</div>
        defaultElements.map((item) => {
          console.log(item);
          return (
            <GeoElement key={item.Location.LocationId} {...item}></GeoElement>
          );
        })
      )}
    </>
  );
};

const geoStyles = {};

export default GeoSearch;
