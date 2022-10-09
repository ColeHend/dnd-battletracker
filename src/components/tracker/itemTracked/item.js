import React, { useState } from "react";
import "./item.css";
// import { AppContext } from "../../../App";
function ItemTracked(props) {
  console.log("trackedProps: ", props);
  let info = props.info.info || props.info;
  // const { appInfo, setAppInfo } = useContext(AppContext);
  console.log("item.js", info);
  const [currHp, setCurrHp] = useState(info.stats.currHp);
  let [maxHp, setMaxHp] = useState(info.stats.maxHp);
  return (
    <>
      <div>
        {info.name}
        <div className="hpDiv">
          HP:
          <input
            type="number"
            name="currHp"
            id="currHp"
            value={currHp}
            onChange={(newVal) => setCurrHp(Number(newVal.target.value))}
          />{" "}
          /{" "}
          <input
            type="text"
            name="maxHP"
            id="maxHP"
            value={maxHp}
            onChange={(valus) => setMaxHp(Number(valus.target.value))}
          />
          {` AC: ${info.stats.ac}`}
        </div>
      </div>
    </>
  );
}

export default ItemTracked;
