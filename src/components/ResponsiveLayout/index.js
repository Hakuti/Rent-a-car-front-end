import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useSelector, useDispatch} from 'react-redux';
import {setCurrentWidth} from '../../Redux/Actions/currentWidth';
import {setOldWidth} from '../../Redux/Actions/oldWidth';
import React, {useState} from 'react'
import { Redirect } from "react-router-dom";

const ResponsiveLayout = ({ breakPoint = 414, renderMobile, renderDesktop, path }) => {
    const history = useSelector(store => store.router);
    const oldWidth = useSelector(store => store.oldWidth.oldWidth);
    const currentWidth = useSelector(store => store.currentWidth.currentWidth);
    const dispatch = useDispatch();
    const [hasBeenResized, setResized] = useState(false);
    // console.log(path);
    // console.log(history);
    // console.log(renderMobile());
    // const test = () => {
    //     console.log("");
    // }
    //On page load, getSize, save it redux state
    //if(reduxStateEmpty){dispatch.setPrev(width)}
    //else{}
    //when I come back here, I have the oldWidth now, so now I can set a previous, width?
    //selector(currentWidth)
    //if(currentWidth != 0){
    //  dispatch.oldWidth(currentWidth)
    //}
    //This comes first, but it means I have the current Size, maybe?
    // if(currentWidth !== null){
    //     // if(oldWidth !== currentWidth){
    //     //     dispatch(setOldWidth(currentWidth));
    //     // }
    // }
    // if(currentWidth == oldWidth){
    //     console.log("Do nothing")
    // }else{
    //     dispatch(setOldWidth(currentWidth));
    // }
    // console.log(`OldWidth: ${oldWidth}`)
    // console.log(oldWidth);
    //Here we are getting the current Dimensions again
    const { width } = useWindowDimensions()
    // console.log(`width of function: ${width}`);
    // console.log("HERE");
    //let intiailzeWidth = width;
    //dispatch.currentWidth(width)
    // dispatch(setCurrentWidth(width));
    if(oldWidth == null){
        dispatch(setOldWidth(width))
    }
    //If the old width is equal to the currentWidth, which it should not be
    if(oldWidth == width){
        // console.log("Do nothing");
    }else {
        //This will allow me to redirect on page load
        //This will allow me to redirect on page resize
        if(width > 950 && path){
            if(hasBeenResized == false){
                if(oldWidth < width){
                    console.log("Testing");
                    setResized(true)
                    console.log(path);
                    if(path){
                        console.log("Okay")
                        return(<Redirect to="/host"></Redirect>)
                        // console.log(path);
                        // path.history.push('/host')
                    }
                    // push.history(‘/host’);
                }
            }
        }
        if(width < 950 && path){
            if(hasBeenResized == true){
                console.log("Made it in here")
                setResized(false);
            }
        }
        // console.log(oldWidth);
        dispatch(setOldWidth(width));
    }
    // console.log(`CurrentWidth: ${currentWidth}`);
    return ( width > breakPoint ? renderDesktop() : renderMobile());
}

export default ResponsiveLayout