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
import { openWizardModal } from "./Redux/Actions/wizardModal";
import { openLocationModal } from "./Redux/Actions/locationModal";
import { openSearchCalendarModal } from "./Redux/Actions/searchCalendarModal";

import AvailabilityModalContent from "./components/AvailabilityModal";
import PriceModalContent from "./components/PriceModal";
import WizardModal from "./components/WizardModal";
import Search from "./components/Search";
import LocationModal from "./components/LocationModal";

// import NoMatch from '../components/NoMatch'

const styles = {
  navContainer: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: "60px",
    background: "black",
  },
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
    (state) => state.availabilityModal.openModal
  );
  const isPriceModalOpen = useSelector(
    (state) => state.priceModal.openPriceModal
  );
  const isWizardModalOpen = useSelector(
    (state) => state.wizardModal.openWizardModal
  );
  const isLocationModalOpen = useSelector(
    (state) => state.locationModal.openLocationModal
  );
  const isSearchCalendarModalOpen = useSelector(
    (state) => state.searchCalendarModal.openSearchCalendarModal
  );
  // console.log(isPriceModalOpen);
  // console.log(isPriceModalOpen);
  console.log(isWizardModalOpen);
  const dispatch = useDispatch();

  return (
    <div>
      <ModalProvider>
        {isSearchCalendarModalOpen && (
          <Modal
            onClose={() => dispatch(openSearchCalendarModal(false))}
            style={{ width: 600, textAlign: "center", zIndex: 1000 }}
          >
            <div>Poop</div>
          </Modal>
        )}
        {isLocationModalOpen && (
          <Modal
            onClose={() => dispatch(openLocationModal(false))}
            style={{ width: 600, textAlign: "center", zIndex: 1000 }}
          >
            <LocationModal></LocationModal>
          </Modal>
        )}
        {isAvailabilityModalOpen && (
          <Modal
            onClose={() => dispatch(openModal(false))}
            style={{
              width: 600,
              textAlign: "center",
              zIndex: 1000,
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
              zIndex: 1001,
            }}
          >
            <PriceModalContent></PriceModalContent>
          </Modal>
        )}
        {isWizardModalOpen && (
          <Modal
            onClose={() => dispatch(openWizardModal(false))}
            style={{
              width: 600,
              textAlign: "center",
              zIndex: 1001,
            }}
            xButton={"white"}
          >
            <WizardModal></WizardModal>
          </Modal>
        )}
        <NavBar></NavBar>
        <Switch>
          {/* <Route exact path="/home" component={Game} /> */}
          {/* <Route path="/game" component={Game} /> */}
          <Route path="/search" component={Search}></Route>
          <Route path="/host" component={Host}></Route>
          {/* <Route exact path="/hosted-vehicles" component={HostVehicles}></Route> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </ModalProvider>
    </div>
  );
};

export default Routes;
