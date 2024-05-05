import { useState } from "react";
import { FaSquareCaretDown, FaSquareCaretLeft } from "react-icons/fa6";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, id) => {
    const isExpanded = id === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaSquareCaretDown /> : <FaSquareCaretLeft />}
      </span>
    );

    const handleLabelClick = (idx) => {
      if (isExpanded) {
        setExpandedIndex(-1);
      } else {
        setExpandedIndex(idx);
      }
    };

    return (
      <div key={item.id}>
        <div
          className="flex p-3 justify-between bg-gray-100 border-b items-center cursor-pointer"
          onClick={() => handleLabelClick(id)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
