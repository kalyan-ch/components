import { useEffect, useRef, useState } from "react";
import { FaSquareCaretDown, FaSquareCaretLeft } from "react-icons/fa6";
import Panel from "./Panel";

const DropDown = ({ options, value, onChange }) => {
  useEffect(() => {
    const handleDocClick = (e) => {
      if(!divEle.current) {
        return;
      }
      if(!divEle.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleDocClick, true);
    return () => {
      document.removeEventListener('click', handleDocClick);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const divEle = useRef();

  const handleOptClick = (opt) => {
    onChange(opt);
    setIsOpen(false);
  };

  const handleSelectedDivClick = () => {
    setIsOpen(!isOpen);
  };

  const icon = (
    <span className="text-lg absolute right-2">
      {isOpen ? <FaSquareCaretDown /> : <FaSquareCaretLeft />}
    </span>
  );

  const renderedOpts = options.map((opt, idx) => {
    return (
      <div
        className="hover:bg-gray-50 rounded cursor-pointer p-1"
        key={opt.label}
        onClick={() => handleOptClick(opt)}
      >
        {opt.label}
      </div>
    );
  });
  return (
    <div ref={divEle} className="w-96 relative">
      <Panel
        classes="flex justify items-center cursor-pointer"
        onClick={handleSelectedDivClick}
      >
        {value?.label || "Select.."}
        {icon}
      </Panel>
      {isOpen && (
        <Panel classes="absolute top-full bg-white">{renderedOpts}</Panel>
      )}
    </div>
  );
};

export default DropDown;
