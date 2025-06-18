import React, { useState } from "react";

function DragAndDrop() {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    const newItems = [...items];
    const draggedItem = newItems[draggingIndex];
    newItems.splice(draggingIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setItems(newItems);
    setDraggingIndex(null);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            marginBottom: "8px",
            backgroundColor: "#f0f0f0",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragAndDrop;
