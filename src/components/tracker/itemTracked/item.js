import React from "react";

function ItemTracked(props) {
  let { info } = props;
  return (
    <>
      <div>
        {info.amount > 1 ? `${info.amount} of` : ""} {info.name}
      </div>
    </>
  );
}

export default ItemTracked;
