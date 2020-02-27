import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import Vehicles from "../HostVehicle";
import Details from "../Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Host from ".";
import YourVehicle from "../YourVehicle";
import Pricing from "../Pricing";
import Availability from "../Availability";
const MobileView = ({ history, styles }) => {
  const currentVehicle = useSelector(state => state.vehicle);
  // console.log(currentVehicle);
  let { path, url } = useRouteMatch();
  const [urlVehicles, setUrlVehicles] = useState({});
  const [isLoading, setLoading] = useState(true);
  // let urlVehicles;
  useEffect(() => {
    // console.log(history.location.pathname);
    if(history.location.pathname == "/host/your-car"){
      //Here
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/photos/${currentVehicle.vehicle}`)
      .then(response => response.json())
      .then(json => {
        //Here I'd to set isLoading to False to indicate it is done loading
        setLoading(false);
        setUrlVehicles(json)
        console.log(json)
      })
      console.log("True");
    }
    console.log("value changed!");
  }, [history, currentVehicle]);
  return (
    //Change the margins here whenever the header sizer changes on mobile
    //i.e  header nav default  + and host head nav = marginSize
    //Will need to edit this so that links indicate
    <div style={{ positon: "relative", marginTop: 140 }}>
      <Switch>
        <Route path={`${path}/vehicles`}>
          <div>
            <Vehicles></Vehicles>
          </div>
        </Route>
        <Route path={`${path}/settings`}>
          <h2>Testing Switch case</h2>
        </Route>
        <Route path={`${path}/details`}>
          <Details></Details>
        </Route>
        <Route path={`${path}/calendar-details`}>
          <Availability></Availability>
        </Route>
        <Route path={`${path}/pricing`}>
          <Pricing></Pricing>
        </Route>
        <Route path={`${path}/your-car`}>
          <YourVehicle vehicle={urlVehicles} isLoading={isLoading}></YourVehicle>
        </Route>
        <Route>
          <Redirect to={`${path}/vehicles`}></Redirect>
        </Route>
      </Switch>
    </div>
  );
  //Load mobile routes here
};
const navStyles = {
  containerProps: {
    height: 40,

    boxShadow: "-4px 6px 9px -2px rgba(230,225,230,1)"
  }
};

export default MobileView;
