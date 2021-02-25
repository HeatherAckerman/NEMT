import React from "react";
import CreateUserModal from "../../Components/CreateUserModal/CreateUserModal"
import roadblock from "../../Components/CreateUser/roadblock.jpg"

function BusinessStructure() {
    return (
        <div className="containerCss">
            <br />
            <CreateUserModal />
            <br/>
            <img className="errorImg" src={roadblock} />
            <h1 className="errorMsg">This page is under construction.</h1>
            <br/>
            {/* LINK NEEDS TO BE CHANGED BEFORE DEPLOYMENT ONLY WORKS LOCALLY */}
            <a href={"http://localhost:3000/"}><button className="btn"><strong>Click here to go back</strong></button></a>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default BusinessStructure;