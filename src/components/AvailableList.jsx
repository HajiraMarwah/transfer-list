import React from "react";

export default function AvailableList({ items, checkedItems, onCheck }) {
  return (
    <div>
      <h3>Available Items</h3>
      {items.length === 0 && <p>No items available</p>}
      {items.map((item) => (
        <div key={item}>
          <label>
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              onChange={() => onCheck(item)}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
