import React from "react";
import TopLayout from './TopLayout'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    return <>
        <TopLayout/>
        {children}
    </>
};

export default Layout