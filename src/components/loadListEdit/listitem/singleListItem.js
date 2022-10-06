import React from "react";
import Collapsible from "react-collapsible";
// initVal,
// setInitVal,
// nameVal,
// setNameValue,
// maxHpVal,
// setMaxHpVal,
// acVal,
// setAcVal,
function SingleListItem(props) {
  let { index, appInfo, setAppInfo, mon, i } = props.stats;
  let [initVal, setInitVal] = React.useState(mon.init);
  let [currHpVal, setCurrHpVal] = React.useState(mon.info.stats.currHp);
  let [maxHpVal, setMaxHpVal] = React.useState(mon.info.stats.maxHp);
  let [acVal, setAcVal] = React.useState(mon.info.stats.ac);
  let [nameVal, setNameValue] = React.useState(mon.info.name);
  let changeMon = (e, arr) => {
    let newArr = [...appInfo.initList[index]].slice(i, i);
    if (props.groupMon) {
      setAppInfo({
        initList: [
          ...arr,
          [
            ...newArr,
            {
              init: initVal,
              info: {
                name: nameVal,
                amount: appInfo.initList[index].info.amount,
                stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
              },
            },
          ].slice(
            appInfo.initList[index].info.amount,
            appInfo.initList[index].info.amount
          ),
        ],
      });
    } else {
      setAppInfo({
        initList: [
          ...arr,
          {
            init: initVal,
            info: {
              name: nameVal,
              amount: 1,
              stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
            },
          },
        ],
      });
    }
  };
  let monArray = [...appInfo.monList].slice(index, index);
  return (
    <li>
      <Collapsible trigger={mon.info.name}>
        <div className="initLoad">
          <label htmlFor="init">Init:</label>
          <input
            type="number"
            name="init"
            id=""
            value={initVal}
            onChange={(initNum) => setInitVal(Number(initNum.target.value))}
          />
        </div>
        <div className="nameLoad">
          <label htmlFor="nameL">Name:</label>
          <input
            type="text"
            name="nameL"
            id=""
            value={nameVal}
            onChange={(name) => setNameValue(name.target.value)}
          />
        </div>
        <div className="acLoad">
          <label htmlFor="ac">AC:</label>
          <input
            type="number"
            name="ac"
            id=""
            value={acVal}
            onChange={(acNum) => setAcVal(Number(acNum.target.value))}
          />
        </div>
        <div className="HpLoad">
          <label htmlFor="currHp">HP:</label>
          <input
            type="number"
            name="currHp"
            id=""
            value={""}
            onChange={(currHpNum) =>
              setCurrHpVal(Number(currHpNum.target.value))
            }
          />
          /
          <input
            type="number"
            name="maxHp"
            id=""
            value={maxHpVal}
            onChange={(maxHpNum) => setMaxHpVal(Number(maxHpNum.target.value))}
          />
        </div>
        <button onClick={(e) => changeMon(e, monArray)}>Save Change!</button>
      </Collapsible>
    </li>
  );
}

export default SingleListItem;
