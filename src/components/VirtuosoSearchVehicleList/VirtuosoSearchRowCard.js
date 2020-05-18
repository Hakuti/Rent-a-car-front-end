import React from "react";
import { useWindowSize } from "../../Helpers/useWindowResize";

export default function VirtuosoSearchRowCard({ image }) {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div style={{ background: "", flex: 1 }}>
      <div style={{ ...styles.innerCaptionContainerTop }}>
        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <div style={{ flex: 1, background: "", display: "flex" }}>
            <div
              style={{
                paddingLeft: 6.5,
                paddingRight: 6.5,
                paddingBottom: 7,
                paddingTop: 7,
                background: "white",
                borderRadius: 30,
                fontSize: 12,
                fontFamily: "Roboto-Italic",
                color: "rgb(255, 69, 0)",
                marginLeft: 10,
              }}
            >
              Available
            </div>
          </div>
          <div
            style={{
              flex: 1,
              background: "",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "white",
                opacity: 0.8,
                fontSize: 30,
                marginRight: 10,
              }}
            >
              {/* <i className="fas fa-heart" style={{}}></i> */}
              <i className="far fa-bookmark"></i>
            </div>
          </div>
        </div>
      </div>
      <div style={{ ...styles.innerCaptionContainerBottom }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: 5,
              opacity: 0.8,
              color: "black",
              background: "white",
              marginRight: 10,
              fontFamily: "Roboto-Regular",
              fontSize: 12,
            }}
          >
            1km
          </div>
        </div>
      </div>
      <div style={{ height: "70%", display: "flex", flex: 1, background: "" }}>
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
          src={image}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "start",
          fontSize: 21,
          color: "black",
          marginLeft: 10,
          fontFamily: "Roboto-Medium",
          // background: "orange",
          flexWrap: "wrap",
        }}
      >
        Aston Martin Vanquish Zagato - 2018
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: 12,
          alignItems: "center",
          background: "",
          position: "relative",
          top: -5,
          background: "",
        }}
      >
        {" "}
        <i
          className="fas fa-star"
          style={{
            color: "rgb(255, 69, 0)",
            fontSize: 18,
            background: "",
          }}
        ></i>
        <div
          style={{
            fontSize: 18,
            marginLeft: 5,
            fontFamily: "Roboto-Regular",
            fontWeight: 300,
            paddingTop: 3,
            color: "black",
          }}
        >
          4.5
        </div>
        <div
          style={{
            fontSize: 14,
            marginLeft: 5,
            fontFamily: "Roboto-Regular",
            fontWeight: 300,
            paddingTop: 3,
            color: "black",
          }}
        >
          {"(41 trips)"}
        </div>
      </div>
      <div style={{ background: "", display: "flex", marginLeft: 10, fontSize: "80%" }}>
        <div
          style={{
            border: "1px solid black",
            borderRadius: 5,
            width: "100px",
            height: "25px",
            fontFamily: "Roboto-Medium",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            background: "",
          }}
        >
          GRAND HOST
        </div>
        <div
          style={{
            marginLeft: 5,
            border: "1px solid rgb(46, 46, 46)",
            borderRadius: 5,
            width: "100px",
            height: "25px",
            fontFamily: "Roboto-Regular",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            background: "#100301",
          }}
        >
          MANUAL
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            background: "",
            flex: 1,
            alignItems: "center",
            fontFamily: "Roboto-Medium",
            marginRight: 20,
            fontSize: 14,
            color: "black",
            position: "relative",
            right: 0,
            top: -4,
          }}
        >
          <div
            style={{
              background: "rgb(255, 69, 0)",
              color: "white",
              borderRadius: 300,
              paddingRight: 7,
              paddingLeft: 7,
              paddingBottom: 5,
              paddingTop: 5,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            $12/
            <p
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 11,
                position: "relative",
                marginTop: 2,
              }}
            >
              day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  innerCaptionContainerTop: {
    display: "flex",
    background: "",
    position: "absolute",
    opacity: 1,
    height: 50,
    top: 10,
    width: "100%",
  },
  innerCaptionContainerBottom: {
    display: "flex",
    background: "",
    position: "absolute",
    opacity: 0.5,
    height: 50,
    bottom: "30%",
    width: "100%",
  },
};
