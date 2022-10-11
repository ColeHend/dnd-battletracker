import React, { useState, useContext } from "react";
import "./item.css";
import { AppContext } from "../../../../../App";
function ItemTracked(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = useContext(AppContext);
  let info = props.info.info || props.info;
  const [currHp, setCurrHp] = useState(info.stats.currHp);
  let [maxHp, setMaxHp] = useState(info.stats.maxHp);
  //---deletes item----------
  const removeItem = () => {
    let newList = [...appInfo.initList];
    if (props.twoIndex !== undefined) {
      newList[props.twoIndex[0]].splice(props.twoIndex[1], 1);
    } else {
      newList.splice(props.index, 1);
    }
    setAppInfo({ initList: [...newList] });
  };
  //------------------------
  return (
    <>
      <div>
        {props.index !== undefined ||
        (props.twoIndex !== undefined &&
          appInfo.initList[props.twoIndex[0]].length > 1) ? (
          <button
            style={{
              color: "#f00",
              background: "none",
              border: "none",
            }}
            onClick={removeItem}
          >
            X
          </button>
        ) : (
          ""
        )}
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
