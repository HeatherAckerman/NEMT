import React, { useState } from "react";
import "./CreateUserModal.css";
import Modal from "react-modal";
import CreateUser from "../CreateUser/CreateUser";

Modal.setAppElement("#root");

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="btn" onClick={toggleModal}><strong>Click HERE to be notified of site updates</strong></button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <h2 className="modalTitle">Enter Info and Click Submit</h2>
                <br></br>
                <div style={{ textAlign: "center", zoom: 2 }}>
                    <CreateUser />
                    <button className="modalBtn" onClick={toggleModal}>Back</button><br/><br/>
                </div>
            </Modal>
        </div>
    );
}