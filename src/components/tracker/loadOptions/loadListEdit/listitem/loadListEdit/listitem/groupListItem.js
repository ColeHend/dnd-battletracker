import React from "react";
import SingleListItem from "./singleListItem";
import Collapsible from "react-collapsible";
function GroupListItem(props) {
  let { index, appInfo, setAppInfo, mon: monArr } = props.stats;
  let monGroup = monArr.map((mon, i) => {
    return (
      <SingleListItem
        groupMon={true}
        stats={{ mon, index, i, appInfo, setAppInfo, initList: props.monList }}
      />
    );
  });
  return (
    <li>
      <Collapsible trigger={monArr[0].info.name + " Group"}>
        <ul style={{ listStyle: "none" }}>{monGroup}</ul>
      </Collapsible>
    </li>
  );
}

export default GroupListItem;
