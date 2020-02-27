import React from "react";
import { useWindowDimensions } from "../WindowDimensionsProvider";


const VehicleListingsNavBar = () => {
    return (
        <>
        <div>
            <div style={{...styles.filterHeader}}> <h4>Filters</h4></div>
        </div>
        </>
    )
}

const FilterButtonMobile = () => {

}

const FilterButtonDesktop = () => {}
const VehicleListings = () => {
  const { width, height } = useWindowDimensions();
 return(
     <div style={{width: width,...styles.container}}>
         
     </div>
 )
};

const styles = {
    filterHeader: {
        padding: "10px 16px",
        background: "#fff",
        color: "#f1f1f1",
        position: "fixed",
        top: "0",
        width: "100%"
    },
    container: {
        
    }
}

export default VehicleListings;
