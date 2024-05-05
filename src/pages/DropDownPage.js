import { useState } from "react";
import DropDown from "../components/DropDown";

const DropDownPage = () => {
  const [selectedOpt, setSelectedOpt] = useState(null);
  const options = [
    {
      "label": "Single",
      "value": "single",
    },
    {
      "label": "Taken",
      "value": "taken",
    },
    {
      "label": "Waiting for Perfect Love",
      "value": "perfect_love",
    },
    {
      "label": "Mentally dating a celeb that doesn't know about me",
      "value": "celeb_dating",
    },
  ];

  return (
    <div className="dropdown">
      <h2 className="text-2xl bold">DropDown</h2>
      <DropDown
        options={options}
        value={selectedOpt}
        onChange={setSelectedOpt}
      />
    </div>
  );
};

export default DropDownPage;
