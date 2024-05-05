import { useState } from "react";
import DropDown from "../components/DropDown";
import PageHeading from "../components/PageHeading";

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
      <PageHeading>Accordion</PageHeading>
      <DropDown
        options={options}
        value={selectedOpt}
        onChange={setSelectedOpt}
      />
    </div>
  );
};

export default DropDownPage;
