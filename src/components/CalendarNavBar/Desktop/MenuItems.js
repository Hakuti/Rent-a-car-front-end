import React from "react";
import Interactive from "react-interactive";

export default function ProfileNavMenuItems() {
  const MenuItems = ["Host", "Messages", "Notifications", "Settings"];

  return (
    <div style={{}}>
      {MenuItems.map((item) => {
        return (
          <Interactive
            as="div"
            style={{ ...styles.fontStyle }}
            hover={{ color: "", background: "rgba(204, 204, 204, 0.5)" }}
          >
            {/* <div key={item} style={{ ...styles.fontStyle }}> */}
            {/* </div> */}
            <div style={{ marginLeft: 20 }}>{item}</div>
          </Interactive>
        );
      })}
      <div style={{ width: "100%", height: "1px", background: "rgba(204, 204, 204, 0.5)" }}></div>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 14,
        }}
      >
        <Interactive
          as="div"
          hover={{ color: "", background: "rgba(204, 204, 204, 0.5)" }}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            fontFamily: "Roboto-Regular"
          }}
        >
          <div style={{ marginLeft: 20, fontSize: 14 }}>Account</div>
        </Interactive>
        <Interactive
          as="div"
          hover={{ color: "", background: "rgba(204, 204, 204, 0.5)" }}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            fontFamily: "Roboto-Regular"
          }}
        >
          <div style={{ marginLeft: 20, fontSize: 14}}>Log Out</div>
        </Interactive>
      </div>
    </div>
  );
}

const styles = {
  fontStyle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: "rgb(46, 46, 46)",
  },
};
