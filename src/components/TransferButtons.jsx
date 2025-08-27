import React from "react";

export default function TransferButtons({ moveToSelected, moveToAvailable, disableToSelected, disableToAvailable }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center" }}>
      <button onClick={moveToSelected} disabled={disableToSelected}>
        &gt;&gt;
      </button>
      <button onClick={moveToAvailable} disabled={disableToAvailable}>
        &lt;&lt;
      </button>
    </div>
  );
}
