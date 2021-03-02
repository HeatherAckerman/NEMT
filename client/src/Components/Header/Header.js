import React from "react";
import StickyHeader from 'react-sticky-header';
import './Header.css'
import NavModal from "../NavModal/NavModal.js"

function Header() {
    return (
        <>
            <StickyHeader>
                <nav className="navCss" style={{ position: "fixed" }}>
                    <NavModal />
                </nav>
            </StickyHeader>
        </>
    );
}

export default Header;