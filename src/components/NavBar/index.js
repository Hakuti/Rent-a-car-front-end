import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from './MobileView';
import DesktopView from './DesktopView'
import { useSelector, useDispatch} from 'react-redux';


const styles = {
    navBackgroundColor: {
        background: "#FF4500"
    }
}

const NavBar = (props) =>{
    // console.log("Testing Nav Bar")
    const history = useSelector(store => store.router);
    return (
        <ResponsiveLayout
            breakPoint={950}
            renderDesktop={() => (
                <DesktopView history={history} styles={styles}></DesktopView>
            )}
            renderMobile={() => (
                <MobileView history={history} styles={styles}></MobileView>
            )}
        ></ResponsiveLayout>
    )
}


export default NavBar;