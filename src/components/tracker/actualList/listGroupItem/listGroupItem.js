import React, { useContext } from "react";
import Collapsible from "react-collapsible";
import { AppContext } from "../../../../App";
import ListItem from "../initListItem/listItem";
function ListGroupItem(props) {
  let { info } = props;
  // @ts-ignore
  const { appInfo, setAppInfo } = useContext(AppContext);
  let groupList = info.map((creatur, index) => (
    <ListItem
      init={creatur.init}
      info={creatur.info}
      twoIndex={[props.index, index]}
    />
  ));
  let unNum =
    Math.random() *
    1000 *
    (Math.random() * 1000) *
    (Math.random() + info[0].init);
  const removeItem = () => {
    let newList = [...appInfo.initList];
    newList.splice(props.index, 1);
    setAppInfo({ initList: [...newList] });
  };
  return (
    <>
      <li key={`${unNum} ${info[0].init}`} value={info[0].init}>
        <Collapsible
          trigger={
            <span>
              {props.index !== undefined ? (
                <button
                  style={{
                    border: "none",
                    background: "none",
                    color: "red",
                  }}
                  onClick={removeItem}
                >
                  X
                </button>
              ) : (
                ""
              )}
              {info[0].info.name + " Group"}
            </span>
          }
        >
          <ol style={{ listStyle: "none" }}>{groupList}</ol>
        </Collapsible>
      </li>
    </>
  );
}

export default ListGroupItem;
