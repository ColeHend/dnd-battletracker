import React from "react";
import AddBattle from "../addBattle/addBattle";
import ActualList from "../actualList/actualList";
import "./tracker.css";

function Tracker() {
  // @ts-ignore

  return (
    <div className="CombatControl">
      <div className="initTrack">
        <ActualList />
      </div>
      <div className="addBattler">
        <AddBattle />
      </div>
    </div>
  );
}

export default Tracker;
