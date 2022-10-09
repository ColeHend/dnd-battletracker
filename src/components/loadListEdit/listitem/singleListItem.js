import React from "react";
import Collapsible from "react-collapsible";
import { AppContext } from "../../../App";
// initVal,
// setInitVal,
// nameVal,
// setNameValue,
// maxHpVal,
// setMaxHpVal,
// acVal,
// setAcVal,
function SingleListItem(props) {
  // @ts-ignore
  let { appInfo: appInfoTwo, setAppInfo } = React.useContext(AppContext);
  let { appInfo, index, mon, i } = props.stats;
  let [initVal, setInitVal] = React.useState(mon.init);
  let [currHpVal, setCurrHpVal] = React.useState(mon.info.stats.currHp);
  let [maxHpVal, setMaxHpVal] = React.useState(mon.info.stats.maxHp);
  let [acVal, setAcVal] = React.useState(mon.info.stats.ac);
  let [nameVal, setNameValue] = React.useState(mon.info.name);
  console.log("appInfo: ", appInfo, appInfoTwo);
  let monArray = [...appInfo.initList];
  console.log("monArray: ", monArray);
  //   monArray.splice(i, 1);
  let goodInitSort = (a, b) => {
    if (a.length > 1 && b.length > 1) {
      return b[0].init - a[0].init;
    } else if (a.length > 1 && b.length !== Number) {
      return b.init - a[0].init;
    } else if (b.length > 1 && a.length !== Number) {
      return b[0].init - a.init;
    } else {
      return b.init - a.init;
    }
  };
  var amntIs = 1;
  let changeMon = (e, arr) => {
    console.log("props: ", props.stats);
    // let newArr = [...props.stats.initList]

    if (props.groupMon) {
      if (monArray[0] !== undefined) {
        amntIs = monArray[0].info.amount;
      } else {
        amntIs = props.stats.mon.info.amount;
      }
      //--------logs-----------
      console.log("------group!------");
      console.log("amntIs: ", amntIs);
      console.log("arrParam: ", arr);
      console.log("monArray: ", monArray);
      console.log("realIndex: ", i);
      console.log("propInit: ", props.stats.initList);
      //----------------------------------------
      props.stats.setAppInfo({
        initList: [
          ...monArray,
          [
            {
              init: initVal,
              info: {
                name: nameVal,
                amount: amntIs,
                stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
              },
            },
            ...props.stats.initList, //.splice(i, 1),
          ],
        ].sort(goodInitSort),
      });
    } else {
      props.stats.setAppInfo({
        initList: [
          ...monArray,
          {
            init: initVal,
            info: {
              name: nameVal,
              amount: 1,
              stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
            },
          },
        ].sort(goodInitSort),
      });
    }
  };

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
            value={currHpVal}
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
        <button onClick={(e) => changeMon(e, appInfo.initList)}>
          Save Change!
        </button>
      </Collapsible>
    </li>
  );
}

export default SingleListItem;
