import React, { useState } from "react";
import "./NavModal.css";
import Modal from "react-modal";
import TableOfContents from "../TableOfContents/TableOfContents";
import menu from "./menu.svg";

Modal.setAppElement("#root");

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="menuBtn" onClick={toggleModal}><img src={menu}/></button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="navModal"
                overlayClassName="navOverlay"
                closeTimeoutMS={500}
            >
                <h2 className="navModalTitle">Enter Info and Click Submit</h2>
                <br></br>
                <div className="TOC">
                    <TableOfContents />
                    <button className="navModalBtn" onClick={toggleModal}>Back</button><br/><br/>
                </div>
            </Modal>
        </div>
    );
}