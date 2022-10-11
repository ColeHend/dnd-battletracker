import React from "react";
import ListItem from "./initListItem/listItem";
import { AppContext } from "../../../App";
import ListGroupItem from "./listGroupItem/listGroupItem";
import "./actualList.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SaveOptions from "../../saveOptions/save";
import LoadOptions from "../../loadOptions/load";
function ActualList() {
  const data = React.useContext(AppContext);
  // @ts-ignore
  const { appInfo, setAppInfo } = data;
  const MySwal = withReactContent(Swal);
  const onSaveClick = () => {
    MySwal.fire({
      title: <p>Save!</p>,
      html: <SaveOptions info={appInfo} />,
    });
  };
  const onLoadClick = () => {
    MySwal.fire({
      title: <p>Load!</p>,
      html: <LoadOptions setInfo={setAppInfo} info={appInfo} />,
    });
  };
  const realInitList = appInfo.initList.map((creature, index) => {
    console.log("actual list creature: ", creature);
    if (creature.length > 1) {
      console.log("group");
      return <ListGroupItem info={creature} index={index} />;
    } else if (creature !== undefined) {
      console.log("single");
      return (
        <ListItem init={creature.init} info={creature.info} index={index} />
      );
    } else {
      console.log("other");
      return "";
    }
  });
  return (
    <ol id="initList" className="initList">
      <p className="itemOne">
        <button onClick={onSaveClick} className="saveInitList">
          Save
        </button>
        <button onClick={onLoadClick} className="loadInitList">
          Load
        </button>
        <span className="initTitle" style={{ display: "inline" }}>
          Initiative Order
        </span>
      </p>
      {realInitList}
    </ol>
  );
}

export default ActualList;
