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
        <div className="all">
            <div style={{ textAlign: "center" }}>
                <button style={{ background: "rgb(45,49,66)", color: "white", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "80%" }} onClick={toggleModal}><strong>Click HERE to be notified when the site updates</strong></button>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
                style={{ zoom: 5 }}
            >
                <h2>Enter Info and Click Submit</h2>
                <br></br>
                <div style={{ textAlign: "center", zoom: 2 }}>
                    <CreateUser/><br/>
                    <button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "50%", width: "30%" }} onClick={toggleModal}><strong>Close</strong></button>
                </div>
            </Modal>
        </div>
    );
}