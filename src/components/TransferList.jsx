import React, { useState } from "react";
import AvailableList from "./AvailableList";
import SelectedList from "./SelectedList";
import TransferButtons from "./TransferButtons";

export default function TransferList() {
  const [available, setAvailable] = useState(["Item A", "Item B", "Item C"]);
  const [selected, setSelected] = useState([]);
  const [checkedAvailable, setCheckedAvailable] = useState([]);
  const [checkedSelected, setCheckedSelected] = useState([]);

  const handleAvailableCheck = (item) => {
    setCheckedAvailable((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSelectedCheck = (item) => {
    setCheckedSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const moveToSelected = () => {
    if (checkedAvailable.length === 0) return;
    setSelected((prev) => [...prev, ...checkedAvailable]);
    setAvailable((prev) => prev.filter((item) => !checkedAvailable.includes(item)));
    setCheckedAvailable([]);
  };

  const moveToAvailable = () => {
    if (checkedSelected.length === 0) return;
    setAvailable((prev) => [...prev, ...checkedSelected]);
    setSelected((prev) => prev.filter((item) => !checkedSelected.includes(item)));
    setCheckedSelected([]);
  };

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center",height: "100vh",  paddingLeft: "400px" }}>
      <AvailableList items={available} checkedItems={checkedAvailable} onCheck={handleAvailableCheck} />
      <TransferButtons
        moveToSelected={moveToSelected}
        moveToAvailable={moveToAvailable}
        disableToSelected={checkedAvailable.length === 0}
        disableToAvailable={checkedSelected.length === 0}
      />
      <SelectedList items={selected} checkedItems={checkedSelected} onCheck={handleSelectedCheck} />
    </div>
  );
}
