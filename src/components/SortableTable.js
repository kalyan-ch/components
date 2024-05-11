import { useState } from "react";
import Table from "./Table";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const SortableTable = (props) => {
  const { data, config } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortCol, setSortCol] = useState(null);

  const getIcons = (label) => {
    const both = (
      <div className="text-xl">
        <MdOutlineArrowDropUp />
        <MdOutlineArrowDropDown />
      </div>
    );

    if (label !== sortCol) {
      return both;
    }

    if (sortOrder === null) {
      return both;
    } else if (sortOrder === "asc") {
      return (
        <div className="text-xl">
          <MdOutlineArrowDropUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div className="text-xl">
          <MdOutlineArrowDropDown />
        </div>
      );
    }
  };

  const handleHeaderClick = (label) => {

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

  const newConfig = config.map((conf) => {
    if (conf.sortValue) {
      return {
        ...conf,
        header: () => (
          <th
            className="cursor-pointer hover:text-blue-400"
            onClick={(e) => handleHeaderClick(conf.label)}
          >
            <div className="flex items-center">
              {conf.label}
              {getIcons(conf.label)}
            </div>
          </th>
        ),
      };
    } else {
      return conf;
    }
  });

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

  return (
    <div>
      <Table {...props} config={newConfig} data={sortedData} />
    </div>
  );
};

export default SortableTable;
