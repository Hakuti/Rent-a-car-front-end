import React, {useState} from "react";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";

const TestDiv = (props) => {
  // console.log(props)
  return(
    <div style={{ position: "relative", top: 140, background: "yellow"}}>Hello</div>
  )
}
const DesktopView = ({ history, styles }) => {
  const {width, height} = useWindowDimensions();
  const [isDesktop, setResize] = useState(false);
  let { path, url } = useRouteMatch();
  console.log(isDesktop);

  if(width > 950){
    if(isDesktop == false){
      console.log("Is here")
      console.log(history);
      setResize(true);
      // return(<Redirect to='/host/poop'></Redirect>)
      //Will prevent from resizing infinitely
    }
  }

  console.log(isDesktop);
  // let { path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  return (
    <div>
      {isDesktop ?<Redirect to='/host'></Redirect>: null}
      <Switch>
        <Route path={`${path}/vehicles`}>
          <TestDiv></TestDiv>
        </Route>
        <Route path={`${path}/poop`}>
          <div style={{top: 140, position: "relative", background: "black"}}>Nothing</div>
        </Route>

      </Switch>
    </div>
  );
};
const navStyles = {
  containerProps: {
    width: "100%",
    height: 60
  }
};

export default DesktopView;
