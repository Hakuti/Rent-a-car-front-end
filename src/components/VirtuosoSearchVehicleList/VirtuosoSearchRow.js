import React from "react";
import { useWindowSize } from "../../Helpers/useWindowResize";
import VirtuosoSearchRowCard from "./VirtuosoSearchRowCard";

export default function VirtuosoSearchRow({ index, item }) {
  // console.log(index);
  // console.log(item);
  const [windowWidth, windowHeight] = useWindowSize();
  //Width of window i.e 900 divided by ratio 900/1.5 =
  let width = windowWidth / 1.3;
  // let calcDivHeight = () => { 
  //   if(windowWidth < 340){
  //     return windowWidth * 1.2
  //   }
  // }
  
  let calcImageHeight = () => {
    // console.log(windowWidth);
    if (windowWidth > 700) {
      return "75%";
    }
    if(windowWidth < 370){
      return "60%";
    }
    return "65%";
  };
  let calcTop = () => {
    let heightOfDiv = width;
    let top = heightOfDiv - heightOfDiv * 0.19;
    return `-${top}px`;
    // if (windowWidth > 701 && windowWidth < 800) {
    //   return `-${width * 0.60}px`;
    // }
    // if(windowWidth > 601 && windowWidth < 700){
    //   return `-${width * 0.60}px`;
    // }
    // return `-${width * 0.65}px`;
  };
  let imageHeight = calcImageHeight();
  let top = calcTop();
  const addBottomMargin = () => {
    if(windowWidth < 450){
      return 50
    }
    return 0
  }
  // console.log(imageHeight);
  // const title = `${index + 1}. ${user.name}`;
  return (
    <div
      style={{
        background: "white",
        minHeight: 320,
        height: width,
        maxHeight: 450,
        maxWidth: 650,
        width: "95%",
        margin: "0 auto",
        marginTop: 20,
        marginBottom: addBottomMargin(),
        // marginBottom: 20,
        position: "relative",
        borderRadius: 0,
        display: "flex",
        // border: "1px solid black"
        // boxShadow: "-2px 6px 20px -3px rgba(43,43,43,0.5)",
      }}
    >
      <VirtuosoSearchRowCard image={item}></VirtuosoSearchRowCard>
      {/* <div style={{ height: imageHeight, width: "100%", paddingTop: 10 }}>
        <div
          style={{
            position: "absolute",
            // left: `${width * 0.08}px`,
            left: "5%",
            top: "30px",
            color: "black",
            // top: `-${width * 0.65}px`,
            padding: "7px",
            paddingRight: "12px",
            paddingLeft: "12px",
            background: "white",
            display: "inline",
            height: "30px",
            borderRadius: 30,
            fontSize: 12,
            fontFamily: "Roboto-Regular",
          }}
        >
          BOOK NOW
        </div>
        <div
          style={{
            position: "absolute",
            right: `5%`,
            top: "24.5px",
            color: "white",
            // top: `-${width * 0.65}px`,
            background: "",
            display: "inline",
            height: "30px",
            borderRadius: 30,
            fontSize: 30,
            fontFamily: "Roboto-Regular",
          }}
        >
          <i className="fas fa-heart" style={{}}></i>
        </div>
        <div
          style={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            // src="https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w"
            src={item}
            style={{ height: "100%", width: "95%", borderRadius: 3 }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: `5%`,
            bottom: "35%",
            color: "white",
            padding: 4,
            paddingLeft: 10,
            paddingRight: 10,
            // top: `-${width * 0.65}px`,
            background: "rgba(204, 204, 204, 0.5)",
            display: "inline",
            fontSize: 10,
            fontFamily: "Roboto-Regular",
          }}
        >
          1km
        </div>
        <div
          style={{
            display: "relative",
            marginLeft: "4%",
            marginTop: "5px",
            fontFamily: "Roboto-Medium",
            fontSize: "21px",
          }}
        >
          Corvette Z01 -2018
        </div>
        <div style={{ marginLeft: "4%" }}>
          <i className="fas fa-star" style={{ color: "#FF9A34" }}></i>
          <div
            style={{
              display: "inline",
              fontFamily: "Roboto-Regular",
              marginLeft: 3,
            }}
          >
            4.9
          </div>{" "}
          <div style={{ display: "inline" }}>(108 trips)</div>
        </div>
        <div style={{display: "flex", alignItems: "center", bottom: "5%", position: "absolute", background: "", width: "100%"}}>
          <div
            style={{
              marginLeft: "4%",
              marginTop: "5px",
              background: "white",
              border: "solid 1.5px black",
              padding: 5,
              paddingLeft: 15,
              paddingRight: 15,
              display: "inline-block",
              borderRadius: 5,
              fontSize: "13px",
              fontFamily:"Roboto-Medium"

            }}
          >
            GRAND HOST
          </div>
          <div
            style={{
              marginLeft: "2%",
              marginTop: "5px",
              background: "black",
              border: "solid 1.5px black",
              padding: 5,
              paddingLeft: 25,
              paddingRight: 25,
              display: "inline-block",
              color: "white",
              borderRadius: 5,
              fontSize: 13,
              fontFamily: "Roboto-Regular"
            }}
          >
            MANUAL
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              marginRight: "5%",
              marginTop: "5px",
              background: "",
              fontFamily: "Roboto-Medium",
              fontSize: 18,
              color: "black"
            }}
          >
            {" "}
            $299/day
          </div>
        </div>
        {/* <div
          style={{
            position: "relative",
            left: (windowWidth - 200) * 0.9,
            top: top,
            padding: "10px",
            background: "white",
            display: "inline",
            height: "30px",
          }}
        >
          Book Now
        </div> /*
      </div> */}
    </div>
  );
}

const styles = {
  tagWrapper: {
    display: "flex",
    justifyContent: "flex-start",
  },
  font: {
    fontFamily: "Roboto-Regular",
  },
};
