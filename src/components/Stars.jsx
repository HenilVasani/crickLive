import React from 'react';
import './Stars.css';

const PlayerProfileImg = ({ logo, jersey }) => (
  <div className="playerProfileDefault">
    <div>
      <img
        onError={(e) => (e.target.src = '../../../../../assets/img/playerPlaceholder.svg')}
        src={logo}
        alt="Player Logo"
        title="Player"
        className="lazyload"
        style={{ width: '150px', alignSelf: 'flex-start' }}
      />
    </div>
    <div>
      <img
        onError={(e) => (e.target.src = 'https://cricketvectors.akamaized.net/jersey/limited/org/AD.png?impolicy=default_web')}
        className="lazyload mr-top"
        src={jersey}
        alt="Player Jersey"
        style={{ marginTop: '-2.75em', width: '150px' }}
      />
    </div>
  </div>
);

const Stars = () => {
  const players = [
    { name: 'Rohit Sharma', score: 597, logo: 'https://cricketvectors.akamaized.net/players/org/2X.png?impolicy=default_web', jersey: 'https://cricketvectors.akamaized.net/jersey/limited/org/O.png?impolicy=default_web' },
    { name: 'Virat Kohli', score: 765, logo: 'https://cricketvectors.akamaized.net/players/org/4I.png?impolicy=default_web', jersey: 'https://cricketvectors.akamaized.net/jersey/limited/org/O.png?impolicy=default_web' },
    { name: 'Quinton de Kock', score: 594, logo: 'https://cricketvectors.akamaized.net/players/org/92.png?impolicy=default_web', jersey: 'https://cricketvectors.akamaized.net/jersey/limited/org/P.png?impolicy=default_web' },
  ];

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', padding: '20px' }}>
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
              <h1 style={{ fontSize: '24px', marginBottom: '0' }}>
                Most Runs in World Cup 2023
                <br />
              </h1>
              <button style={{ /* Add styles for the button if needed */ }}>Apply Filters</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right', width: '100%', margin: '-5px' }}>
            {players.map((player, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', color: 'white' }}>
                <PlayerProfileImg logo={player.logo} jersey={player.jersey} />
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{player.score}</p>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{player.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop: '20px',marginLeft:'195px',fontSize:'25px',fontWeight:'bold'}}>
        STARS TABLE
      </div>
  <div className="table-wrapper">
  {/* <section className="container"> */}
    <div className="stats-table-wrapper"  style={{ margin: 'auto', width: '80%', marginTop: '0px',marginBottom: '50px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#333', color: 'white' }}>
            <th>No.</th>
            <th>Player</th>
            <th>Team</th>
            <th className="active">Runs</th>
            <th>Mat</th>
            <th>Inns</th>
            <th>HS</th>
            <th>Avg</th>
            <th>SR</th>
            <th>100</th>
            <th>50</th>
            <th>4s</th>
            <th>6s</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
          <tr>
            <td>1</td>
            <td class="player-wrapper">
              <a class="player-card" href="/player-profile/4I/virat-kohli">
                <div class="p-name">Virat Kohli</div>
              </a>
            </td>
            <td>
              <div class="team-flag">
                {/* Add team flag image here */}
                <div>
                  <span class="team">IND</span>
                </div>
              </div>
            </td>
            <td class="active">765</td>
            <td>11</td>
            <td>11</td>
            <td>117</td>
            <td>95.63</td>
            <td>90.32</td>
            <td>3</td>
            <td>6</td>
            <td>68</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </div>
  {/* </section> */}
</div>

    </>
  );
};

export default Stars;
