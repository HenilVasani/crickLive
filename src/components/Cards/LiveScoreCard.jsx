import React, { useState } from 'react';
import './LiveScoreCard.css'; // Import the CSS file for styling

const LiveScoreCard = () => {
  const [showMoreMatches, setShowMoreMatches] = useState(false);

  const toggleMatchesVisibility = () => {
    setShowMoreMatches(!showMoreMatches);
  };

  return (
    <div className="live-score-container">
      <h1 className="text-black text-3xl font-bold mb-4 ">
        Matches for you
      </h1>
      <div className="live-matches-container">
        {/* Live Match 1 */}
        <div className="live-match-box">
          <div className="live-match-content">
          <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
                </div>
                </div>
                <p className="match-status">Day 1 : Tea Break</p>
          </div>
        </div>
        {/* Live Match 2 */}
        <div className="live-match-box">
          <div className="live-match-content">
          <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
          </div>
        </div>
        {/* Live Match 3 */}
        <div className="live-match-box">
          <div className="live-match-content">
          <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
          </div>
        </div>
        {/* Live Match 4 */}
        <div className="live-match-box">
          <div className="live-match-content">
          <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
          </div>
        </div>
        {/* Additional Matches */}
        {showMoreMatches && (
          <>
            <div className="live-match-box">
              <div className="live-match-content">
              <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
              </div>
            </div>
            <div className="live-match-box">
              <div className="live-match-content">
              <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
              </div>
            </div>
            <div className="live-match-box">
              <div className="live-match-content">
              <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
              </div>
            </div>
            <div className="live-match-box">
              <div className="live-match-content">
              <h2 className="match-title">AUS vs NZ 2024</h2>
            <p className="match-info">1st TEST, Basin Reserve, Wellington</p>
            <div className="teams-container">
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/Q.png?impolicy=default_web"
                  alt="AUS"
                />
                <span className="tree-item">AUS</span>
                <span className="tree-item">147/4*</span>
                <span className="tree-item">(53.0)</span>
              </div>
              <div className="team-info">
                <img
                  className="team-logo"
                  src="https://cricketvectors.akamaized.net/Teams/R.png?impolicy=default_web"
                  alt="NZ"
                />
                <span className="tree-item">NZ</span>
                <span className="tree-item">Yet to bat</span>
              </div>
            </div>
            <p className="match-status">Day 1 : Tea Break</p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Slider button */}
      <div className="slider-btn-container" onClick={toggleMatchesVisibility}>
        <div className="slider-btn">Show More</div>
      </div>
    </div>
  );
};

export default LiveScoreCard;
