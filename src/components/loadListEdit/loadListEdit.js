import React from "react";
import GroupListItem from "./listitem/groupListItem";
import SingleListItem from "./listitem/singleListItem";
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
    <ol id="initList" className="initList">
      <p className="itemOne">
        <p className="initTitle" style={{ display: "inline" }}>
          Initiative Order
        </p>
      </p>
      {loadedMonList}
    </ol>
  );
}

export default LoadListEdit;
