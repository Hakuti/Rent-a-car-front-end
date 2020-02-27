import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from './MobileView';
import DesktopView from './DesktopView'

const Game = (props) => {
    console.log("testing")
    return (
    <ResponsiveLayout
        breakPoint={950}
        renderDesktop={() => (
            <DesktopView items={props.items}></DesktopView>
        )}
        renderMobile={() => (
            <MobileView items ={props.items}></MobileView>
        )}
    ></ResponsiveLayout>
)
}

export default Game;