import React, { useState, useContext } from "react";
import "./item.css";
import { AppContext } from "../../../../../App";
function ItemTracked(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = useContext(AppContext);
  console.log("trackedProps: ", props, appInfo, setAppInfo);
  let info = props.info.info || props.info || appInfo.initList[0];
  console.log("item.js", info);
  const [currHp, setCurrHp] = useState(info.stats.currHp);
  let [maxHp, setMaxHp] = useState(info.stats.maxHp);
  return (
    <>
      <div>
        <button
          style={{
            color: "#f00",
            background: "none",
            border: "none",
          }}
        >
          X
        </button>
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
