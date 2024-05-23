import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="text-4xl">Card Component</div>
      <div className="component-container">
        <div className="left-section">
          <img
            className="image-element"
            src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/yellow-gerbera-daisy-yellow-daisy-flower-shutterstock-com_17178.jpg"
          />
        </div>
        <div className="right-section">
          <div className="heading-section">100+ Best Premier Jobs</div>
          <div className="description-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </div>
          <div className="timestamp-section">6:00 AM, 4/9/1989</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
