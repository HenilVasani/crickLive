import React, { useState } from 'react';
import './Rank.css';

const Navbar = ({ handleCategoryChange, handleTableChange, activeCategory, activeTable }) => {
  return (
    <div className="ranking_nav">
      <ul className="ranking_nav_list">
        <li className="category">Category</li>
        <li className={activeCategory === 'men' ? 'active' : ''} onClick={() => handleCategoryChange('men')}>
          <a href="#">Men</a>
        </li>
        <li className={activeCategory === 'women' ? 'active' : ''} onClick={() => handleCategoryChange('women')}>
          <a href="#">Women</a>
        </li>
      </ul>

      <div className="row mt-4">
  <div className="ranking_subnav_list"></div>
  <ul className="ranking_nav_list">
    <li className="category">Tables</li>
    <li className={activeTable === 'teams' ? 'active' : ''} onClick={() => handleTableChange('teams')}>
      <a href="#">Team</a>
    </li>
    <li className={activeTable === 'batter' ? 'active' : ''} onClick={() => handleTableChange('batter')}>
      <a href="#">Batter</a>
    </li>
    <li className={activeTable === 'bowler' ? 'active' : ''} onClick={() => handleTableChange('bowler')}>
      <a href="#">Bowler</a>
    </li>
    <li className={activeTable === 'allrounder' ? 'active' : ''} onClick={() => handleTableChange('allrounder')}>
      <a href="#">All Rounder</a>
    </li>
  </ul>
</div>
    </div>
  );
};




const Rank = () => {
  const [activeCategory, setActiveCategory] = useState('men');
  const [activeTable, setActiveTable] = useState('teams');

  const handleCategoryChange = (selectedCategory) => {
    setActiveCategory(selectedCategory);
    setActiveTable('teams'); // Reset activeTable when category changes
  };

  const handleTableChange = (selectedTable) => {
    setActiveTable(selectedTable);
  };

  const getTableContent = () => {
    if (activeCategory === 'men') {
      // Render Men's tables
      if (activeTable === 'teams') {
        return (
        
          
          <div className="stylish-flex-container ">
            <div>
            <a >Team Ranking</a>
            </div>
          <div className="stylish-table-box">
          {/* <div style={{width:"300px"}}> */}
            <h2>ODI Ranking</h2>
            
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>England</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Aus</td>
                  <td>95</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr> 
              </tbody>
            </table>
            {/* </div> */}
          </div>
          

          <div className="stylish-table-box">
            <h2>Test Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="stylish-table-box"> 
            <h2>T20 Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>  
        );
      } else if (activeTable === 'batter') {
        return (
        
          
          <div className="stylish-flex-container ">
            <div>
            <a >Batter Ranking</a>
            </div>
          <div className="stylish-table-box">
          {/* <div style={{width:"300px"}}> */}
            <h2>ODI Ranking</h2>
            
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr> 
              </tbody>
            </table>
            {/* </div> */}
          </div>
          

          <div className="stylish-table-box">
            <h2>Test Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="stylish-table-box"> 
            <h2>T20 Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>  
        );
      } else if (activeTable === 'bowler') {
        return (
        
          
          <div className="stylish-flex-container ">
            <div>
            <a >Bowler Ranking</a>
            </div>
          <div className="stylish-table-box">
          {/* <div style={{width:"300px"}}> */}
            <h2>ODI Ranking</h2>
            
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr> 
              </tbody>
            </table>
            {/* </div> */}
          </div>
          

          <div className="stylish-table-box">
            <h2>Test Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="stylish-table-box"> 
            <h2>T20 Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>  
        );
      } else if (activeTable === 'allrounder') {
        return (
        
          
          <div className="stylish-flex-container ">
            <div>
            <a >AllRounder Ranking</a>
            </div>
          <div className="stylish-table-box">
          {/* <div style={{width:"300px"}}> */}
            <h2>ODI Ranking</h2>
            
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr> 
              </tbody>
            </table>
            {/* </div> */}
          </div>
          

          <div className="stylish-table-box">
            <h2>Test Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                
              </tbody>
            </table>
          </div>

          <div className="stylish-table-box"> 
            <h2>T20 Ranking</h2>
            <table className="stylish-table">
            <thead>
                <tr>
                  <th>Rank</th>
                  <th>Team</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your ODI ranking data here */}
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>India</td>
                  <td>100</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>  
        );
      }
    } else if (activeCategory === 'women') {
      // Render Women's tables
      if (activeTable === 'teams') {
        return <div>Table content for Women's Teams</div>;
      } else if (activeTable === 'batter') {
        return <div>Table content for Women's Batter</div>;
      } else if (activeTable === 'bowler') {
        return <div>Table content for Women's Bowler</div>;
      } else if (activeTable === 'allrounder') {
        return <div>Table content for Women's All Rounder</div>;
      }
    }
  };

  return (
    <div>
      <Navbar
        handleCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
        handleTableChange={handleTableChange}
        activeTable={activeTable}
      />
      <div className="stylish-container" style={{ paddingBottom: '70px', minHeight: '90vh' }}>
        <div className="row mt-4">
          <div className="ranking_subnav_list">
            {getTableContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rank;
