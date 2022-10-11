import React from "react";
import GroupListItem from "./listitem/groupListItem";
import SingleListItem from "./listitem/singleListItem";
import "./loadListEdt.css";
function LoadListEdit(props) {
  let { appInfo, setAppInfo } = props.info;

  let loadedMonList = props.monList.map((mon, index) => {
    if (mon.length > 1) {
      return (
        <GroupListItem
          stats={{
            index,
            appInfo,
            setAppInfo,
            mon,
          }}
          monList={props.monList} //[index]
        />
      );
    } else {
      return (
        <SingleListItem
          stats={{
            index,
            appInfo,
            setAppInfo,
            mon,
            initList: props.monList,
          }}
        />
      );
    }
  });

  return (
    <ol id="initListEdit" className="initListEdit">
      <p className="itemOne">
        <span className="initTitle" style={{ display: "inline" }}>
          Loaded Initiative List
        </span>
      </p>
      {loadedMonList}
    </ol>
  );
}

export default LoadListEdit;
