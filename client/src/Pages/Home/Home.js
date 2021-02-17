import React from "react";
import "../../App.css";
import "./home.css";

function Home() {
    return (
        <div className="containerCss">
            <br /><br />
            <h1>What is NEMT</h1>
            <p>Non-Emergency Medical Transportation (NEMT) is transportation to an approved medical appointment that is paid for in part or whole by a health insurance provider. Many health insurance providers ensure their members can make it to necessary medical appointments by offering NEMT to those who need it. A NEMT provider is the medical taxi that provides that service. This site contains an overview of how to become a NEMT provider.</p>
            <br/><br/>

            {/* ONLY WORKS LOCALLY LINK NEEDS TO BE UPDATED */}
            <a href={"http://localhost:3000/BusinessStructure"}>Up Next: Choosing a Business Structure</a>
            <h1></h1>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Home;