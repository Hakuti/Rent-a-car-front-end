import React from "react";
import Interactive from "react-interactive";
import * as actions from '../../Redux/Actions/location'
import { push } from 'connected-react-router';
import { useSelector, useDispatch} from 'react-redux';

const arrayOfElements = [
  { id: 1, desc: "Hi" },
  { id: 2, desc: "Friend" }
];

const goToPage = () => {

}

const GeoElement = props => {
  console.log(props);
  const dispatch = useDispatch();
  return <Interactive as='div' hover={{color: 'green'}} onClick={() => dispatch(actions.setLocation(props))}>{props.Location.Address.Label}</Interactive>;
};
const GeoSearch = ({results}) => {
    console.log(results);
  return (
    <>
      {results.map(item => {
        console.log(item);
        return <GeoElement key={item.Location.LocationId} {...item}></GeoElement>;
      })}
    </>
  );
};

const geoStyles = {};

export default GeoSearch;
