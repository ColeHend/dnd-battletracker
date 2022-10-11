import React from "react";
import ItemTracked from "./itemTracked/item";
//${init} ${info.name} ${info.stats.ac} ${info.stats.cr}
function ListItem(props) {
  let { init, info } = props;
  let unNum = Math.random() * 1000 * (Math.random() * 1000) * init;
  return (
    <>
      <li key={`${unNum} ${init}`} value={init}>
        <ItemTracked
          info={info}
          index={props.index}
          twoIndex={props.twoIndex}
        />
      </li>
    </>
  );
}

export default ListItem;
