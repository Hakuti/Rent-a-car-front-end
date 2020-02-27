import React from 'react';
import ResponsiveLayout from '../ResponsiveLayout';
import MobileView from './MobileView';
import DesktopView from './DesktopView'

const Content = ({items}) => {
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

export default Content;