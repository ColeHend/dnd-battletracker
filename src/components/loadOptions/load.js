import React from "react";
import Collapsible from "react-collapsible";
import { AppContext } from "../../App";
function LoadOptions(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = React.useContext(AppContext);
  let [localListName, setLocalListName] = React.useState("");
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
  let loadLocalStore = () => {
    let loadedList = localStorage.getItem(localListName);
    if (loadedList !== null && appInfo !== undefined) {
      let parsedList = JSON.parse(loadedList);
      setAppInfo({
        initList: [...appInfo.initList, ...parsedList.initList].sort(
          goodInitSort
        ),
      });
    } else if (loadedList !== null && props.info !== undefined) {
      let parsedList = JSON.parse(loadedList);
      props.setInfo({
        initList: [...props.info.initList, ...parsedList.initList].sort(
          goodInitSort
        ),
      });
      console.log("loaded second try!", props.info, parsedList);
    } else {
      console.log("didn't work at all!", props, appInfo);
    }
  };
  return (
    <div id="loadOptions">
      <Collapsible
        trigger={<CollapTitle isOpen={false} title={"Local Storage"} />}
        triggerWhenOpen={<CollapTitle isOpen={true} title={"Local Storage"} />}
      >
        <div id="localLoad">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter encounter name..."
            value={localListName}
            onChange={(valu) => setLocalListName(valu.target.value)}
          />
          <button onClick={loadLocalStore}>Load to Initiative list</button>
        </div>
      </Collapsible>
    </div>
  );
}
function CollapTitle(props) {
  const { title, isOpen } = props;
  return (
    <div>
      <span>{title}</span>
      {isOpen ? (
        <span style={{ marginLeft: "25px" }} className="collapseArrow">
          {"v"}
        </span>
      ) : (
        <span style={{ marginLeft: "25px" }} className="collapseArrow">
          {"<"}
        </span>
      )}
    </div>
  );
}
export default LoadOptions;
