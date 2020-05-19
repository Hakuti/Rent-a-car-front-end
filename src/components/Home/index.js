import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from './Mobile/MobileView';
import DesktopView from './Desktop/DesktopView';

const Home = ({items}) => {
    return (
    <ResponsiveLayout
        breakPoint={767}
        renderDesktop={() => (
            <DesktopView items={items}></DesktopView>
        )}
        renderMobile={() => (
            <MobileView items ={items}></MobileView>
        )}
    ></ResponsiveLayout>
)
}

export default Home;