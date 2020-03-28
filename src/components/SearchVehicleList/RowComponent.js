import React from "react";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";

const Loader = ({ style }) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div>
);

const Item = ({ image, num, style, loading, heightOfBlock }) => {
  const { width } = useWindowDimensions();
  // style.height = width/1.9;
  // console.log(heightOfBlock);
  return (
    // <div style={style}>

    // </div>
 
    <div style={style} className="list-group-item">
      <div
        style={{
          width: width * 0.95,
          height: style.height,
          margin: "0 auto",
          background: "",
        }}
        className="avatar"
      >
        <div>
          <img
            alt="avatar"
            src={image}
            style={{ height: style.height * 0.75, width: "100%", borderRadius: 20, position: "relative" }}
          />
          <div style={{position: "relative", top: -(style.height/1.40), marginLeft: 15, display:"inline-block"}}>
            <div style={{paddingLeft: 12.5, paddingRight: 12.5, paddingBottom: 6,paddingTop: 6, background: "white", borderRadius: 30, fontFamily: "Roboto-Regular", fontSize: 12}}>BOOK NOW</div>
          </div>
        </div>
      </div>

      {/* <div style={{background: "red"}} className="details">
        <div className="number">
          <div className="info">
            <p className="number">#{num + 1}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const RowComponent = ({ image, num, style, loading, heightOfBlock }) => {
  return loading ? (
    <Loader style={style} />
  ) : (
    <Item image={image} num={num} style={style} loading={loading} heightOfBlock={heightOfBlock} />
  );
};

export default RowComponent;
