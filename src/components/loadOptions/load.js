import React from "react";
import Collapsible from "react-collapsible";
import LoadListEdit from "../loadListEdit/loadListEdit";
import { AppContext } from "../../App";
function LoadOptions(props) {
  // @ts-ignore
  const { appInfo, setAppInfo } = React.useContext(AppContext);
  let [localListName, setLocalListName] = React.useState("");
  let [showEdit, setShowEdit] = React.useState(false);
  let [parsedList, setParsedList] = React.useState({ initList: [] });
  let totalInitList = props.info.initList || appInfo.initList;
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
  let daList = { set: false };
  let loadLocalStore = () => {
    console.log("starting loading...");
    let loadedList = localStorage.getItem(localListName);
    console.log(`Loaded List: ${loadedList}`);
    if (loadedList !== null && appInfo !== undefined) {
      //-----------appInfo-------------------------
      console.log(`daList.set = ${daList.set};`);
      daList = { appInfo, setAppInfo, set: true };
      setShowEdit(true);
      //   parsedList = JSON.parse(loadedList);
      setParsedList(JSON.parse(loadedList));
      //-------------Logs-----------------
      console.log(`daList.set = ${showEdit};`);
      console.log(`Parsed List:`, parsedList);
      console.log(`appInfo InitList: `, appInfo.initList);
      //--- Loads into actual list ------
      setAppInfo({
        initList: [...appInfo.initList, ...parsedList.initList].sort(
          goodInitSort
        ),
      });
      console.log("Done loading!1");
      //---------------------------------------------
    } else if (loadedList !== null && props.info !== undefined) {
      //------------------props.info-----------------
      daList = { appInfo: props.info, setAppInfo: props.setInfo, set: true };
      setShowEdit(true);
      //   parsedList = JSON.parse(loadedList);
      setParsedList(JSON.parse(loadedList));
      //-------------logs-----------
      console.log("loaded second try!");
      console.log(`daList: `, daList);
      console.log(`daList.set = ${showEdit};`);
      console.log(`Parsed List:`, parsedList);
      console.log(`Props InitList: `, props.info.initList);
      //---- loads into actual list----
      props.setInfo({
        initList: [...props.info.initList, ...parsedList.initList].sort(
          goodInitSort
        ),
      });
      console.log("Done loading!2");
      //---------------------------------------------
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
          <div>
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
          <div>
            {showEdit ? (
              <div>
                {/* {JSON.stringify(parsedList)} */}
                <LoadListEdit
                  info={{ appInfo: props.info, setAppInfo: props.setInfo }}
                  monList={[...parsedList.initList]}
                />
              </div>
            ) : (
              `Load something to the list!`
            )}
          </div>
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
