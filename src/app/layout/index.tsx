import React, {useState} from "react";
import TopLayout from './TopLayout'
import MobileMenus from "@/app/layout/MobileMenus";

type LayoutProps = {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {

    const [scrollTop, setScrollTop] = useState(0)
    const [openMenus, setOpenMenus] = useState(false)

    return <div style={{height: '100vh', overflow: 'auto'}} onScroll={(event) => {
        const scrollTop = event.currentTarget.scrollTop
        setScrollTop(scrollTop)
    }}>
        <TopLayout scrollTop={scrollTop} openMenus={() => setOpenMenus(!openMenus)}/>

        {openMenus ? <MobileMenus onSign={() => setOpenMenus(false)} onScrollTop={setScrollTop}/> : children}
    </div>
};

export default Layout
