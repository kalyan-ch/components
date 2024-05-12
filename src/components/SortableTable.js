import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import useSort from "../hooks/use-sort";
import Table from "./Table";

const SortableTable = (props) => {
  const { data, config } = props;

  const { sortOrder, sortCol, setSortColAndLabel, sortedData } = useSort(
    data,
    config
  );

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

  const newConfig = config.map((conf) => {
    if (conf.sortValue) {
      return {
        ...conf,
        header: () => (
          <th
            className="cursor-pointer hover:text-blue-400"
            onClick={(e) => setSortColAndLabel(conf.label)}
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

  return (
    <div>
      <Table {...props} config={newConfig} data={sortedData} />
    </div>
  );
};

export default SortableTable;
