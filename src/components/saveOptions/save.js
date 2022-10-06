import React, { useContext } from "react";
import Collapsible from "react-collapsible";
import { AppContext } from "../../App";
function SaveOptions(props) {
  // @ts-ignore
  const { appInfo } = useContext(AppContext);
  let [localListName, setLocalListName] = React.useState("");
  const localSave = () => {
    if (appInfo) {
      localStorage.setItem(localListName, JSON.stringify(appInfo));
    } else {
      console.log(localListName, JSON.stringify(props.info));
      localStorage.setItem(localListName, JSON.stringify(props.info));
    }
  };
  return (
    <div id="SaveOptions">
      <Collapsible
        trigger={<CollapTitle isOpen={false} title={"Local Storage"} />}
        triggerWhenOpen={<CollapTitle isOpen={true} title={"Local Storage"} />}
      >
        <div id="localStore">
          <input
            type="text"
            name="listName"
            id="listName"
            className="listName"
            placeholder="Enter encounter name..."
            value={localListName}
            onChange={(name) => setLocalListName(name.target.value)}
          />
          <button onClick={localSave}>Save!</button>
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
export default SaveOptions;
