import React, { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
