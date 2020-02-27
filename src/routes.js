import React from "react";
import { Route, Switch } from "react-router";
import Game from "./components/Game";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Host from "./components/Host";
import { useSelector, useDispatch } from "react-redux";
import { ModalProvider, Modal } from "./GeneralModal";
import { openModal } from "./Redux/Actions/availabilityModal";
import { openPriceModal } from "./Redux/Actions/priceModal";

import AvailabilityModalContent from "./components/AvailabilityModal";
import PriceModalContent from "./components/PriceModal";

// import NoMatch from '../components/NoMatch'

const styles = {
  navContainer: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "60px",
    background: "black"
  }
};

// const NavBar = (props) => {
//   const history = useSelector(store => store.router);
//   console.log(history);
//   return (
//     <div style={styles.navContainer}>
//       {history.location.pathname === '/game' ? <DefaultNavBar/> : <CalendarNavBar/>}
//     </div>
//   )
// }

const Routes = () => {
  const isAvailabilityModalOpen = useSelector(
    state => state.availabilityModal.openModal
  );
  const isPriceModalOpen = useSelector(
    state => state.priceModal.openPriceModal
  );
  console.log(isPriceModalOpen);
  console.log(isPriceModalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <ModalProvider>
        {isAvailabilityModalOpen && (
          <Modal
            onClose={() => dispatch(openModal(false))}
            style={{
              width: 600,
              textAlign: "center",
              zIndex: 1000
            }}
          >
            <AvailabilityModalContent></AvailabilityModalContent>
          </Modal>
        )}
        {isPriceModalOpen && (
          <Modal
            onClose={() => dispatch(openPriceModal(false))}
            style={{
              width: 600,
              textAlign: "center",
              zIndex: 1001
            }}
          >
            <PriceModalContent></PriceModalContent>
          </Modal>
        )}
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home" component={Game} />
          {/* <Route path="/game" component={Game} /> */}
          <Route path="/game" render={() => <div>Hi</div>}></Route>
          <Route path="/host" component={Host}></Route>
          {/* <Route exact path="/hosted-vehicles" component={HostVehicles}></Route> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </ModalProvider>
    </div>
  );
};

export default Routes;
