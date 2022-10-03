import React from "react";
import Collapsible from "react-collapsible";
import ListItem from "../initListItem/listItem";
function ListGroupItem(props) {
  let { info } = props;
  console.log(props);
  let groupList = info.map((creatur) => (
    <ListItem init={creatur.init} info={creatur.info} />
  ));
  console.log("GroupItemInfo: ", info);
  return (
    <>
      <li value={info[0].init}>
        <Collapsible trigger={info[0].info.name + " Group"}>
          <ol style={{ listStyle: "none" }}>{groupList}</ol>
        </Collapsible>
      </li>
    </>
  );
}

export default ListGroupItem;
