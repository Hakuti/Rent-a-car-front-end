import React from "react";
import { useWindowDimensions } from "../../components/WindowDimensionsProvider";
import {ListContext} from "./ListComponent";
const Loader = ({ style }) => (
  <div style={style} className="list-group-loader">
    <div className="loader"></div>
  </div>
);

const Item = ({ image, num, style, loading, heightOfBlock }) => {
  const { width } = useWindowDimensions();
  const heightOfImgWrapper = style.height * 0.7;
  const heightOfTagWrapper = style.height * 0.15;
  const heightOfDescWrapper = style.height * 0.15;
  return (
    <div style={style} className="list-group-item">
      <div
        style={{
          width: width * 0.95,
          height: style.height,
          ...styles.container
        }}
      >
        <div style={{ background: "blue", height: style.height * 0.63 }}>
          <img
            alt="avatar"
            src={image}
            style={{
              height: style.height * 0.63,
              width: width * 0.95,
              borderRadius: 20,
              position: "relative"
            }}
          />
          <div
            style={{
              position: "relative",
              top: -(style.height / 1.65),
              marginLeft: 15,
              display: "inline-block",
              background: ""
            }}
          >
            <div style={{ ...styles.bookNow }}>BOOK NOW</div>
          </div>
          <div
            style={{
              ...styles.heartWrapper,
              top: -(style.height / 1.65),
              left: (width - 160) * 0.9
            }}
          >
            <i class="fas fa-heart"></i>
          </div>
        </div>
        <div style={{ ...styles.tagWrapper }}>
          <div
            style={{
              display: "flex",
              height: "100%",
              background: "",
              width: "100%",
              alignItems: "flex-start"
            }}
          >
            <div style={{ ...styles.tagHost }}>
              <div>GRAND HOST</div>
            </div>
            <div style={{ ...styles.tagTransmission }}>AUTOMATIC</div>
            <div style={{ ...styles.tagRankWrapper }}>
              <div style={{ ...styles.starWrapper }}>
                {" "}
                <i class="fas fa-star"></i>
                <div
                  style={{
                    display: "inline",
                    color: "#2E2E2E",
                    fontSize: 20,
                    marginLeft: 5,
                    background: ""
                  }}
                >
                  4.9
                </div>
              </div>
              <div style={{ ...styles.tripWrapper }}>108 trips</div>
            </div>
          </div>
        </div>
        <div style={{ ...styles.carDescWrap }}>
          <div
            style={{
              fontSize: 24,
              background: "purple",
              position: "relative",
              top: "-12px",
              fontFamily: "Roboto-Regular"
            }}
          >
            Corvette 2018
          </div>
          <div
            style={{
              fontSize: 24,
              position: "relative",
              background: "orange",
              top: "-17px",
              fontFamily: "Roboto-Medium",
              color: "black"
            }}
          >
            $299/dia
          </div>
        </div>
      </div>
    </div>
  );
};

const NewItem = ({ image, num, style, loading, heightOfBlock }) => {
  // console.log(style);
  const {setSize} = React.useContext(ListContext)
  const { width } = useWindowDimensions();
  const root = React.useRef();
  let aspectRatio = 950 / 1400;
  // console.log(num)
  // console.log(root.current.getBoundingClientRect().height);
  React.useEffect(() => {
    // console.log(root.current.getBoundingClientRect().height);

    setSize(num, root.current.getBoundingClientRect().height);
  }, [width]);

  // console.log(setSize);
  return <div ref={root} style={{...style, height: 100}}>
    Friend
  </div>
};
const RowComponent = ({ image, num, style, loading, heightOfBlock }) => {
  // const {setSize} = React.useContext(ListContext)
  // const { width } = useWindowDimensions();
return(
  // console.log(setSize);
  // return loading ? (
  //   <Loader style={style} />
  // ) : (
    <NewItem style={style} image={image} num={num}></NewItem>
    // <Item
    //   image={image}
    //   num={num}
    //   style={style}
    //   loading={loading}
    //   heightOfBlock={heightOfBlock}
    // />
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
    fontSize: 38
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
    flexDirection: "column",
    background: "green"
  },
  tagWrapper: {
    background: "orange",
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
    fontSize: 14,
    marginLeft: 25,
    maxWidth: 180,
    fontFamily: "Roboto-Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
    height: "80%"
  },
  tagTransmission: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 4,
    paddingLeft: 4,
    background: "#2E2E2E",
    width: "30%",
    maxHeight: 50,
    borderRadius: 5,
    border: "solid 1px #2E2E2E",
    textAlign: "center",
    color: "white",
    fontSize: 14,
    marginLeft: 10,
    maxHeight: 50,
    maxWidth: 180,
    fontFamily: "Roboto-Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
  },
  tagRankWrapper: {
    display: "flex",
    flexDirection: "column",
    background: "",
    flex: 1,
    color: "#2E2E2E",
    alignItems: "flex-start",
    position: "relative"
    // top: 10
  },
  starWrapper: {
    background: "",
    display: "inline",
    color: "orange",
    fontSize: 26,
    zIndex: 1,
    marginLeft: 20
  },
  tripWrapper: {
    background: "",
    display: "inline",
    position: "relative",
    fontSize: "17px",
    marginLeft: 22
  },
  carDescWrap: {
    background: "blue",
    marginLeft: 25,
    display: "inline"
  }
};
export default RowComponent;
