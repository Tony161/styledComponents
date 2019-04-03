import React from 'react';
import './App.css';

const Statistics = () => {
  return (
    <div className="Statistics">
      <div>
        <form method="GET" action="https://wfts.su/profile/Тони161">
          <input type="submit" value="Profile" />
        </form>
      </div>
      <div>
        <form method="GET" action="https://wfts.su/pvp/Тони161">
          <input type="submit" value="PVP" />
        </form>
      </div>
      <div>
        <form method="GET" action="https://wfts.su/pve/Тони161">
          <input type="submit" value="PVE" />
        </form>
      </div>
      <div>
        <form method="GET" action="https://wfts.su/weapons/Тони161">
          <input type="submit" value="GunS" />
        </form>
      </div>
    </div>
  );
}
export default Statistics;
