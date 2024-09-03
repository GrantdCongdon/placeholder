import React from "react";
import "./Projects.css";

function Projects() {
    return (
        <div className="container">
            <div className="project">
                <h2>Colton Fishing Rod</h2>
                <div className="images">
                    <img src="/projectboard/assets/fishing-rod.jpg" alt="Fishing rod" className="fishing-rod"/>
                </div>
                <div className="description">
                    <ul className="description-list">
                        <li>Joined team to improve fishing rod designed for Colton, who has Arthrogryposis Multiforme Congenita (AMC)</li>
                        <li>Served as Project Archivist to ensure team progress was documented and future teams can continue our work</li>
                    </ul>
                </div>
            </div>
            <div className="project">
                <h2>Motion-Controled Wheelchair</h2>
                <div className="images">
                    <img id="upper-img" src="/projectboard/assets/wheelchair.png" alt="wheelchair" className="wheelchair"/>
                    <img id="lower-img" src="/projectboard/assets/headset.png" alt="headset" className="headset"/>
                </div>
                <div className="description">
                    <ul id="top-text">
                        <li>I developed a novel interface that integrates muscle signals with accelerometer data to control an electric wheelchair,
                        aiming to provide individuals with quadriplegia or lower body limitations with a seamless navigation solution. Combining
                        Raspberry Pi, Arduino, Cytron motor controllers, and OpenBCI's Python library, I created a transformative technology that
                        bridges the gap between traditional wheelchairs and brain-controlled mobility devices.</li>
                    </ul>
                    <ul id="bottom-text">
                        <li>To control the wheelchair, I opted for a hybrid approach utilizing EMG and an accelerometer for natural navigation control.
                        I went through many headset designs to create a cost-effective miniature head movement tracking system while maintaining
                        the accuracy of the original Ganglion board, thus advancing accessibility to innovative mobility solutions.</li>
                    </ul>
                </div>
            </div>
            <div className="project">
                <h2>Micromouse</h2>
                <div className="images">
                    <img src="/projectboard/assets/micromouse.png" alt="micromouse" className="micromouse"/>
                </div>
                <div className="description">
                    <ul>
                        <li>I built and programmed a robot for a Micromouse competition where a robot needs to find the center of an unknown maze in
                        the fastest possible way. Opting to design a completely new robot for the competition rather than use an existing one
                        from a previous team, I embraced the challenges of redesign, including selecting the appropriate microcontroller and
                        building custom distance sensors, resulting in a deeper understanding of the robot's components and a more suitable
                        machine for the competition.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Projects;