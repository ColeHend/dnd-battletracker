import React, { useContext } from "react";
import { AppContext } from "../../App";
function AddBattle(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = useContext(AppContext);
  //   const { appInfo, setAppInfo } = data;
  let [initVal, setInitVal] = React.useState(0);
  let [amntVal, setAmntVal] = React.useState(0);
  let [nameVal, setNameValue] = React.useState("");
  let addInitMon = () => {
    console.log(initVal);
    console.log(nameVal);
    setAppInfo({
      initList: [
        ...appInfo.initList,
        {
          init: initVal,
          info: {
            name: nameVal,
            amount: amntVal,
            stats: { cr: 2 },
          },
        },
      ].sort((a, b) => b.init - a.init),
    });
    setInitVal(0);
    setNameValue("");
    setAmntVal(0);
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
        <label htmlFor="amnt">Amount: </label>
        <input
          type="number"
          name="amnt"
          id="amnt"
          value={amntVal}
          onChange={(valu) => setAmntVal(Number(valu.target.value))}
          style={{ width: 64 }}
        />
      </p>

      <button onClick={addInitMon} type="submit">
        Add!
      </button>
    </div>
  );
}

export default AddBattle;
