import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { useSelector, useDispatch} from 'react-redux';

const Search = () => {
    const history = useSelector(store => store.router);
  return (
    <ResponsiveLayout
      breakPoint={950}
      renderDesktop={() => (
        <DesktopView history={history}></DesktopView>
      )}
      renderMobile={() => (
        <MobileView history={history}></MobileView>
      )}
    //   path={props.history}
    ></ResponsiveLayout>
  );
};

export default Search