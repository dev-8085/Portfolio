import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Interships <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>EazyByts.com</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            A full-stack Stock Market Dashboard built with React, TailwindCSS, Node.js, Express.js, MongoDB, and AWS. It offers real-time stock data, interactive charts, and a responsive UI, designed for both individual investors and professionals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Cognifyz_Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Splashwheels is a water camper booking platform built with React, Tailwind CSS, Node.js, Express, MongoDB, and AWS, offering a seamless and secure booking experience for your water adventures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Codtech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Work is currently in progress on it, I will update you on it soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
