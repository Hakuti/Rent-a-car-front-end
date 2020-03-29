import React from "react";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";

const Loader = ({ style }) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div>
);

const Item = ({ image, num, style, loading, heightOfBlock }) => {
  const { width } = useWindowDimensions();
  return (
    <div style={style} className="list-group-item">
      <div
        style={{
          width: width * 0.95,
          height: style.height,
          ...styles.container
        }}
      >
        <div style={{ background: "", height: style.height * 0.73 }}>
          <img
            alt="avatar"
            src={image}
            style={{
              height: style.height * 0.73,
              width: width * 0.95,
              borderRadius: 20,
              position: "relative"
            }}
          />
          <div
            style={{
              position: "relative",
              top: -(style.height / 1.34),
              marginLeft: 15,
              display: "inline-block"
            }}
          >
            <div style={{ ...styles.bookNow }}>BOOK NOW</div>
          </div>
          <div
            style={{
              ...styles.heartWrapper,
              top: -(style.height / 1.35),
              left: (width - 160) * 0.9
            }}
          >
            <i class="fas fa-heart"></i>
          </div>
        </div>
        <div style={{ ...styles.tagWrapper }}>
          <div style={{ ...styles.tagHost }}>GRAND HOST</div>
          <div style={{ ...styles.tagTransmission }}>AUTOMATIC</div>

        </div>
      </div>
    </div>
  );
};

const RowComponent = ({ image, num, style, loading, heightOfBlock }) => {
  return loading ? (
    <Loader style={style} />
  ) : (
    <Item
      image={image}
      num={num}
      style={style}
      loading={loading}
      heightOfBlock={heightOfBlock}
    />
  );
};

const styles = {
  heartWrapper: {
    position: "relative",
    background: "",
    color: "white",
    zIndex: 1,
    // right: -(width * 0.6),
    // marginLeft: (width * 0.7),
    display: "inline-block",
    fontSize: 40
  },
  bookNow: {
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 7,
    paddingTop: 7,
    background: "white",
    borderRadius: 30,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: "#070707"
  },
  container: {
    margin: "0 auto",
    background: "",
    display: "flex",
    flexDirection: "column"
  },
  tagWrapper: {
    background: "",
    display: "flex",
    marginTop: 10
  },
  tagHost: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 4,
    paddingLeft: 4,
    background: "white",
    width: "30%",
    borderRadius: 5,
    border: "solid 1px #505050",
    textAlign: "center",
    color: "#3C3C3C",
    fontSize: 16,
    marginLeft: 25,
    maxWidth: 180,
    fontFamily: "Roboto-Regular"
  },
  tagTransmission: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 4,
    paddingLeft: 4,
    background: "#2E2E2E",
    width: "30%",
    borderRadius: 5,
    border: "solid 1px #2E2E2E",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    maxWidth: 180,
    fontFamily: "Roboto-Regular"
  }
};
export default RowComponent;
