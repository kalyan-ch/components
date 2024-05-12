import { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortCol, setSortCol] = useState(null);

  const setSortColAndLabel = (label) => {

    if(sortCol && label !== sortCol) {
      setSortOrder("asc");
      setSortCol(label);
      return;
    }

    if (!sortOrder) {
      setSortOrder("asc");
      setSortCol(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortCol(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortCol(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortCol) {
    const { sortValue } = config.find((col) => col.label === sortCol);
    sortedData = [...data];
    sortedData.sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);

      const order = sortOrder === "asc" ? 1 : -1;
      if (typeof valA === "string") {
        return valA.localeCompare(valB) * order;
      } else {
        return (valA - valB) * order;
      }
    });
  }

  return {
    sortOrder,
    sortCol,
    setSortColAndLabel,
    sortedData
  }


};

export default useSort;
