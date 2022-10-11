import React from "react";
import Collapsible from "react-collapsible";
import { AppContext } from "../../../../../App";
function SingleListItem(props) {
  // @ts-ignore
  let { appInfo: appInfoTwo } = React.useContext(AppContext);
  let { appInfo, index, mon, i } = props.stats;
  let [initVal, setInitVal] = React.useState(mon.init);
  let [currHpVal, setCurrHpVal] = React.useState(mon.info.stats.currHp);
  let [maxHpVal, setMaxHpVal] = React.useState(mon.info.stats.maxHp);
  let [acVal, setAcVal] = React.useState(mon.info.stats.ac);
  let [nameVal, setNameValue] = React.useState(mon.info.name);
  let monArray = [...appInfo.initList];
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
        if (monArray[0].length > 1) {
          amntIs = monArray[0][0].info.amount;
        } else {
          amntIs = monArray[0].info.amount;
        }
      } else {
        amntIs = props.stats.mon.info.amount;
      }
      //--------logs-----------
      console.log("--------------group!----------------");
      console.log("amntIs: ", amntIs);
      console.log("arrParam: ", arr);
      console.log("monArray: ", monArray);
      console.log("real Indexs: ", i, index);
      console.log("propInit: ", props.stats.initList);
      console.log("--------------splicing----------");
      console.log("arr[index]", arr);
      let toAddArr = [arr, props.stats.initList, monArray];
      let mayAddArr = [props.stats.initList[index], ...arr];
      console.log("toAddArr B: ", toAddArr);
      console.log("mayAddArr B: ", mayAddArr);
      console.log("---------------------------------");
      mayAddArr[index].splice(i, 1, {
        init: initVal,
        info: {
          name: nameVal,
          amount: amntIs,
          stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
        },
      });
      console.log("mayAddArr A: ", mayAddArr);
      console.log("------------------------------------");
      //---------
      props.stats.setAppInfo({
        initList: [...mayAddArr].sort(goodInitSort),
      });
      //-------------
    } else {
      //--------------------------------------
      let singleAddArr = [
        ...arr,
        {
          init: initVal,
          info: {
            name: nameVal,
            amount: 1,
            stats: { maxHp: maxHpVal, currHp: currHpVal, ac: acVal },
          },
        },
      ];
      console.log("-----Single---------");
      console.log("amntIs: ", amntIs);
      console.log("monArray: ", monArray);
      console.log("real Indexs: ", i, index);
      console.log("arrParam: ", arr);
      console.log("propInit: ", props.stats.initList);
      console.log("singleAddArr: ", singleAddArr);
      console.log("appInfo: ", appInfo, appInfoTwo);
      props.stats.setAppInfo({
        initList: singleAddArr.sort(goodInitSort),
      });
      console.log("---------------------");
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
