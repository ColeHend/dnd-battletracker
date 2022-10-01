import React from "react";
import ListItem from "../initListItem/listItem";
import { AppContext } from "../../App";
function ActualList() {
  const data = React.useContext(AppContext);
  // @ts-ignore
  const { appInfo } = data;
  console.log(JSON.stringify(appInfo));
  const realInitList = appInfo.initList.map((creature) => (
    <ListItem init={creature.init} info={creature.info} />
  ));
  return (
    <ol id="initList" className="initList">
      <p className="itemOne">Initiative Order</p>
      {realInitList}
    </ol>
  );
}

export default ActualList;
