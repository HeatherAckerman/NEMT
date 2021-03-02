import React from "react";
import "../../App.css";
import "./Home.css";

function Home() {
    return (
        <div className="containerCss">
            <br /><br />
            <h1>What is NEMT</h1>
            <p>Non-Emergency Medical Transportation (NEMT) is transportation to an approved medical appointment that is paid for in part or whole by a health insurance provider. Many health insurance providers ensure their members can make it to necessary medical appointments by offering NEMT to those who need it. A NEMT provider is the medical taxi that provides that service. This site contains an overview of how to become a NEMT provider.</p>
            <br/><br/>
            <h1>Why Start a NEMT Company</h1>
            <p>One benefit of starting a NEMT business is that the only expensive purchases that need to be made are the vehicle and insurance, so startup costs are extremely low. Another perk is since NEMT companies contract directly with health insurance providers there is no need for advertising. But by far, the most rewarding part of starting this kind of business the people you’ll meet along the way. The customers are grateful for the service and it shows. They also come from diverse backgrounds so there is no limit to the conversation you can have or to the things you can learn along the way.</p>
            <br/>
            {/* ONLY WORKS LOCALLY LINK NEEDS TO BE UPDATED */}
            <a href={"http://localhost:3000/BusinessStructure"}><button className="btn">Up Next: Choosing a Business Structure</button></a>
            <h1></h1>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default Home;