import React, { useState } from "react";
import "./item.css";
// import { AppContext } from "../../../App";
function ItemTracked(props) {
  let { info } = props;
  // const { appInfo, setAppInfo } = useContext(AppContext);
  const [currHp, setCurrHp] = useState(info.stats.currHp);
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
          <input type="text" name="maxHP" id="maxHP" value={info.stats.maxHp} />
          {` AC: ${info.stats.ac}`}
        </div>
      </div>
    </>
  );
}

export default ItemTracked;
