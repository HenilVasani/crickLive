// Open.js
import React from 'react';
import './Open.css';

const Open = () => {
  return (
    <div className="live-score-card">
      <div className="d-flex container">
        {/* Team Inning 1 */}
        <div className="team-inning">
          <div className="team-img pdl-0">
            <img
              onerror="this.src='../../../../assets/img/Team_Flags.png'"
              fetchpriority="high"
              alt="team important image"
              width="100px"
              height="100px"
              src="https://cricketvectors.akamaized.net/Teams/O.png?impolicy=default_web"
            />
          </div>
          <div className="team-content">
            <div className="team-name team-1">
              IND
              <span className="inning-f"> </span>
            </div>
            <div className="team-score">
              <div className="runs f-runs">
                <span>135-1</span>
                <span>30.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Result */}
        <div className="team-result">
          <div className="result-box" >
            <span className="font3">Stumps</span>
          </div>
        </div>

        {/* Team Inning 2 */}
        <div className="team-inning second-inning">
          <div className="team-content second-team">
            <div className="team-name team-2 text-right">
              {/* Add content for team 2 as needed */}
              <div>
                <div className="team-run-rate">
                  <span className="title">CRR : </span>
                  <span className="data">4.50</span>
                </div>
                <div className="final-result m-none">IND trail by 83 runs</div>
                <div className="final-result blinking2 m-none"> </div>
              </div>
            </div>
          </div>
          <div className="final-result des-none">IND trail by 83 runs</div>
          <div className="final-result blinking2 des-none"> </div>
        </div>
      </div>
    </div>
  );
};

export default Open;
