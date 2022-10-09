import React from "react";
import ItemTracked from "../tracker/itemTracked/item";
//${init} ${info.name} ${info.stats.ac} ${info.stats.cr}
function ListItem(props) {
  let { init, info } = props;
  // console.log(info, "---------listItem props----- : ", props);
  let unNum = Math.random() * 1000 * (Math.random() * 1000) * init;
  return (
    <>
      <li key={`${unNum} ${init}`} value={init}>
        <ItemTracked info={info} />
      </li>
    </>
  );
}

export default ListItem;
