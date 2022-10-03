import React, { useContext } from "react";
import { AppContext } from "../../App";
function AddBattle(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = useContext(AppContext);
  //   const { appInfo, setAppInfo } = data;
  let [initVal, setInitVal] = React.useState(0);
  let [amntVal, setAmntVal] = React.useState(1);
  let [maxHpVal, setMaxHpVal] = React.useState(0);
  let [acVal, setAcVal] = React.useState(0);
  let [nameVal, setNameValue] = React.useState("");
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
  let addInitMon = () => {
    if (amntVal > 1) {
      let allMons = [];
      for (let i = 0; i <= amntVal; i++) {
        const element = {
          init: initVal,
          info: {
            name: nameVal,
            amount: amntVal,
            stats: { maxHp: maxHpVal, currHp: maxHpVal, ac: acVal },
          },
        };
        allMons.push(element);
      }
      setAppInfo({
        initList: [...appInfo.initList, allMons].sort(goodInitSort),
      });
    } else {
      setAppInfo({
        initList: [
          ...appInfo.initList,
          {
            init: initVal,
            info: {
              name: nameVal,
              amount: amntVal,
              stats: { maxHp: maxHpVal, currHp: maxHpVal, ac: acVal },
            },
          },
        ].sort(goodInitSort),
      });
    }
    setInitVal(0);
    setNameValue("");
    setAmntVal(0);
    setAcVal(0);
  };
  return (
    <div>
      <p>
        <label htmlFor="init">Initiative: </label>
        <input
          type="number"
          name="init"
          id="init"
          value={initVal}
          onChange={(valu) => setInitVal(Number(valu.target.value))}
          style={{ width: 64 }}
        />
      </p>
      <p>
        <label htmlFor="monName">Name: </label>
        <input
          type="text"
          name="monName"
          id="name"
          placeholder="Enter Name.."
          value={nameVal}
          onChange={(valu) => setNameValue(valu.target.value)}
        />
      </p>
      <p>
        <label htmlFor="amnt">AC: </label>
        <input
          type="number"
          name="ac"
          id="ac"
          value={acVal}
          onChange={(valu) => setAcVal(Number(valu.target.value))}
          style={{ width: 64 }}
        />
      </p>
      <p>
        <label htmlFor="hp">MaxHp: </label>
        <input
          type="number"
          name="hp"
          id="hp"
          value={maxHpVal}
          onChange={(valu) => setMaxHpVal(Number(valu.target.value))}
          style={{ width: 64 }}
        />
      </p>
      <div>
        <label htmlFor="amnt">Amount to Add:</label>
        <input
          type="number"
          name="amnt"
          id="amnt"
          value={amntVal}
          onChange={(val) => setAmntVal(Number(val.target.value))}
          style={{ width: "64px" }}
        />
      </div>
      <button onClick={addInitMon} type="submit">
        Add!
      </button>
    </div>
  );
}

export default AddBattle;
