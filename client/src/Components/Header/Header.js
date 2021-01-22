import React from "react";
import StickyHeader from 'react-sticky-header';
import './Header.css'

function Header() {
    return (
        <>
            <StickyHeader>
                <nav className="navCss" style={{ position: "fixed" }}>
                </nav>
            </StickyHeader>
        </>
    );
}

export default Header;