import React, {useState, useEffect} from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from './MobileView';
import DesktopView from './DesktopView'
import { useSelector, useDispatch} from 'react-redux';
import {useWindowDimensions} from "../WindowDimensionsProvider";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect
  } from "react-router-dom";
const styles = {
    navBackgroundColor: {
        background: "white",
    }

}
const Host = (props) =>{
    // console.log("Testing Nav Bar")
    const history = useSelector(store => store.router);
    const {width, height} = useWindowDimensions();
    const currentWidth = useSelector(store => store.currentWidth.currentWidth);
    const oldWidth = useSelector(store => store.oldWidth.oldWidth);
    const [hasBeenResized, setResizedState] = useState(false)
    // console.log(width);
    // console.log(props);
    // console.log(currentWidth);
    // console.log(oldWidth);
    // if(currentWidth > 950){
    //     // console.log("Made it here");
    //     if(hasBeenResized == false){
    //         // console.log("In second nested");
    //         //Basically, if you are incrementing up sizes, lets see where this gets buggy tho
    //         if(oldWidth <= 950){
    //             // console.log("In third nested");
    //             // hasBeenResized(true)
    //             // console.log("Resized successfully");
    //             // push.history(‘/host’);
    //         }
    //     }
    // }
    // console.log(props);
    useEffect(() => {
        // console.log("In here");
        
        // return () => {
        //     cleanup
        // };
    }, [])

    return (
        <ResponsiveLayout
            breakPoint={950}
            renderDesktop={() => (
                <DesktopView history={history} styles={styles}></DesktopView>
            )}
            renderMobile={() => (
                <MobileView history={history} styles={styles}></MobileView>
            )}
            path={props.history}
        ></ResponsiveLayout>
    )
}



export default Host;