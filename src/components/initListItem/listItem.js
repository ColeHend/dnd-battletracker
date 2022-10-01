import React from "react";
import ItemTracked from "../tracker/itemTracked/item";
function ListItem(props) {
  let { init, info } = props;
  return (
    <>
      <li
        key={`${init} ${info.name} ${info.amount} ${info.stats.cr}`}
        value={init}
      >
        <ItemTracked info={info} />
      </li>
    </>
  );
}

export default ListItem;
